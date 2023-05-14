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
use App\Models\Style;

class StyleController extends Controller
{

    protected $user;

    public function __construct(){
        $this->middleware("auth:api",["except" => ["styles"]]);
        $this->user = new User;
    }

    public function styles(Request $request) {
        $styles = Style::all();
        return response()->json(['message' => 'Verification Link Sent', 'styles' => $styles], 200);
    }
}
