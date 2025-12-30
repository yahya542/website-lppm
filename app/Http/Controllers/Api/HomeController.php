<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Announcement;
use App\Models\Research;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class HomeController extends Controller
{
    public function index(): JsonResponse
    {
        try {
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
            
            // Ambil berita populer (berdasarkan view count atau created_at)
            $popularNews = News::with('category')
                ->where('is_published', true)
                ->orderBy('view_count', 'desc')  // assuming there's a view_count column
                ->orWhere('view_count', null)    // fallback to order by created_at if no view_count
                ->latest()
                ->take(5)
                ->get();
            
            return response()->json([
                'latest_news' => $latestNews,
                'latest_announcements' => $latestAnnouncements,
                'latest_research' => $latestResearch,
                'categories' => $categories,
                'featured_news' => $featuredNews,
                'popular_news' => $popularNews,  // Adding popular news
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch home data',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}