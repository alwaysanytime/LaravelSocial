<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function links() {
        return $this->hasMany(Link::class, 'userid')->orderBy('id', 'DESC');
    }

    public function following() {
        return $this->belongsToMany(User::class, 'followers', 'follower', 'following')->whereNotNull('users.email_verified_at')->where('users.deleted', 0)->where('users.enable', 1)->withTimestamps();
    }

    public function follower() {
        return $this->belongsToMany(User::class, 'followers', 'following', 'follower')->whereNotNull('users.email_verified_at')->where('users.deleted', 0)->where('users.enable', 1)->withTimestamps();
    }

    public function style() {
        return $this->belongsTo(Style::class, 'style');
    }
}
