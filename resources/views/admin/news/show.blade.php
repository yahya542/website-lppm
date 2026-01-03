@extends('admin.layout')

@section('title', $news->title . ' - Admin')

@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h4>{{ $news->title }}</h4>
                <div>
                    <a href="{{ route('admin.news.edit', $news) }}" class="btn btn-warning">
                        <i class="fas fa-edit"></i> Edit
                    </a>
                    <a href="{{ route('admin.news.index') }}" class="btn btn-secondary">
                        <i class="fas fa-arrow-left"></i> Kembali
                    </a>
                </div>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <strong>Tanggal:</strong> {{ $news->created_at->format('d M Y H:i') }}
                </div>
                
                @if($news->image)
                    <div class="mb-4">
                        <img src="{{ Storage::url($news->image) }}" alt="{{ $news->title }}" class="img-fluid rounded">
                    </div>
                @endif
                
                <div class="mb-3">
                    <strong>Ringkasan:</strong>
                    <p>{{ $news->excerpt }}</p>
                </div>
                
                <div>
                    <strong>Konten:</strong>
                    <div class="mt-2">
                        {!! $news->content !!}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection