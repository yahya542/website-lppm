<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Research;
use Illuminate\Http\Request;

class ResearchController extends Controller
{
    public function index(Request $request)
    {
        $query = Research::where('is_published', true)->latest();
        
        // Filter berdasarkan tipe penelitian
        if ($request->has('type')) {
            $query->where('research_type', $request->type);
        }
        
        // Tambahkan pencarian jika ada parameter search
        if ($request->has('search')) {
            $query->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('abstract', 'like', '%' . $request->search . '%');
        }
        
        $researches = $query->paginate($request->get('per_page', 10));
        
        return response()->json($researches);
    }
    
    public function show($id)
    {
        $research = Research::where('is_published', true)
            ->findOrFail($id);
        
        return response()->json($research);
    }
    
    public function byType($type)
    {
        $researches = Research::where('research_type', $type)
            ->where('is_published', true)
            ->latest()
            ->paginate(10);
        
        return response()->json($researches);
    }
    
    public function latest()
    {
        $researches = Research::where('is_published', true)
            ->latest()
            ->take(5)
            ->get();
        
        return response()->json($researches);
    }
}