<?php

namespace App\Http\Controllers\Api\Research;

use App\Http\Controllers\Controller;
use App\Models\Research;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Database\Eloquent\Builder;
use Dedoc\Scramble\Attributes\Endpoint;
use Dedoc\Scramble\Attributes\Get;
use Dedoc\Scramble\Attributes\QueryParam;
use Dedoc\Scramble\Attributes\PathParameter;
use Dedoc\Scramble\Attributes\Response;

class ResearchController extends Controller
{
    #[Endpoint(title: 'Get All Research')]
    #[Get('/api/research')]
    #[QueryParam('type', 'string', required: false, description: 'Research type to filter')]
    #[QueryParam('search', 'string', required: false, description: 'Search term to filter research by title or abstract')]
    #[QueryParam('per_page', 'integer', required: false, description: 'Number of items per page (max 100)')]
    #[Response(200, ['data' => [['id' => 1, 'title' => 'Sample Research', 'abstract' => 'Sample abstract', 'research_type' => 'journal']]])]
    public function index(Request $request): JsonResponse
    {
        try {
            $query = Research::where('is_published', true)->latest();
            
            // Filter berdasarkan tipe penelitian
            if ($request->filled('type')) {
                $query->where('research_type', $request->type);
            }
            
            // Tambahkan pencarian jika ada parameter search
            if ($request->filled('search')) {
                $searchTerm = $request->search;
                $query->where(function (Builder $q) use ($searchTerm) {
                    $q->where('title', 'like', '%' . $searchTerm . '%')
                      ->orWhere('abstract', 'like', '%' . $searchTerm . '%');
                });
            }
            
            $perPage = min($request->get('per_page', 10), 100); // Batasi maksimal 100 item per halaman
            $researches = $query->paginate($perPage);
            
            return response()->json($researches);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch research',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Endpoint(title: 'Get Single Research')]
    #[Get('/api/research/{id}')]
    #[PathParameter('id', 'integer', description: 'Research ID')]
    #[Response(200, ['id' => 1, 'title' => 'Sample Research', 'abstract' => 'Sample abstract', 'research_type' => 'journal'])]
    #[Response(404, ['error' => 'Research not found'])]
    public function show($id): JsonResponse
    {
        try {
            $research = Research::where('is_published', true)
                ->findOrFail($id);
            
            return response()->json($research);
        } catch (\Exception $e) {
            if ($e instanceof \Illuminate\Database\Eloquent\ModelNotFoundException) {
                return response()->json([
                    'error' => 'Research not found'
                ], 404);
            }
            
            return response()->json([
                'error' => 'Failed to fetch research',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Endpoint(title: 'Get Research by Type')]
    #[Get('/api/research/type/{type}')]
    #[PathParameter('type', 'string', description: 'Research type')]
    #[Response(200, ['data' => [['id' => 1, 'title' => 'Sample Research', 'abstract' => 'Sample abstract', 'research_type' => 'journal']]])]
    public function byType($type): JsonResponse
    {
        try {
            $researches = Research::where('research_type', $type)
                ->where('is_published', true)
                ->latest()
                ->paginate(10);
            
            return response()->json($researches);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch research by type',
                'message' => $e->getMessage()
            ], 500);
        }
    }
    
    #[Endpoint(title: 'Get Latest Research')]
    #[Get('/api/research/latest')]
    #[Response(200, [['id' => 1, 'title' => 'Sample Research', 'abstract' => 'Sample abstract', 'research_type' => 'journal']])]
    public function latest(): JsonResponse
    {
        try {
            $researches = Research::where('is_published', true)
                ->latest()
                ->take(5)
                ->get();
            
            return response()->json($researches);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Failed to fetch latest research',
                'message' => $e->getMessage()
            ], 500);
        }
    }
}