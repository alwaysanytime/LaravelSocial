<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Follow;
use Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Carbon\Carbon;
use App\Models\Link;
use App\Models\ResetPassword;
use App\Models\Verification;

class AuthController extends Controller
{

    protected $user;

    public function __construct(){
        $this->middleware("auth:api",["except" => ["login","register","getUserData", "forgot", "reset", "followData"]]);
        $this->user = new User;
    }

    public function verifyStatus(Request $request) {
        $user = Auth::guard('api')->user();
        $verification = Verification::where('userid', $user->id)->get()->last();
        if (!$verification) return response()->json("", 200);
        if ($verification->state == 0) return response()->json("Waiting", 200);
        if ($verification->state == 1) return response()->json("Deny", 200);
        return response()->json("Approved", 200);
    }

    public function verifyuser(Request $request) {
        $user = Auth::guard('api')->user();
        $verification = new Verification([
            'link1' => $request->link1,
            'link2' => $request->link2,
            'userid' => $user->id,
            'state' => 0
        ]);
        $verification->save();
        return response()->json('Success', 200);
    }

    public function followData(Request $request) {
        $user = Auth::guard('api')->user();
        $username = $request->username;
        if ($username)
            $user = User::where('username', $username)->get()->first();
        $follower = [];
        $following = [];
        if ($user) {
            $followers = $user->followre()->get()->count();
            $followings = $user->following()->get()->count();
            $follower = $user->follower()->paginate(20);
            $following = $user->following()->paginate(20);
        }
        return response()->json(['follower' => $follower, 'following' => $following], 200);
    }

    public function follow(Request $request) {
        try {
            $user = Auth::guard('api')->user();
            $follow = User::where('username', $request->username)->get()->first();
            $exist = $user->following()->where('username', $request->username)->get()->first();
            if (!$exist)
                $user->following()->attach($follow);
            return response()->json(['user' => $follow], 200);
        } catch(\Exception $e) {return response()->json('fail', 500);}
    }

    public function unfollow(Request $request) {
        try {
            $user = Auth::guard('api')->user();
            $follow = User::where('username', $request->username)->get()->first();
            $user->following()->detach($follow);
            return response()->json('success', 200);
        } catch(\Exception $e) {return response()->json('fail', 500);}
    }

    public function delete(Request $request) {
        $user = Auth::guard('api')->user();
        $user->deleted = 1;
        $user->save();
        $user = Auth::guard("api")->user()->token();
        $user->revoke();
        return response()->json([
            'msg' => 'Success'
        ], 200);
    }

    public function sendverification(Request $request) {
        try {
            $user = Auth::guard('api')->user();
            $hash = bin2hex(random_bytes(64));
            $link = url('').'/verify/'.$hash;
            $user->hash = $hash;
            $user->save();
            \Mail::to($user->email)->send(new \App\Mail\VerificationEmail($user->username, $link));
            return response()->json(['message' => 'Verification Link Sent'], 200);
        } catch(\Exception $e) {
            return response()->json(['message' => 'Failed to send Verification link'], 500);
        }
    }

    public function forgot(Request $request) {
        $hash = bin2hex(random_bytes(64));
        $link = url('').'/reset/'.$hash;
        \Mail::to($request->email)->send(new \App\Mail\ResetPasswordEmail($link));
        $user = User::where('email', $request->email)->get()->first();
        if (!$user) return response()->json(['message' => 'Email Not Found'], 200);
        $reset = new ResetPassword([
            'email' => $request->email,
            'token' => $hash
        ]);
        $reset->save();
        return response()->json(['message' => 'Reset Password Link sent'.$request->email], 200);
    }

    public function reset(Request $req) {
        $reset = ResetPassword::where('token', $req->token)->get()->last();
        $user = User::where('email', $reset->email)->get()->first();
        $user->password = Hash::make($req->password);
        $user->save();
        return response()->json(['message' => 'Password Changed'], 200);
    }

    public function login(Request $request){
        $credentials = $request->only(["email","password"]);
        $user = User::where('email',$credentials['email'])->first();
        if($user){
            if(!auth()->attempt($credentials)){
                $responseMessage = "Invalid username or password";
                return response()->json([
                    "success" => false,
                    "message" => $responseMessage,
                    "error" => $responseMessage
                ], 422);
            }
            if ($user->enable == 0)
                return response()->json([
                    "success" => false,
                    "message" => 'This account has been suspended',
                ], 422);
            if ($user->deleted == 1)
                return response()->json([
                    "success" => false,
                    "message" => 'This account has been deleted',
                ], 422);
            $user->lastlogin = Carbon::now();
            $user->lastip = $request->getClientIp();
            $user->save();
            $accessToken = auth()->user()->createToken('authToken')->accessToken;
            $responseMessage = "Login Successful";
            dd($accessToken);
            return $this->respondWithToken($accessToken,$responseMessage,auth()->user());
        }
        else{
            $responseMessage = "Sorry, this user does not exist";
            return response()->json([
                "success" => false,
                "message" => $responseMessage,
                "error" => $responseMessage
            ], 422);
        }
    }

    public function register(Request $req) {
            dd ($req);
        try {
            $user = User::where('email',$req->email)->first();
            if ($user) return response()->json(['message' => 'Email already exists'], 500);
            $user = User::where('username',$req->username)->first();
            if ($user) return response()->json(['message' => 'Username already exists'], 500);



            $hash = Hash::make($req->password);
            $hashh = bin2hex(random_bytes(64));
            $link = url('').'/verify/'.$hashh;
            Mail::to($req->email)->send(new \App\Mail\VerificationEmail($req->username, $link));
            $user = new User([
                'username' => $req->username,
                'email' => $req->email,
                'password' => $hash,
                'ip' => $req->getClientIp(),
                'display' => 'My Name',
                'bio' => 'My Bio',
                'hash' => $hashh
            ]);
            if ($req->has('referr')) $user->referr = $req->referr;
            $user->save();

            $follow = User::where('username', $req->follow)->get()->first();
            if ($follow && $follow->id != $user->id && $follow->id != 1)
                $user->following()->attach($follow);

            $link = new Link([
                'title' => 'My first Link',
                'url' => 'https://bookings247.co/'.$req->username,
                'userid' => $user->id,
            ]);
            $link->save();
            $credentials = $req->only(["email","password"]);
            auth()->attempt($credentials);
            $accessToken = auth()->user()->createToken('authToken')->accessToken;
            $responseMessage = "Login Successful";
            return $this->respondWithToken($accessToken,$responseMessage,auth()->user());
        } catch(\Exception $e) {
            print_r($e);
            return;
            return response()->json([
                'error' => 'Internal Server Error!',
            ], 500);
        }
    }

    public function updateAccount(Request $req){
        $fields = ['username', 'email', 'display', 'bio', 'style'];
        $user = Auth::guard("api")->user();
        if ($req->has('email')) {
            $_user = User::where('email', $req->email)->first();
            if ($_user && $_user->id != $user->id)
                return response()->json([
                    'success' => false,
                    'message' => 'Email is already in use'
                ], 422);
        }
        if ($req->has('username')) {
            $_user = User::where('username', $req->username)->first();
            if ($_user && $_user->id != $user->id)
                return response()->json([
                    'success' => false,
                    'message' => 'Username is already in use'
                ], 422);
        }
        $user = User::find($user->id);
        foreach($fields as $field)
            if ($req->has($field)) {
                $val = $req->$field;
                if (!$val) $val = "";
                $user->$field = $val;
            }
        $user->save();
        return response()->json([
                "success" => true,
        ], 200);
    }

    public function logout(){
        $user = Auth::guard("api")->user()->token();
        $user->revoke();
        $responseMessage = "successfully logged out";
        return response()->json([
            'success' => true,
            'message' => $responseMessage
            ], 200);
    }

    public function changePassword(Request $req) {
        $user = Auth::guard("api")->user();
        if (Hash::check($req->oldpassword, $user->password)) {
            if ($req->newpassword == "" || !$req->password)
                return response()->json([
                    'success' => false,
                    'message' => 'Password can not be empty string'
                    ], 422);
            $user->password = Hash::make($req->newpassword);
            $user->save();
            return response()->json([
                'success' => true,
                'message' => 'Password Updated Successfully'
                ], 200);
        }
        else
            return response()->json([
                'success' => false,
                'message' => 'Wrong Password'
            ], 422);
    }

    public function upload(Request $request) {
            // $folderPath = public_path('avatar/');
            $folderPath = base_path().'//bookings247.co//avatar//';
            $image_parts = explode(";base64,", $request->avatar);
            $image_type_aux = explode("image/", $image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_base64 = base64_decode($image_parts[1]);

            $imageName = date('YmdHis').rand(100000, 999999).'.jpeg';

            $imageFullPath = $folderPath.$imageName;
            file_put_contents($imageFullPath, $image_base64);

            $user = Auth::guard("api")->user();
            $user->avatar = '/avatar/'.$imageName;
            $user->save();
            return response()->json(['status' => 'success', 'message' => 'Avatar Uploaded Successfully', 'link' => $user->avatar], 200);
    }

    public function verifycheck(Request $req) {
        $user = Auth::guard("api")->user();
        return response()->json(['status' => 'success', 'message' => 'Avatar Uploaded Successfully', 'verify' => $user->email_verified_at], 200);
    }

    public function getavatar(Request $req) {
        $user = Auth::guard("api")->user();
        return response()->json(['status' => 'success', 'message' => 'Avatar Uploaded Successfully', 'avatar' => $user->avatar], 200);
    }

    public function getUserData(Request $req) {
        $user = User::where('username', $req->username)->first();
        if (!$user)
            return response()->json(['msg' => 'user not exist'], 500);
        return response()->json(['user' => $user, 'links' => $user->links], 200);
    }

    public function getcurrentuser(Request $req) {
        $user = Auth::guard('api')->user();
        return response()->json(['data' => $user], 200);
    }

    public function togglesocial(Request $req) {
        $user = Auth::guard('api')->user();
        if ($req->action == "showfollow") $user->showfollow = 1 - $user->showfollow;
        else if ($req->action == "badge") $user->badge = 1- $user->badge;
        else if ($req->action == "suggest") $user->suggest = 1 - $user->suggest;
        else if ($req->show == false) $user->social = 1- $user->social;
        else $user->showsocial = 1 - $user->showsocial;
        $user->save();
        return response()->json(['msg' => 'Success'], 200);
    }

    public function setUserCompact(Request $req) {
        $user = Auth::gurad('api')->user();
        $user->social = 1 - $user->social;
        $user->save();
        return response()->json([
            'msg' => 'Success'
        ], 200);
    }

}
