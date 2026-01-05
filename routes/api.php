<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\News\NewsController;
use App\Http\Controllers\Api\Announcement\AnnouncementController;
use App\Http\Controllers\Api\Research\ResearchController;
use App\Http\Controllers\Api\HomeController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\OpenApi\SwaggerExampleController;  // Add this import
use App\Http\Controllers\OpenApi\AllEndpointsDocumentation;  // Add this import for complete documentation

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

// Login route for React SPA authentication
Route::post('/admin/login', [AuthController::class, 'login']);

// Protected routes using Sanctum token authentication
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/admin/logout', [AuthController::class, 'logout']);
    Route::get('/admin/user', [AuthController::class, 'user']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Swagger example routes
Route::prefix('/')->controller(SwaggerExampleController::class)->group(function () {
    Route::get('/', 'index');
    Route::post('/', 'store');
    Route::get('/{id}', 'show');
});

// Complete API documentation routes
Route::prefix('docs')->controller(AllEndpointsDocumentation::class)->group(function () {
    Route::get('/', 'getNews');
    Route::get('/{id}', 'getSingleNews');
    Route::get('/latest', 'getLatestNews');
    Route::get('/popular', 'getPopularNews');
    Route::get('/category/{categoryId}', 'getNewsByCategory');
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