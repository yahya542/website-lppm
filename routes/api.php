<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\AnnouncementController;
use App\Http\Controllers\Api\ResearchController;
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

// News routes
Route::get('/news', [NewsController::class, 'index']);
Route::get('/news/{id}', [NewsController::class, 'show']);
Route::get('/news/category/{categoryId}', [NewsController::class, 'getByCategory']);
Route::get('/categories', [NewsController::class, 'categories']);
Route::get('/news/latest', [NewsController::class, 'latest']);
Route::get('/news/popular', [NewsController::class, 'popular']);

// Announcement routes
Route::get('/announcements', [AnnouncementController::class, 'index']);
Route::get('/announcements/{id}', [AnnouncementController::class, 'show']);
Route::get('/announcements/latest', [AnnouncementController::class, 'latest']);

// Research routes
Route::get('/research', [ResearchController::class, 'index']);
Route::get('/research/{id}', [ResearchController::class, 'show']);
Route::get('/research/type/{type}', [ResearchController::class, 'byType']);
Route::get('/research/latest', [ResearchController::class, 'latest']);