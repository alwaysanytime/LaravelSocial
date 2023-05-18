<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RentalProductType extends Model
{
    use HasFactory;

    protected $table = 'rental_equipment_types';
    protected $fillable = [
        'name',
        'assetID',
        'rental_product_id',
        'description',
        'widget_image',
        'widget_display',
        'min_amount',
        'max_amount',
        'require_min',
    ];
    public function productType() {
        return $this->hasMany('App\Models\RentalProduct');
    }
}
