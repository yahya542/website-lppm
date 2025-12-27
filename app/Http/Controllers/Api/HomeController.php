<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Announcement;
use App\Models\Research;
use App\Models\Category;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        // Ambil berita terbaru
        $latestNews = News::with('category')
            ->where('is_published', true)
            ->latest()
            ->take(5)
            ->get();
            
        // Ambil pengumuman terbaru
        $latestAnnouncements = Announcement::where('is_published', true)
            ->latest()
            ->take(5)
            ->get();
            
        // Ambil penelitian terbaru
        $latestResearch = Research::where('is_published', true)
            ->latest()
            ->take(5)
            ->get();
            
        // Ambil semua kategori
        $categories = Category::all();
        
        // Ambil berita utama (berita dengan featured image)
        $featuredNews = News::with('category')
            ->where('is_published', true)
            ->whereNotNull('featured_image')
            ->latest()
            ->take(3)
            ->get();
            
        return response()->json([
            'latest_news' => $latestNews,
            'latest_announcements' => $latestAnnouncements,
            'latest_research' => $latestResearch,
            'categories' => $categories,
            'featured_news' => $featuredNews,
        ]);
    }
}