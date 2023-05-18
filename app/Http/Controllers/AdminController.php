<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use App\Models\Link;
use App\Models\Style;
use App\Models\Referrer;
use App\Models\SuggestEmail;
use App\Models\UserEmail;
use App\Models\Verification;

class AdminController extends Controller
{

    public function suggestskip(Request $request) {
        $from = $request->fromuser;
        $to = $request->touser;
        $suggest = SuggestEmail::where('from', $from)->where('to', $to)->get()->last();
        $user = User::where('username', $to)->get()->first();
        $total = $user->follower()->get()->count();
        $followers = $user->follower()->where('users.suggest', 1);
        if ($suggest)
            $followers = $followers->whereDate('users.created_at', '>=', $suggest->created_at)->get();
        $send = $followers->count();
        return response()->json(["total" => $total, "send" => $send], 200);
    }

    public function verification() {
        $verifications = Verification::orderBy('id', 'DESC')->get();
        return view('admin.verification', ['verifications' => $verifications]);
    }

    public function suggest(Request $request) {
        $suggests = SuggestEmail::orderBy('id', 'DESC')->get();
        $users = User::where('admin', '!=', 1)->get();
        return view('admin.suggestemail', ['suggests' => $suggests, 'users' => $users]);
    }

    public function setting(Request $request) {
        $user = User::where('admin', 1)->get()->first();
        return view('admin.setting', ['user' => $user]);
    }

    public function swaplink(Request $request) {
        $style1 = Style::find($request->from);
        $style2 = Style::find($request->to);
        $arr = $style1->toArray();
        foreach ($arr as $key => $val) {
            if ($key == 'id') continue;
            $style1->$key = $style2->$key;
            $style2->$key = $val;
        }
        $style1->save();
        $style2->save();
        $users = User::where('style', $style1->id)->get();
        foreach($users as $user) {
            $user->style = $style2->id;
            $user->save();
        }
        $users = User::where('style', $style2->id)->get();
        foreach($users as $user) {
            $user->style = $style1->id;
            $user->save();
        }
        return "success";
    }

    public function savesetting(Request $request) {
        $user = User::where('admin', 1)->get()->first();
        $links = Link::where('url', 'LIKE', '%amazon.%')->get();
        foreach($links as $link) {
            $url = $link->url;
            $pos = strpos($url, "?tag=");
            if ($pos !== false)
                $url = substr($url, 0, $pos);
            if ($request->tracking)
                $url = $url."?tag=".$request->amazon;
            $link->url = $url;
            $link->save();
        }
        $user->display = $request->amazon;
        $user->badge = $request->tracking ? 1 : 0;
        $user->save();
        return "success";
    }

    public function useremail(Request $request) {
        $useremails = UserEmail::orderBy('id', 'DESC')->get();
        return view('admin.useremail', ['useremails' => $useremails]);
    }

    public function sendsuggest(Request $request) {
            $from = $request->from;
            $to = $request->to;
            $suggest = SuggestEmail::where('from', $from)->where('to', $to)->get()->last();
            $user = User::where('username', $to)->get()->first();
            $total = $user->follower()->get()->count();
            $followers = $user->follower()->where('users.suggest', 1);
            if ($suggest && $request->duplicate)
                $followers = $followers->whereDate('users.created_at', '>=', $suggest->created_at);
            $followers = $followers->get();
            $send = $followers->count();
            foreach ($followers as $follower) {
                $links = $follower->links()->get();
                \Mail::to($follower->email)->send(new \App\Mail\SuggestMail($user, $links, $request->subject));
            }
            $send = $followers->count();
            $suggest = new SuggestEmail([
                'from' => $from,
                'to' => $to,
                'subject' => $request->subject,
                'send' => $send,
                'skip' => $total - $send
            ]);
            $suggest->save();

            return response()->json("success", 200);
    }

    public function welcome(Request $req) {
        $current_url = $req->path();
        $user = User::where('username', $current_url)->first();
        $referrer = request()->headers->get('referer');
        $host = parse_url($referrer, PHP_URL_HOST);
        if ($host && $host != "" && $user && $host != "bookings247.co") {
            $referrer = new Referrer(['referrer' => $referrer, 'host' => $host, 'username' => $current_url]);
            $referrer->save();
        }
        if (!$user) {
            $user = new User([
                'display' => '',
                'username' => '',
                'bio' => '',
                'avatar' => '',
            ]);
        }
        return view('welcome', ['user' => $user]);
        // return view('user.profile', ['user' => $user, 'links' => $user->links()->get(), 'style' => $user->style()->get()->first()]);
    }

    public function edit(Request $req) {
        $user = Auth::user();
        if (!$user || $user->admin != 1)
            return redirect('/');
        return view('welcome', ['user' =>null]);
    }

    public function analytics(Request $req) {
        $user = Auth::user();
        if (!$user || $user->admin != 1)
            return redirect('/');
        return view('welcome', ['user' => null]);
    }

    public function updateuser(Request $req) {

    }

    public function changestyle(Request $req) {
        try {
            if ($req->id) {
                $style = Style::find($req->id);
                $style->background = $req->background;
                $style->link = $req->link;
                $style->color = $req->color;
                $style->linkColor = $req->linkColor;
                $style->buttonhover = $req->buttonhover;
                $style->buttonborder = $req->buttonborder;
                $style->followbutton = $req->followbutton;
                $style->followbuttonfont = $req->followbuttonfont;
                $style->followbuttonhover = $req->followbuttonhover;
                $style->followbuttonborder = $req->followbuttonborder;
                $style->followingbutton = $req->followingbutton;
                $style->followingbuttonfont = $req->followingbuttonfont;
                $style->followingbuttonhover = $req->followingbuttonhover;
                $style->followingbuttonborder = $req->followingbuttonborder;
            } else {
                $style = new Style([
                    'background' => $req->background,
                    'link' => $req->link,
                    'color' => $req->color,
                    'linkColor' => $req->linkColor,
                    'buttonhover' => $req->buttonhover,
                    'buttonborder' => $req->buttonborder,
                    'followbutton' => $req->followbutton,
                    'followbuttonfont' => $req->followbuttonfont,
                    'followbuttonhover' => $req->followbuttonhover,
                    'followbuttonborder' => $req->followbuttonborder,
                    'followingbutton' => $req->followingbutton,
                    'followingbuttonfont' => $req->followingbuttonfont,
                    'followingbuttonhover' => $req->followingbuttonhover,
                    'followingbuttonborder' => $req->followingbuttonborder,
                ]);
            }
            $style->save();
            return 'success';
        } catch(\Exception $e) {
            return 'fail';
        }
    }

    public function removestyle(Request $req) {
        $style = Style::find($req->id);
        $style->delete();
        return 'success';
    }

    public function style (Request $req) {
        $styles = Style::all();
        return view('admin.styles', ['styles' => $styles]);
    }

    public function profile(Request $req) {
        $user = User::where('username', $req->username)->get()->first();
        if (!$user) {
            $user = new User;
            $user->username = "Cookie";
            $user->display="@Cookie";
            $user->bio = "This is my bio";
            $user->links = [new Link(['title' => 'My first Link', 'url' => 'https://first.link', 'enable' => 1]), new Link(['title' => 'My Second Link', 'url' => 'https://second.link', 'enable' => 1])];
        }
        return view('admin.profile', ['user' => $user]);
    }


    public function verify(Request $req) {
        $user = User::where('hash', $req->hash)->first();
        if ($user) {
            $user->email_verified_at = Carbon::now();
            $user->save();
        }
        return redirect('/login');
    }

    public function logout() {
        Auth::logout();
        return redirect()->route('admin.login');
    }

    public function login(Request $req) {
        $credentials = ['username' => $req->admin_name, 'password' => $req->password, 'admin' => 1];
        if (Auth::attempt($credentials)) {
            return redirect()->route('admin.userlist');
        }
        return redirect()->route('admin.login');
    }

    public function userlist(Request $req) {
        $users = User::where('admin', 0)->orderBy('id', 'DESC')->get();
        return view('admin.userlist', ['users' => $users]);
    }


    public function toggle(Request $req) {
        $user = User::find($req->id);
        if ($req->action == "delete") $user->deleted = 0;
        else $user->enable = $user->enable ? 0 : 1;
        $user->save();
        return 'success';
    }

    public function verifyUser(Request $req) {
        $user = User::find($req->id);
        $user->email_verified_at = Carbon::now();
        $user->save();
        return "success";
    }

    public function remove(Request $req) {
        $user = User::find($req->id);
        $user->deleted = 1;
        $user->save();
        return 'success';
    }
}
