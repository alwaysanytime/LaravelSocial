<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;

use App\Models\Feedback;

class FeedbackController extends Controller
{

    protected $user;

    public function __construct(){
        $this->middleware("auth:api", ["except" => ["addFeedback"]]);
        $this->user = new User;
    }

    public function addFeedback(Request $req) {
        try {
            $user = Auth::guard("api")->user();
            if (!$req->has('email'))
            $feedback = new Feedback([
                'feedback' => $req->feedback,
                'userid' => $user->id
            ]);
            else
                $feedback = new Feedback([
                    'feedback' => $req->feedback,
                    'userid' => 0,
                    'email' => $req->email
                ]);
            $feedback->save();
            return response()->json([
                'msg' => 'Feedback sent successfully',
            ], 200);
        } catch(\Exception $e) {
            return response()->json([
                'msg' => 'Error occured registering feedback'
            ], 500);
        }
    }
}
