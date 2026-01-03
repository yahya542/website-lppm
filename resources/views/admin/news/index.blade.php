@extends('admin.layout')

@section('title', 'Daftar Berita - Admin')

@section('content')
<div class="d-flex justify-content-between align-items-center mb-4">
    <h2>Daftar Berita</h2>
    <a href="{{ route('admin.news.create') }}" class="btn btn-primary">
        <i class="fas fa-plus"></i> Tambah Berita Baru
    </a>
</div>

<div class="table-responsive">
    <table class="table table-striped table-bordered">
        <thead class="table-dark">
            <tr>
                <th>No</th>
                <th>Judul</th>
                <th>Ringkasan</th>
                <th>Tanggal</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            @forelse($news as $index => $item)
            <tr>
                <td>{{ $index + $news->firstItem() }}</td>
                <td>{{ $item->title }}</td>
                <td>{{ Str::limit($item->excerpt, 50) }}</td>
                <td>{{ $item->created_at->format('d M Y') }}</td>
                <td>
                    <a href="{{ route('admin.news.show', $item) }}" class="btn btn-sm btn-info">
                        <i class="fas fa-eye"></i> Lihat
                    </a>
                    <a href="{{ route('admin.news.edit', $item) }}" class="btn btn-sm btn-warning">
                        <i class="fas fa-edit"></i> Edit
                    </a>
                    <form action="{{ route('admin.news.destroy', $item) }}" method="POST" class="d-inline">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-sm btn-danger" onclick="return confirm('Apakah Anda yakin ingin menghapus berita ini?')">
                            <i class="fas fa-trash"></i> Hapus
                        </button>
                    </form>
                </td>
            </tr>
            @empty
            <tr>
                <td colspan="5" class="text-center">Tidak ada berita ditemukan.</td>
            </tr>
            @endforelse
        </tbody>
    </table>
</div>

<!-- Pagination -->
<div class="d-flex justify-content-center">
    {{ $news->links() }}
</div>
@endsection