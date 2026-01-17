<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = News::orderBy('created_at', 'desc')->paginate(10);
        return view('admin.news.index', compact('news'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.news.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'excerpt' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'is_published' => 'boolean', // Add validation for is_published
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $data = $request->only(['title', 'content', 'excerpt', 'is_published']);
        
        // Set is_published to true by default if not provided
        if (!isset($data['is_published'])) {
            $data['is_published'] = true;
        }
        
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('news', 'public');
            $data['featured_image'] = $imagePath;
        }

        News::create($data);

        return redirect()->route('admin.news.index')->with('success', 'Berita berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        return view('admin.news.show', compact('news'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        return view('admin.news.edit', compact('news'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, News $news)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'excerpt' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'is_published' => 'boolean', // Add validation for is_published
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }

        $data = $request->only(['title', 'content', 'excerpt', 'is_published']);
        
        if ($request->hasFile('image')) {
            // Hapus gambar lama jika ada
            if ($news->featured_image) {
                Storage::disk('public')->delete($news->featured_image);
            }
            
            $imagePath = $request->file('image')->store('news', 'public');
            $data['featured_image'] = $imagePath;
        }

        $news->update($data);

        return redirect()->route('admin.news.index')->with('success', 'Berita berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        // Hapus gambar jika ada
        if ($news->featured_image) {
            Storage::disk('public')->delete($news->featured_image);
        }
        
        $news->delete();

        return redirect()->route('admin.news.index')->with('success', 'Berita berhasil dihapus.');
    }
}