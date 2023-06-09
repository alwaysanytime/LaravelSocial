<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersTableSeeder extends Seeder
{
    static $users = [
        [
            'username' => 'AnyTime',
            'email' => 'alwaysanytime0305@mail.com',
            'password' => 12345678,
            'current_team_id' => 1,
            'profile_photo_path' => '',
        ],
        [
            'username' => 'User1',
            'email' => 'user1@mail.com',
            'password' => 12345678,
            'current_team_id' => 1,
            'profile_photo_path' => '',
        ],
        [
            'username' => 'User2',
            'email' => 'user2@mail.com',
            'password' => 12345678,
            'current_team_id' => 1,
            'profile_photo_path' => '',
        ],
        [
            'username' => 'User3',
            'email' => 'user3@mail.com',
            'password' => 12345678,
            'current_team_id' => 1,
            'profile_photo_path' => '',
        ],
        [
            'username' => 'User4',
            'email' => 'user4@mail.com',
            'password' => 12345678,
            'current_team_id' => 1,
            'profile_photo_path' => '',
        ],
    ];
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (self::$users as $user) {
            DB::table('users')->insert([
                'name'              => $user['name'],
                'email'             => $user['email'],
                'password'          => bcrypt($user['password']),
                'current_team_id'   => $user['current_team_id'],
                'profile_photo_path'=> $user['profile_photo_path'],
                'email_verified_at' => date("Y-m-d H:i:s"),
                'created_at'        => date("Y-m-d H:i:s"),
                'updated_at'        => date("Y-m-d H:i:s"),
            ]);
        }
    }
}
