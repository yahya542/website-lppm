<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Category;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index(Request $request)
    {
        $query = News::with('category')->where('is_published', true)->latest();
        
        // Tambahkan pencarian jika ada parameter search
        if ($request->has('search')) {
            $query->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('content', 'like', '%' . $request->search . '%');
        }
        
        // Filter berdasarkan kategori jika ada parameter category
        if ($request->has('category')) {
            $query->where('category_id', $request->category);
        }
        
        $news = $query->paginate($request->get('per_page', 10));
        
        return response()->json($news);
    }
    
    public function show($id)
    {
        $news = News::with('category')
            ->where('is_published', true)
            ->findOrFail($id);
        
        return response()->json($news);
    }
    
    public function getByCategory($categoryId)
    {
        $news = News::with('category')
            ->where('category_id', $categoryId)
            ->where('is_published', true)
            ->latest()
            ->paginate(10);
        
        return response()->json($news);
    }
    
    public function categories()
    {
        $categories = Category::all();
        return response()->json($categories);
    }
    
    public function latest()
    {
        $news = News::with('category')
            ->where('is_published', true)
            ->latest()
            ->take(5)
            ->get();
        
        return response()->json($news);
    }
    
    public function popular()
    {
        // Untuk sementara, kita kembalikan berita terbaru sebagai pengganti berita populer
        $news = News::with('category')
            ->where('is_published', true)
            ->latest()
            ->take(5)
            ->get();
        
        return response()->json($news);
    }
}