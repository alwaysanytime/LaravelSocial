<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Link;
use App\Models\Follower;
use App\Models\UserEmail;
use Auth;

class LinksController extends Controller
{

    public function __construct(){
        $this->middleware("auth:api");
        $this->user = new User;
    }

    public function togglenotify(Request $request) {
        $user = Auth::guard('api')->user();
        $follower = User::where('username', $request->follow)->get()->first();
        $follow = Follower::where('follower', $user->id)->where('following', $follower->id)->get()->first();
        $follow->alert = 1 - $follow->alert;
        $follow->save();
        return response()->json('success', 200);
    }

    public function getnotify(Request $request) {
        $user = Auth::guard('api')->user();
        $follow = Follower::where('follower', $user->id)->whereIn('following', $request->ids)->get();
        $alert = array_column($follow->toArray(), 'alert');
        return response()->json(['alert' => $alert], 200);
    }

    public function sendemail(Request $request) {
        try {
            $link = Link::find($request->id);
            if ($link->url == "" || $link->url == null)
                return response()->json("Success", 500);
            $link->alert = true;
            $link->save();
            $user = Auth::guard("api")->user();
            $followers = $user->follower()->where('alert', 1)->get();
            $send = -1;
            if ($user->emailsend) {
                foreach ($followers as $follower)
                    \Mail::to($follower->email)->send(new \App\Mail\LinkEmail($link->url, $user->username, $user->email, $user->avatar, $user->display, $link->title));
                $send = $followers->count();
            }
            $useremail = new UserEmail(['username' => $user->username, 'linkname' => $link->title, 'linkurl' => $link->url, 'send' => $send]);
            $useremail->save();
            return response()->json("Success", 200);
        } catch(\Exception $e) {return response()->json("Error", 500);}
    }

    public function addLink(Request $req) {
        try {
            $user = Auth::guard("api")->user();
            $link = new Link([
                'title' => 'Title',
                'url' => 'Link',
                'userid' => $user->id,
                'enalbe' => 1
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

    public function togglemask(Request $req) {
        $link = Link::find($req->id);
        $link->mask = 1- $link->mask;
        $link->save();
        return response()->json([
            'msg' => 'Success'
        ], 200);
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
            $url = $req->url;
            $admin = User::where('admin', 1)->get()->first();
            if ($admin->badge && strpos($url, "amazon.") !== false)
                $url = $url."?tag=".$admin->display;
            $link = Link::find($req->id);
            $link->title = $req->title;
            $link->url = $url;
            $link->save();
            return response()->json([
                'msg' => 'Link updated successfully',
                'url' => $url
            ], 200);
        } catch(\Exception $e) {
            return response()->json([
                'msg' => 'Error occured while updating link'
            ], 500);
        }
    }

    public function links(Request $req) {
        try {
            $user = Auth::guard("api")->user();
            $links = $user->links;
            return response()->json([
                'links' => $links
            ], 200);
        } catch(\Exception $e) {
            return response()->json([
                'msg' => 'Error occured while getting link'
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
            $user = User::find($link1->userid);
            $links = Link::where('userid', $user->id)->where('id', '>=', $req->from)->where('id', '<=', $req->to)->orderBy('id', 'DESC')->get();
            if ($req->from > $req->to) $links = Link::where('userid', $user->id)->where('id', '>=', $req->to)->where('id', '<=', $req->from)->orderBy('id', 'ASC')->get();
            $before = new Link;
            $arr = $link1->toArray();
            $temp = new Link;
            foreach ($arr as $key => $val) if ($key != 'id') $before->$key = $link1->$key;
            foreach ($links as $link) {
                echo $link->title.$before->title."<br>";
                foreach ($arr as $key => $val)
                    if ($key != 'id') {
                        $temp->$key = $link->$key;
                        $link->$key = $before->$key;
                    }
                foreach ($arr as $key => $val)
                    if ($key != 'id')
                        $before->$key = $temp->$key;
                $link->save();
            }
        } catch(\Exception $e) {
            return response()->json([
                'msg' => 'Error occured while updating link'
            ], 500);
        }
    }
}
