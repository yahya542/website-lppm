<?php

namespace Database\Factories;

use App\Models\News;
use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class NewsFactory extends Factory
{
    protected $model = News::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence,
            'content' => $this->faker->paragraphs(3, true),
            'slug' => $this->faker->unique()->slug,
            'author' => $this->faker->name,
            'featured_image' => $this->faker->imageUrl(),
            'published_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'is_published' => true,
            'category_id' => Category::inRandomOrder()->first()?->id,
        ];
    }
}