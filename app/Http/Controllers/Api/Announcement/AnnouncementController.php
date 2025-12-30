<?php

namespace App\Http\Controllers\Api\Announcement;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\Builder;
use Dedoc\Scramble\Attributes\Endpoint;
use Dedoc\Scramble\Attributes\Get;
use Dedoc\Scramble\Attributes\QueryParam;
use Dedoc\Scramble\Attributes\PathParameter;
use Dedoc\Scramble\Attributes\Response;

class AnnouncementController extends Controller
{
    #[Endpoint(title: 'Get All Announcements')]
    #[Get('/api/announcements')]
    #[QueryParam('search', 'string', required: false, description: 'Search term to filter announcements by title or content')]
    #[QueryParam('per_page', 'integer', required: false, description: 'Number of items per page (max 100)')]
    #[Response(200, ['data' => [['id' => 1, 'title' => 'Sample Announcement', 'content' => 'Sample content']]])]
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Announcement::where('is_published', true)->latest();
            
            // Tambahkan pencarian jika ada parameter search
            if ($request->filled('search')) {
                $searchTerm = $request->search;
                $query->where(function (Builder $q) use ($searchTerm) {
                    $q->where('title', 'like', '%' . $searchTerm . '%')
                      ->orWhere('content', 'like', '%' . $searchTerm . '%');
                });
            }
            
            $perPage = min($request->get('per_page', 10), 100); // Batasi maksimal 100 item per halaman
            $announcements = $query->paginate($perPage);
            
            return response()->json($announcements);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch announcements',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Endpoint(title: 'Get Single Announcement')]
    #[Get('/api/announcements/{id}')]
    #[PathParameter('id', 'integer', description: 'Announcement ID')]
    #[Response(200, ['id' => 1, 'title' => 'Sample Announcement', 'content' => 'Sample content'])]
    #[Response(404, ['error' => 'Announcement not found'])]
    public function show($id): JsonResponse
    {
        try {
            $announcement = Announcement::where('is_published', true)
                ->findOrFail($id);
            
            return response()->json($announcement);
        } catch (\Exception $e) {
            if ($e instanceof \Illuminate\Database\Eloquent\ModelNotFoundException) {
                return response()->json([
                    'error' => 'Announcement not found'
                ], 404);
            }
            
            return response()->json([
                'error' => 'Failed to fetch announcement',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Endpoint(title: 'Get Latest Announcements')]
    #[Get('/api/announcements/latest')]
    #[Response(200, [['id' => 1, 'title' => 'Sample Announcement', 'content' => 'Sample content']])]
    public function latest(): JsonResponse
    {
        try {
            $announcements = Announcement::where('is_published', true)
                ->latest()
                ->take(5)
                ->get();
            
            return response()->json($announcements);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch latest announcements',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}