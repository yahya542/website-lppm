<?php

namespace App\Http\Controllers\Api\News;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\Builder;
use Dedoc\Scramble\Attributes\Endpoint;
use Dedoc\Scramble\Attributes\Get;
use Dedoc\Scramble\Attributes\QueryParam;
use Dedoc\Scramble\Attributes\PathParameter;
use Dedoc\Scramble\Attributes\Response;

class NewsController extends Controller
{
    #[Endpoint(title: 'Get All News')]
    #[Get('/api/news')]
    #[QueryParam('search', 'string', required: false, description: 'Search term to filter news by title or content')]
    #[QueryParam('category', 'integer', required: false, description: 'Category ID to filter news')]
    #[QueryParam('per_page', 'integer', required: false, description: 'Number of items per page (max 100)')]
    #[Response(200, ['data' => [['id' => 1, 'title' => 'Sample News', 'content' => 'Sample content', 'category' => ['id' => 1, 'name' => 'Sample Category']]]])]
    public function index(Request $request): JsonResponse
    {
        try {
            $query = News::with('category')->where('is_published', true)->latest();
            
            // Tambahkan pencarian jika ada parameter search
            if ($request->filled('search')) {
                $searchTerm = $request->search;
                $query->where(function (Builder $q) use ($searchTerm) {
                    $q->where('title', 'like', '%' . $searchTerm . '%')
                      ->orWhere('content', 'like', '%' . $searchTerm . '%');
                });
            }
            
            // Filter berdasarkan kategori jika ada parameter category
            if ($request->filled('category')) {
                $query->where('category_id', $request->category);
            }
            
            $perPage = min($request->get('per_page', 10), 100); // Batasi maksimal 100 item per halaman
            $news = $query->paginate($perPage);
            
            return response()->json($news);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch news',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Endpoint(title: 'Get Single News')]
    #[Get('/api/news/{id}')]
    #[PathParameter('id', 'integer', description: 'News ID')]
    #[Response(200, ['id' => 1, 'title' => 'Sample News', 'content' => 'Sample content', 'category' => ['id' => 1, 'name' => 'Sample Category']])]
    #[Response(404, ['error' => 'News not found'])]
    public function show($id): JsonResponse
    {
        try {
            $news = News::with('category')
                ->where('is_published', true)
                ->findOrFail($id);
            
            return response()->json($news);
        } catch (\Exception $e) {
            if ($e instanceof \Illuminate\Database\Eloquent\ModelNotFoundException) {
                return response()->json([
                    'error' => 'News not found'
                ], 404);
            }
            
            return response()->json([
                'error' => 'Failed to fetch news',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Endpoint(title: 'Get News by Category')]
    #[Get('/api/news/category/{categoryId}')]
    #[PathParameter('categoryId', 'integer', description: 'Category ID')]
    #[Response(200, ['data' => [['id' => 1, 'title' => 'Sample News', 'content' => 'Sample content', 'category' => ['id' => 1, 'name' => 'Sample Category']]]])]
    public function getByCategory($categoryId): JsonResponse
    {
        try {
            $news = News::with('category')
                ->where('category_id', $categoryId)
                ->where('is_published', true)
                ->latest()
                ->paginate(10);
            
            return response()->json($news);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch news by category',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Endpoint(title: 'Get All Categories')]
    #[Get('/api/categories')]
    #[Response(200, [['id' => 1, 'name' => 'Sample Category', 'slug' => 'sample-category']])]
    public function categories(): JsonResponse
    {
        try {
            $categories = Category::all();
            return response()->json($categories);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch categories',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Endpoint(title: 'Get Latest News')]
    #[Get('/api/news/latest')]
    #[Response(200, [['id' => 1, 'title' => 'Sample News', 'content' => 'Sample content', 'category' => ['id' => 1, 'name' => 'Sample Category']]])]
    public function latest(): JsonResponse
    {
        try {
            $news = News::with('category')
                ->where('is_published', true)
                ->latest()
                ->take(5)
                ->get();
            
            return response()->json($news);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch latest news',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Endpoint(title: 'Get Popular News')]
    #[Get('/api/news/popular')]
    #[Response(200, [['id' => 1, 'title' => 'Sample News', 'content' => 'Sample content', 'category' => ['id' => 1, 'name' => 'Sample Category']]])]
    public function popular(): JsonResponse
    {
        try {
            // Untuk sementara, kita kembalikan berita terbaru sebagai pengganti berita populer
            $news = News::with('category')
                ->where('is_published', true)
                ->orderBy('view_count', 'desc') // Mengasumsikan ada kolom view_count
                ->take(5)
                ->get();
            
            return response()->json($news);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch popular news',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * Admin endpoints
     */
    
    /**
     * Get all news for admin (including unpublished)
     */
    public function adminIndex(Request $request)
    {
        $query = News::with('category')->latest();
        
        // Tambahkan pencarian jika ada parameter search
        if ($request->filled('search')) {
            $searchTerm = $request->search;
            $query->where(function (Builder $q) use ($searchTerm) {
                $q->where('title', 'like', '%' . $searchTerm . '%')
                  ->orWhere('content', 'like', '%' . $searchTerm . '%');
            });
        }
        
        // Filter berdasarkan kategori jika ada parameter category
        if ($request->filled('category')) {
            $query->where('category_id', $request->category);
        }
        
        $perPage = min($request->get('per_page', 10), 100); // Batasi maksimal 100 item per halaman
        $news = $query->paginate($perPage);
        
        return response()->json($news);
    }
    
    /**
     * Store a newly created news
     */
    public function adminStore(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'excerpt' => 'required|string',
            'category_id' => 'nullable|exists:categories,id',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'is_published' => 'boolean'
        ]);
        
        $data = $request->only(['title', 'content', 'excerpt', 'category_id', 'is_published']);
        $data['is_published'] = $request->has('is_published') ? $request->is_published : false;
        
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('news', 'public');
            $data['image'] = $imagePath;
        }
        
        $news = News::create($data);
        
        return response()->json($news, 201);
    }
    
    /**
     * Update the specified news
     */
    public function adminUpdate(Request $request, $id)
    {
        $news = News::findOrFail($id);
        
        $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'content' => 'sometimes|required|string',
            'excerpt' => 'sometimes|required|string',
            'category_id' => 'nullable|exists:categories,id',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'is_published' => 'boolean'
        ]);
        
        $data = $request->only(['title', 'content', 'excerpt', 'category_id', 'is_published']);
        
        if ($request->hasFile('image')) {
            // Hapus gambar lama jika ada
            if ($news->image) {
                \Storage::disk('public')->delete($news->image);
            }
            
            $imagePath = $request->file('image')->store('news', 'public');
            $data['image'] = $imagePath;
        }
        
        $news->update($data);
        
        return response()->json($news);
    }
    
    /**
     * Remove the specified news
     */
    public function adminDestroy($id)
    {
        $news = News::findOrFail($id);
        
        // Hapus gambar jika ada
        if ($news->image) {
            \Storage::disk('public')->delete($news->image);
        }
        
        $news->delete();
        
        return response()->json(['message' => 'Berita berhasil dihapus.']);
    }
    
    /**
     * Get single news for admin (including unpublished)
     */
    public function adminShow($id)
    {
        $news = News::with('category')->findOrFail($id);
        
        return response()->json($news);
    }
}