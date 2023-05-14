<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->integer('style')->default(1);
            $table->string('display')->default('My Name');
            $table->string('avatar')->default('');
            $table->string('bio')->default('My Bio');
            $table->boolean('social')->default(0);
            $table->string('password');
            $table->string('ip')->default('');
            $table->string('lastip')->default('');
            $table->dateTime('lastlogin')->nullable();
            $table->boolean('enable')->default(1);
            $table->string('hash')->nullable();
            $table->boolean('admin')->default(0);
            $table->string('referr')->nullable();
            $table->boolean('showsocial')->default(1);
            $table->boolean('deleted')->default(0);
            $table->boolean('badge')->default(0);
            $table->boolean('suggest')->default(1);
            $table->boolean('emailsend')->default(1);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
