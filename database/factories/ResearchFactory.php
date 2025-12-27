<?php

namespace Database\Factories;

use App\Models\Research;
use Illuminate\Database\Eloquent\Factories\Factory;

class ResearchFactory extends Factory
{
    protected $model = Research::class;

    public function definition(): array
    {
        $types = ['Penelitian', 'Pengabdian Masyarakat'];
        $statuses = ['active', 'completed', 'ongoing'];
        
        return [
            'title' => $this->faker->sentence,
            'abstract' => $this->faker->paragraph,
            'content' => $this->faker->paragraphs(5, true),
            'slug' => $this->faker->unique()->slug,
            'authors' => json_encode([$this->faker->name, $this->faker->name, $this->faker->name]),
            'research_type' => $this->faker->randomElement($types),
            'funding_source' => $this->faker->company,
            'funding_amount' => $this->faker->randomElement([5000000, 10000000, 15000000, 20000000, 25000000, 30000000]),
            'status' => $this->faker->randomElement($statuses),
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->date(),
            'file_path' => null,
            'featured_image' => $this->faker->imageUrl(),
            'published_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'is_published' => true,
        ];
    }
}