<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\News\NewsController;
use App\Http\Controllers\Api\Announcement\AnnouncementController;
use App\Http\Controllers\Api\Research\ResearchController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Rute untuk autentikasi admin
Route::post('/admin/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/admin/logout', [AuthController::class, 'logout']);
    Route::get('/admin/user', [AuthController::class, 'user']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Home route
Route::get('/home', [HomeController::class, 'index']);

// =====================
// NEWS FLOW
// =====================
Route::prefix('news')->controller(NewsController::class)->group(function () {
    Route::get('/', 'index');                 // /api/news
    Route::get('/latest', 'latest');          // /api/news/latest
    Route::get('/popular', 'popular');        // /api/news/popular
    Route::get('/category/{categoryId}', 'getByCategory');
    Route::get('/{id}', 'show');
});

// Admin news routes - hanya bisa diakses oleh admin
Route::middleware(['auth:sanctum'])->prefix('admin')->group(function () {
    Route::prefix('news')->controller(NewsController::class)->group(function () {
        Route::get('/', 'adminIndex');        // Get all news for admin
        Route::post('/', 'adminStore');       // Create news
        Route::get('/{id}', 'adminShow');     // Get single news for admin
        Route::put('/{id}', 'adminUpdate');   // Update news
        Route::delete('/{id}', 'adminDestroy'); // Delete news
    });
});

Route::get('/categories', [NewsController::class, 'categories']);

// =====================
// ANNOUNCEMENT FLOW
// =====================
Route::prefix('announcements')->controller(AnnouncementController::class)->group(function () {
    Route::get('/', 'index');                 // /api/announcements
    Route::get('/latest', 'latest');          // /api/announcements/latest
    Route::get('/{id}', 'show');
});

// =====================
// RESEARCH FLOW
// =====================
Route::prefix('research')->controller(ResearchController::class)->group(function () {
    Route::get('/', 'index');                 // /api/research
    Route::get('/latest', 'latest');          // /api/research/latest
    Route::get('/type/{type}', 'byType');
    Route::get('/{id}', 'show');
});