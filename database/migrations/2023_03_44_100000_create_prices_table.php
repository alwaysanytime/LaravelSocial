<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('prices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('duration_id');
            $table->foreign('duration_id')->references('id')->on('durations')->onDelete('cascade');
            $table->index('duration_id');
            $table->unsignedBigInteger('equipment_type_id');
            $table->foreign('equipment_type_id')->references('id')->on('rental_equipment_types')->onDelete('cascade');
            $table->index('equipment_type_id');
            $table->unsignedBigInteger('detail_id');
            $table->foreign('detail_id')->references('id')->on('rental_product')->onDelete('cascade');
            $table->index('detail_id');
            $table->integer('total');
            $table->integer('deposit');

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('prices');
    }
};
