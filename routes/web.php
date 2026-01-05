<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});

// Rute untuk halaman React
Route::get('/profil', function () {
    return view('index');
});

Route::get('/profil/{id}', function () {
    return view('index');
})->where('id', '.*');

Route::get('/penelitian', function () {
    return view('index');
});

Route::get('/penelitian/{id}', function () {
    return view('index');
})->where('id', '.*');

Route::get('/pengabdian', function () {
    return view('index');
});

Route::get('/pengabdian/{id}', function () {
    return view('index');
})->where('id', '.*');

Route::get('/hki', function () {
    return view('index');
});

Route::get('/hki/{id}', function () {
    return view('index');
})->where('id', '.*');

Route::get('/seminar', function () {
    return view('index');
});

Route::get('/seminar/{id}', function () {
    return view('index');
})->where('id', '.*');

Route::get('/permohonan-surat', function () {
    return view('index');
});

Route::get('/permohonan-surat/{id}', function () {
    return view('index');
})->where('id', '.*');

// Rute untuk announcements dan research (jika masih digunakan)
Route::get('/announcements', function () {
    return view('index');
});

Route::get('/announcements/{id}', function () {
    return view('index');
})->where('id', '.*');

Route::get('/research', function () {
    return view('index');
});

Route::get('/research/{id}', function () {
    return view('index');
})->where('id', '.*');

// Rute untuk admin dengan middleware admin
Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', function () {
        return view('admin.layout');
    })->name('dashboard');
    Route::resource('news', \App\Http\Controllers\Admin\NewsController::class);
});

// Rute untuk admin dengan Sanctum auth
Route::middleware(['sanctum.admin'])->prefix('api/admin/web')->name('api.admin.web.')->group(function () {
    Route::get('/', function () {
        return view('admin.layout');
    })->name('dashboard');
    Route::resource('news', \App\Http\Controllers\Admin\NewsController::class);
});



// Login and logout routes
Route::get('/login', function () {
    return view('index'); // Return to React app for login
})->name('login');

Route::post('/logout', function () {
    auth()->logout();
    return redirect('/');
})->name('logout');