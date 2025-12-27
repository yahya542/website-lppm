<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Research extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'abstract',
        'content',
        'slug',
        'authors',
        'research_type',
        'funding_source',
        'funding_amount',
        'status',
        'start_date',
        'end_date',
        'file_path',
        'featured_image',
        'published_at',
        'is_published',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'is_published' => 'boolean',
        'start_date' => 'date',
        'end_date' => 'date',
        'funding_amount' => 'decimal:2',
    ];
    
    protected $dates = [
        'start_date',
        'end_date',
    ];
}