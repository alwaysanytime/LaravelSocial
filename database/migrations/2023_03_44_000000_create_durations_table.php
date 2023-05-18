<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('durations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('detail_id');
            $table->foreign('detail_id')->references('id')->on('rental_product')->onDelete('cascade');
            $table->index('detail_id');

            $table->string('name');
            $table->integer('duration');
            $table->integer('buffer');

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('durations');
    }
};
