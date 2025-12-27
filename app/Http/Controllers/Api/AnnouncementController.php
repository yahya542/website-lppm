<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    public function index(Request $request)
    {
        $query = Announcement::where('is_published', true)->latest();
        
        // Tambahkan pencarian jika ada parameter search
        if ($request->has('search')) {
            $query->where('title', 'like', '%' . $request->search . '%')
                  ->orWhere('content', 'like', '%' . $request->search . '%');
        }
        
        $announcements = $query->paginate($request->get('per_page', 10));
        
        return response()->json($announcements);
    }
    
    public function show($id)
    {
        $announcement = Announcement::where('is_published', true)
            ->findOrFail($id);
        
        return response()->json($announcement);
    }
    
    public function latest()
    {
        $announcements = Announcement::where('is_published', true)
            ->latest()
            ->take(5)
            ->get();
        
        return response()->json($announcements);
    }
}