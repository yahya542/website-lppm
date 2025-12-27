<?php

namespace Database\Seeders;

use App\Models\News;
use App\Models\Category;
use App\Models\Announcement;
use App\Models\Research;
use Illuminate\Database\Seeder;

class NewsSeeder extends Seeder
{
    public function run(): void
    {
        // Buat beberapa kategori
        $categories = Category::factory(5)->create();
        
        // Buat berita dengan kategori
        News::factory(20)->create();
        
        // Buat pengumuman
        Announcement::factory(15)->create();
        
        // Buat penelitian
        Research::factory(10)->create();
    }
}