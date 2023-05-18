<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Link;
use App\Models\Verification;

use Carbon\Carbon;

class UserController extends Controller
{

    public function approveverifyuser(Request $request) {
        $verification = Verification::find($request->id);
        $verification->state = $request->allow == 1 ? 1 : -1;
        $verification->save();
        $user = $verification->user;
        if ($verification->state == -1) {
            $user->verified = 1;
            $user->badge = 1;
        }
        if ($verification->state == 1) {
            $user->verified = 0;
            $user->badge = 0;
        }
        $user->save();
        return "success";
    }

    public function changeuser(Request $request) {
        $user = User::where('username', $request->username)->get()->first();
        if ($request->email) $user->email_verified_at = Carbon::now();
        else $user->email_verified_at = "";
        $user->deleted = 1 - $request->profile;
        $user->verified = $request->verified;
        $user->emailsend = $request->emailsend;
        if ($user->verified == 0)
            $user->badge = 0;
        $user->save();
        return "success";
    }

    public function updateAccount(Request $req){
        $fields = ['username', 'email', 'display', 'bio'];
        if ($req->has('email')) {
            $_user = User::where('email', $req->email)->first();
            if ($_user)
                return response()->json([
                    'success' => false,
                    'message' => 'Email is already in use'
                ], 422);
        }
        if ($req->has('username')) {
            $_user = User::where('username', $req->Username)->first();
            if ($_user)
                return response()->json([
                    'success' => false,
                    'message' => 'Username is already in use'
                ], 422);
        }
        $user = User::where('username', $req->username)->first();
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

    public function changePassword(Request $req) {
        $user = Auth::guard("api")->user();
        if (Hash::check($req->oldpassword, $user->password)) {
            echo $user->password.$req->oldpassword;
            return;
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

            $imageName = date('YmdHis').rand(100000, 999999).'.png';

            $imageFullPath = $folderPath.$imageName;
            file_put_contents($imageFullPath, $image_base64);

            $user = User::where('username', $request->username)->first();
            $user->avatar = '/avatar/'.$imageName;
            $user->save();
            return response()->json(['status' => 'success', 'message' => 'Avatar Uploaded Successfully', 'link' => $user->avatar], 200);
    }

    public function addLink(Request $req) {
        try {
            $user = User::where('username', $req->username)->first();
            $link = new Link([
                'title' => 'Title',
                'url' => 'Link',
                'userid' => $user->id
            ]);
            $link->save();
            return response()->json([
                'msg' => 'Link added successfully',
                'id' => $link->id
            ], 200);
        } catch(\Exception $e) {
            return response()->json([
                'msg' => 'Error occured while inserting new link'
            ], 500);
        }
    }

    public function removeLink(Request $req) {
        try {
            $link = Link::find($req->id);
            $link->delete();
            return response()->json([
                'msg' => 'Link deleted successfully'
            ], 200);
        } catch(\Exception $e) {
            return response()->json([
                'msg' => 'Error occured while deleting link'
            ], 500);
        }
    }

    public function updateLink(Request $req) {
        try {
            $link = Link::find($req->id);
            $link->title = $req->title;
            $link->url = $req->url;
            $link->save();
            return response()->json([
                'msg' => 'Link updated successfully'
            ], 200);
        } catch(\Exception $e) {
            return response()->json([
                'msg' => 'Error occured while updating link'
            ], 500);
        }
    }

    public function toggleLink(Request $req) {
        try {
            $link = Link::find($req->id);
            $link->enable = 1 - $link->enable;
            $link->save();
            return response()->json([
                'msg' => 'Link deleted successfully',
            ], 200);
        } catch(\Exception $e) {
            return response()->json([
                'msg' => 'Error occured while deleting link'
            ], 500);
        }
    }

    public function swapLink(Request $req) {
        try {
            $link1 = Link::find($req->from);
            $link2 = Link::find($req->to);
            $arr = $link1->toArray();
            foreach ($arr as $key => $val) {
                $temp = $link1->$key;
                if ($key == 'id') continue;
                $link1->$key = $link2->$key;
                $link2->$key = $temp;
            }
            $link1->save();
            $link2->save();
        } catch(\Exception $e) {
            return response()->json([
                'msg' => 'Error occured while updating link'
            ], 500);
        }
    }
}
