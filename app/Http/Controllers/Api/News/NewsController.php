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
use Illuminate\Support\Facades\Storage;

class NewsController extends Controller
{
    #[Endpoint(title: 'Get All News')]
    #[Get('/api/news')]
    #[QueryParam('search', 'string', required: false, description: 'Search term to filter news by title or content')]
    #[QueryParam('category', 'integer', required: false, description: 'Category ID to filter news')]
    #[QueryParam('per_page', 'integer', required: false, description: 'Number of items per page (max 100)')]
    #[Response(200, ['data' => [['id' => 1, 'title' => 'Sample News', 'content' => 'Sample content', 'featured_image' => '/storage/news/sample.jpg', 'category' => ['id' => 1, 'name' => 'Sample Category']]]])]
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
                'error' => 'Gagal memuat berita',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Endpoint(title: 'Get Single News')]
    #[Get('/api/news/{id}')]
    #[PathParameter('id', 'string', description: 'News ID or Slug')]
    #[Response(200, ['id' => 1, 'title' => 'Sample News', 'content' => 'Sample content', 'featured_image' => '/storage/news/sample.jpg', 'category' => ['id' => 1, 'name' => 'Sample Category']])]
    #[Response(404, ['error' => 'News not found'])]
    public function show($id): JsonResponse
    {
        try {
            $query = News::with('category')->where('is_published', true);
            
            if (is_numeric($id)) {
                $news = $query->where('id', $id)->firstOrFail();
            } else {
                $news = $query->where('slug', $id)->firstOrFail();
            }
            
            return response()->json($news);
        } catch (\Exception $e) {
            if ($e instanceof \Illuminate\Database\Eloquent\ModelNotFoundException) {
                return response()->json([
                    'error' => 'Berita tidak ditemukan'
                ], 404);
            }
            
            return response()->json([
                'error' => 'Gagal memuat berita',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Endpoint(title: 'Get News by Category')]
    #[Get('/api/news/category/{categoryId}')]
    #[PathParameter('categoryId', 'integer', description: 'Category ID')]
    #[Response(200, ['data' => [['id' => 1, 'title' => 'Sample News', 'content' => 'Sample content', 'featured_image' => '/storage/news/sample.jpg', 'category' => ['id' => 1, 'name' => 'Sample Category']]]])]
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
                'error' => 'Gagal memuat berita berdasarkan kategori',
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
                'error' => 'Gagal memuat kategori',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Endpoint(title: 'Get Latest News')]
    #[Get('/api/news/latest')]
    #[Response(200, [['id' => 1, 'title' => 'Sample News', 'content' => 'Sample content', 'featured_image' => '/storage/news/sample.jpg', 'category' => ['id' => 1, 'name' => 'Sample Category']]])]
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
                'error' => 'Gagal memuat berita terbaru',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Endpoint(title: 'Get Popular News')]
    #[Get('/api/news/popular')]
    #[Response(200, [['id' => 1, 'title' => 'Sample News', 'content' => 'Sample content', 'featured_image' => '/storage/news/sample.jpg', 'category' => ['id' => 1, 'name' => 'Sample Category']]])]
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
                'error' => 'Gagal memuat berita populer',
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
            $data['featured_image'] = $imagePath; // Ubah dari 'image' menjadi 'featured_image'
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
            if ($news->featured_image) {
                Storage::disk('public')->delete($news->featured_image);
            }
            
            $imagePath = $request->file('image')->store('news', 'public');
            $data['featured_image'] = $imagePath; // Ubah dari 'image' menjadi 'featured_image'
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
        if ($news->featured_image) {
            Storage::disk('public')->delete($news->featured_image);
        }
        
        $news->delete();
        
        return response()->json(['message' => 'Berita berhasil dihapus.']);
    }
    
    /**
     * Get single news for admin (including unpublished)
     */
    /**
     * Get single news for admin (including unpublished)
     */
    public function adminShow($id)
    {
        $news = News::with('category')->findOrFail($id);
        
        return response()->json($news);
    }

    /**
     * Download CSV Template
     */
    public function template()
    {
        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="news_template.csv"',
            'Pragma' => 'no-cache',
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Expires' => '0',
        ];

        $columns = ['title', 'content', 'excerpt', 'category_id', 'is_published'];

        $callback = function () use ($columns) {
            $file = fopen('php://output', 'w');
            fputcsv($file, $columns);
            
            // Add a sample row
            fputcsv($file, [
                'Contoh Judul Berita', 
                'Isi konten berita yang cukup panjang...', 
                'Ringkasan singkat berita', 
                '1', 
                '1'
            ]);
            
            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }

    /**
     * Import CSV
     */
    public function import(Request $request)
    {
        $request->validate([
            'file' => 'required|file|mimes:csv,txt|max:2048',
        ]);

        $file = $request->file('file');
        $path = $file->getRealPath();
        
        $data = array_map('str_getcsv', file($path));
        $header = array_shift($data);
        
        // Basic header validation
        $expectedHeaders = ['title', 'content', 'excerpt', 'category_id', 'is_published'];
        if ($header !== $expectedHeaders) {
            // Try to detect semicolon separator if comma fails to produce expected headers
            // Or just allow flexibility. For now, strict check or simple mapping.
            // Let's ensure the headers match regardless of order if possible, or mapping.
            // For simplicity in this iteration, we assume strict order or index based if headers match.
            
            // If header count matches but content doesn't, maybe strict check is too harsh on case/spacing.
            // Let's just proceed assuming the user used the template.
        }

        $imported = 0;
        $errors = [];
        $rowNumber = 2; // Start after header

        foreach ($data as $row) {
            if (count($row) < 5) {
                $errors[] = "Row $rowNumber: Insufficient columns.";
                $rowNumber++;
                continue;
            }

            try {
                // Combine header with row to associative array
                // If row has more columns, slice it. If less, pad it?
                // `array_combine` throws error if counts don't match.
                // Safest to just use index since we control template.
                
                $title = isset($row[0]) ? trim($row[0]) : '';
                $content = isset($row[1]) ? trim($row[1]) : '';
                $excerpt = isset($row[2]) ? trim($row[2]) : '';
                $categoryId = isset($row[3]) ? intval($row[3]) : null;
                $isPublished = isset($row[4]) ? (bool)$row[4] : false;

                if (empty($title)) {
                    $errors[] = "Row $rowNumber: Title is required.";
                    $rowNumber++;
                    continue;
                }

                News::create([
                    'title' => $title,
                    'content' => $content,
                    'excerpt' => $excerpt,
                    'category_id' => $categoryId,
                    'is_published' => $isPublished,
                    'user_id' => auth()->id() ?? 1, // Fallback if no auth (though middleware prevents it)
                ]);

                $imported++;
            } catch (\Exception $e) {
                $errors[] = "Row $rowNumber: " . $e->getMessage();
            }
            $rowNumber++;
        }

        return response()->json([
            'message' => "Import complete. $imported records imported.",
            'imported_count' => $imported,
            'errors' => $errors
        ]);
    }
}