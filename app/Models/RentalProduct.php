<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RentalProduct extends Model
{
    use HasFactory;

    protected $table = 'rental_product';
    protected $fillable = [
        'name',
        'description',
        'image',
        'team_id',
    ];
    public function team() {
        return $this->belongsTo('App\Models\Teams');
    }
    // public function productType() {
    //     return $this->hasMany('App\Models\RentalProductType','rental_product_id');
    // }
}
