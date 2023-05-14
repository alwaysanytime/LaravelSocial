<?php

use App\Http\Controllers\api\AuthController;
use App\Http\Controllers\api\LinksController;
use App\Http\Controllers\api\FeedbackController;
use App\Http\Controllers\api\StyleController;
use App\Http\Controllers\api\HistoryController;

Route::group(['middleware' => 'CORS'], function ($router) {

    //Auth Routes
    Route::get('/email/verification', [AuthController::class, 'sendverification']);

    Route::post('/register', [AuthController::class, 'register'])->name('register.user');
    Route::post('/login', [AuthController::class, 'login'])->name('login.user');
    Route::get('/logout', [AuthController::class, 'logout'])->name('logout.user');
    Route::get('/follow-count', [AuthController::class, 'followCount'])->name('followCount');
    Route::get('/follow-data', [AuthController::class, 'followData']);

    Route::post('/updateaccount', [AuthController::class, 'updateAccount'])->name('updateAccount');
    Route::post('/changepassword', [AuthController::class, 'changePassword'])->name('changePassword');
    Route::post('/avatar', [AuthController::class, 'upload'])->name('upload');
    Route::post('/verifycheck', [AuthController::class, 'verifycheck']);
    Route::post('/getavatar', [AuthController::class, 'getavatar']);
    Route::post('/getUserData', [AuthController::class, 'getUserData']);
    Route::post('/getcurrentuser', [AuthController::class, 'getcurrentuser']);
    Route::post('/togglesocial', [AuthController::class, 'togglesocial']);
    Route::post('/reset', [AuthController::class, 'reset']);
    Route::post('/forgot', [AuthController::class, 'forgot']);
    Route::post('/follow', [AuthController::class, 'follow']);
    Route::post('/unfollow', [AuthController::class, 'unfollow']);
    Route::post('/follow-notify', [LinksController::class, 'getnotify']);
    Route::post('/toggle-notify', [LinksController::class, 'togglenotify']);
    Route::post('/verifyuser', [AuthController::class, 'verifyuser']);
    Route::post('/get-verified', [AuthController::class, 'verifyStatus']);

    //Link Routes
    Route::get('/links', [LinksController::class, 'links']);
    Route::post('/links/insert', [LinksController::class, 'addLink']);
    Route::post('/links/delete', [LinksController::class, 'removeLink']);
    Route::post('/links/update', [LinksController::class, 'updateLink']);
    Route::post('/links/toggle', [LinksController::class, 'toggleLink']);
    Route::post('/links/swap', [LinksController::class, 'swapLink']);
    Route::post('/links/togglemask', [LinksController::class, 'togglemask']);
    Route::post('/sendemail', [LinksController::class, 'sendemail']);

    //Feedback Route
    Route::post('/feedback/add', [FeedbackController::class, 'addFeedback']);

    Route::post('/styles', [StyleController::class, 'styles']);

    Route::post('/addhistory', [HistoryController::class, 'addhistory']);
    Route::post('/click', [HistoryController::class, 'click']);
    Route::post('/history', [HistoryController::class, 'history']);
    Route::post('/useranalytics', [HistoryController::class, 'useranalytics']);
});