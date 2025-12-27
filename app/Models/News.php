<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'slug',
        'author',
        'featured_image',
        'published_at',
        'is_published',
        'category_id',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'is_published' => 'boolean',
    ];
    
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}