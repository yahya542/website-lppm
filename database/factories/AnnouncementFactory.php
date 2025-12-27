<?php

namespace Database\Factories;

use App\Models\Announcement;
use Illuminate\Database\Eloquent\Factories\Factory;

class AnnouncementFactory extends Factory
{
    protected $model = Announcement::class;

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
        ];
    }
}