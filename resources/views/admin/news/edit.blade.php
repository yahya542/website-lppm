@extends('admin.layout')

@section('title', 'Edit Berita - Admin')

@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <h4>Edit Berita</h4>
            </div>
            <div class="card-body">
                <form action="{{ route('admin.news.update', $news) }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="mb-3">
                        <label for="title" class="form-label">Judul Berita</label>
                        <input type="text" class="form-control @error('title') is-invalid @enderror" id="title" name="title" value="{{ old('title', $news->title) }}" required>
                        @error('title')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                    
                    <div class="mb-3">
                        <label for="excerpt" class="form-label">Ringkasan</label>
                        <textarea class="form-control @error('excerpt') is-invalid @enderror" id="excerpt" name="excerpt" rows="3" required>{{ old('excerpt', $news->excerpt) }}</textarea>
                        @error('excerpt')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                    
                    <div class="mb-3">
                        <label for="content" class="form-label">Konten</label>
                        <textarea class="form-control @error('content') is-invalid @enderror" id="content" name="content" rows="10" required>{{ old('content', $news->content) }}</textarea>
                        @error('content')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                    
                    <div class="mb-3">
                        <label for="image" class="form-label">Gambar</label>
                        <input type="file" class="form-control @error('image') is-invalid @enderror" id="image" name="image">
                        <div class="form-text">Format: jpeg, png, jpg, gif. Maksimal 2MB.</div>
                        @if($news->featured_image)
                            <div class="mt-2">
                                <p>Gambar saat ini:</p>
                                <img src="{{ Storage::url($news->featured_image) }}" alt="Gambar Berita" class="img-thumbnail" style="max-width: 200px;">
                            </div>
                        @endif
                        @error('image')
                            <div class="invalid-feedback">{{ $message }}</div>
                        @enderror
                    </div>
                    
                    <div class="mb-3">
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="is_published" name="is_published" value="1" {{ old('is_published', $news->is_published) ? 'checked' : '' }}>
                            <label class="form-check-label" for="is_published">Terbitkan Berita</label>
                        </div>
                    </div>
                    
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                        <a href="{{ route('admin.news.index') }}" class="btn btn-secondary">Batal</a>
                        <button type="submit" class="btn btn-primary">Update Berita</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection