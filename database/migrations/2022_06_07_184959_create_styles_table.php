<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStylesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('styles', function (Blueprint $table) {
            $table->id();
            $table->string('background');
            $table->string('link');
            $table->string('color');
            $table->string('linkColor');
            $table->string('buttonborder');
            $table->string('buttonhover');
            $table->string('followbutton');
            $table->string('followbuttonfont');
            $table->string('followbuttonhover');
            $table->string('followbuttonborder');
            $table->string('followingbutton');
            $table->string('followingbuttonfont');
            $table->string('followingbuttonhover');
            $table->string('followingbuttonborder');
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
        Schema::dropIfExists('styles');
    }
}
