<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Carbon\Carbon;
use App\Models\Link;
use App\Models\History;
use Jenssegers\Agent\Agent;
use App\Models\Referrer;
use App\Models\Outclick;

class HistoryController extends Controller
{

    protected $user;

    public function __construct(){
        $this->middleware("auth:api",["except" => ["addhistory","click", "useranalytics"]]);
        $this->user = new User;
    }

    public function useranalytics(Request $req) {
        $now = Carbon::parse($req->to)->addDay();
        if ($req->period != "all") $before = Carbon::now()->subDays($req->period);
        if (!isset($req->username)) $user = Auth::guard('api')->user();
        else $user = User::where('username', $req->username)->get()->first();
        $history = History::where('username', $user->username)->get();

        $totalview = $history->count();
        $totalclick = 0;

        $part = History::all();
        $out = Outclick::all();
        if ($req->period != "all") {
            $part = History::where('username', $user->username)->whereDate("created_at", ">=", $before)->whereDate("created_at", "<=", $now)->get();
            $out = Outclick::where('userid', $user->id)->whereDate("created_at", ">=", $before)->whereDate("created_at", "<=", $now)->get();
        }
        $partview = $part->count();
        $partclick = 0;

        $details = ['Mobile' => ['view' => 0, 'click' => 0], 'Tablet' => ['view' => 0, 'click' => 0], 'Desktop' => ['view' => 0, 'click' => 0], 'Other' => ['view' => 0, 'click' => 0]];
        $detailscountry = [];
        $detailscity = [];
        $datedetails = [];

        // $date = $before;
        // $str_now = $now->format('Y/m/d');
        // $str = $date->format('Y/m/d');
        // $from = $str;
        // while(strcmp($str, $str_now) <= 0) {
        //     $datedetails[$str] = ['view' => 0, 'click' => 0];
        //     $date = $date->addDay();
        //     $str = $date->format('Y/m/d');
        // }

        foreach ($part as $par) {
            $partclick += $par->clicks;
            $details[$par->device]['view'] = $details[$par->device]['view'] + 1;
            $details[$par->device]['click'] += $par->clicks;

            if (!isset($detailscountry[$par->country]))
                $detailscountry[$par->country] = ['view' => 0, 'click' => 0];
            $detailscountry[$par->country]['view']++;
            $detailscountry[$par->country]['click']+=$par->clicks;

            if (!isset($detailscity[$par->city]))
                $detailscity[$par->city] = ['view' => 0, 'click' => 0];
            $detailscity[$par->city]['view']++;
            $detailscity[$par->city]['click']+=$par->clicks;
        }

        $links = [];
        foreach ($out as $click) {
            $link = Link::find($click->link);
            if (!isset($links[$click->link]))
                $links[$click->link] = ['clicks' => 0, 'title' => $link->title, 'url' => $link->url];
            $links[$click->link]['clicks'] += $click->click;
        }

        if ($req->period != "all") $referrer = Referrer::where('username', $user->username)->whereDate("created_at", ">=", $before)->whereDate("created_at", "<=", $now)->get();
        else $referrer = Referrer::all();
        $ref = [];
        $totalref = 0;
        foreach($referrer as $val) {
            if (!isset($ref[$val->host])) $ref[$val->host] = ['view' => 0];
            $ref[$val->host]['view']++;
            if (!isset($ref[$val->host][$val->referrer])) $ref[$val->host][$val->referrer] = 0;
            $ref[$val->host][$val->referrer]++;
            $totalref++;
        }

        return response()->json([
            'total' => ['view' => $totalview, 'click' => $totalclick],
            'part' => ['view' => $partview, 'click' => $partclick],
            'details' => $details,
            'country' => $detailscountry,
            'city' => $detailscity,
            'date' => $datedetails,
            'links' => $links,
            'totalref' => $totalref,
            'ref' => $ref
        ], 200);
    }

    public function addhistory(Request $req) {
        $agent = new Agent;
        $device = 'Other';
        if ($agent->isTablet()) $device = 'Tablet';
        else if ($agent->isPhone()) $device = 'Mobile';
        else if ($agent->isDesktop()) $device = 'Desktop';
        $ip = $req->ip();
        $data = \Location::get($ip);
        $history = new History([
            'username' => $req->username,
            'ip' => $ip,
            'country' => $data->countryName,
            'city' => $data->cityName,
            'device' => $device
        ]);
        $history->save();
        return response()->json(['id' => $history->id], 200);
    }

    public function click(Request $req) {
        try {
            $history = History::find($req->id);
            $history->clicks++;
            $history->save();
            $user = User::where('username', $req->username)->get()->first();
            $link = Link::where('userid', $user->id)->where('url', $req->link)->get()->first();
            // $link->clicks = $link->clicks + 1;
            // $link->save();
            $now = date('Ymd');
            $out = Outclick::where('date', $now)->where('userid', $user->id)->get()->first();
            if (!$out) {
                $out = new Outclick(['date' => $now, 'userid' => $user->id, 'click' => 0, 'link' => $link->id]);
                $out->save();
            }
            $out->click = $out->click + 1;
            $out->save();
            return response()->json('success', 200);
        } catch(\Exception $e) {return response()->json('error', 500);}
    }

    public function history(Request $req) {

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
