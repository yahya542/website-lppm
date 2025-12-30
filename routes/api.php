<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\News\NewsController;
use App\Http\Controllers\Api\Announcement\AnnouncementController;
use App\Http\Controllers\Api\Research\ResearchController;
use App\Http\Controllers\Api\HomeController;

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