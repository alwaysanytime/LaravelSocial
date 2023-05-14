<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/admin/login', function() {return view('admin.login');})->name('login');
Route::post('/admin/login', [AdminController::class, 'login'])->name('admin.login');
Route::get('/admin/logout', [AdminController::class, 'logout'])->name('admin.logout');

Route::group(['middleware' => ['auth']], function() {
    Route::post('/admin/toggle', [AdminController::class, 'toggle'])->name('admin.toggle');
    Route::post('/admin/remove', [AdminController::class, 'remove'])->name('admin.remove');
    Route::post('/admin/verifyuser', [AdminController::class, 'verifyUser'])->name('admin.verifyUser');
    Route::get('/admin/userlist', [AdminController::class, 'userlist'])->name('admin.userlist');
    Route::get('/admin/feedback', [AdminController::class, 'feedback'])->name('admin.feedback');
    Route::get('/admin/style', [AdminController::class, 'style'])->name('admin.style');
    Route::get('/admin/suggest', [AdminController::class, 'suggest'])->name('admin.suggest');
    Route::get('/admin/useremail', [AdminController::class, 'useremail'])->name('admin.useremail');
    Route::get('/admin/setting', [AdminController::class, 'setting'])->name('admin.setting');
    Route::get('/admin/verification', [AdminController::class, 'verification'])->name('admin.verification');
    Route::post('/admin/swaplink', [AdminController::class, 'swaplink'])->name('admin.swaplink');
    Route::post('/admin/suggestskip', [AdminController::class, 'suggestskip'])->name('admin.suggestskip');

    Route::post('/admin/savesetting', [AdminController::class, 'savesetting'])->name('admin.savesetting');
    Route::post('/admin/suggest', [AdminController::class, 'sendsuggest'])->name('admin.sendsuggest');
    Route::post('/admin/changestyle', [AdminController::class, 'changestyle'])->name('admin.changestyle');
    Route::post('/admin/removestyle', [AdminController::class, 'removestyle'])->name('admin.removestyle');
    Route::post('/admin/changeuser', [UserController::class, 'changeuser'])->name('admin.changeuser');
    Route::post('/admin/approveverifyuser', [UserController::class, 'approveverifyuser'])->name('admin.approveverifyuser');

    Route::post('/api/admin/links/insert', [UserController::class, 'addLink']);
    Route::post('/api/admin/links/delete', [UserController::class, 'removeLink']);
    Route::post('/api/admin/links/update', [UserController::class, 'updateLink']);
    Route::post('/api/admin/links/toggle', [UserController::class, 'toggleLink']);
    Route::post('/api/admin/links/swap', [UserController::class, 'swapLink']);

    Route::post('/api/admin/updateaccount', [UserController::class, 'updateAccount']);
    Route::post('/api/admin/avatar', [UserController::class, 'upload']);
});

Route::get('/verify/{hash}', [AdminController::class, 'verify'])->name('user.verify');
Route::post('/feedback/read', [AdminController::class, 'readfeedback'])->name('admin.readfeedback');

Route::get('/admin/edit/{username}', [AdminController::class, 'edit'])->name('admin.edit');
Route::get('/admin/analytics/{username}', [AdminController::class, 'analytics'])->name('admin.analytics');
Route::get('/admin/follow/{username}', [AdminController::class, 'analytics'])->name('admin.analytics');

Route::fallback([AdminController::class, 'welcome']);
