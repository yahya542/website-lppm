<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class News extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'excerpt',
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
    
    /**
     * Set the title attribute and automatically generate slug
     *
     * @param string $value
     * @return void
     */
    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        
        // Only generate slug if it hasn't been set manually
        if (!$this->isDirty('slug') && !$this->getAttribute('slug')) {
            $this->attributes['slug'] = $this->generateUniqueSlug($value);
        }
    }
    
    /**
     * Set the content attribute and automatically generate excerpt if not provided
     *
     * @param string $value
     * @return void
     */
    public function setContentAttribute($value)
    {
        $this->attributes['content'] = $value;
        
        // Auto-generate excerpt if it hasn't been set manually and content is being updated
        if (!$this->isDirty('excerpt') && !$this->getAttribute('excerpt') && !empty($value)) {
            $this->attributes['excerpt'] = $this->generateExcerpt($value);
        }
    }
    
    /**
     * Generate a unique slug based on the title
     *
     * @param string $title
     * @return string
     */
    private function generateUniqueSlug($title)
    {
        $slug = Str::slug($title);
        $originalSlug = $slug;
        $count = 1;
        
        while (static::where('slug', $slug)->where('id', '!=', $this->id ?? null)->exists()) {
            $slug = $originalSlug . '-' . $count;
            $count++;
        }
        
        return $slug;
    }
    
    /**
     * Generate excerpt from content
     *
     * @param string $content
     * @return string
     */
    private function generateExcerpt($content)
    {
        // Remove HTML tags and trim the content to create an excerpt
        $cleanContent = strip_tags($content);
        $excerpt = Str::limit($cleanContent, 150, '...');
        
        return $excerpt;
    }
    
    /**
     * Boot the model and attach event handlers
     */
    protected static function boot()
    {
        parent::boot();
        
        static::creating(function ($news) {
            if (empty($news->slug)) {
                $news->slug = $news->generateUniqueSlug($news->title);
            }
            
            if (empty($news->excerpt) && !empty($news->content)) {
                $news->excerpt = $news->generateExcerpt($news->content);
            }
        });
    }
}