<?php

namespace App\Http\Controllers\OpenApi;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

/**
 * @OA\Info(
 *     title="News and Research Platform API",
 *     version="1.0.0",
 *     description="Complete API Documentation for News and Research Platform"
 * )
 * 
 * @OA\Server(
 *     url="http://localhost:8000",
 *     description="Development Server"
 * )
 * 
 * @OA\Tag(
 *     name="Authentication",
 *     description="API Endpoints for admin authentication"
 * )
 * 
 * @OA\Tag(
 *     name="News",
 *     description="API Endpoints for News management"
 * )
 * 
 * @OA\Tag(
 *     name="Announcements",
 *     description="API Endpoints for Announcements management"
 * )
 * 
 * @OA\Tag(
 *     name="Research",
 *     description="API Endpoints for Research management"
 * )
 * 
 * @OA\Tag(
 *     name="Categories",
 *     description="API Endpoints for Categories management"
 * )
 * 
 * @OA\Tag(
 *     name="Home",
 *     description="API Endpoints for Home page data"
 * )
 * 
 * @OA\Tag(
 *     name="Admin",
 *     description="API Endpoints for Admin management"
 * )
 */
class AllEndpointsDocumentation extends Controller
{
    /**
     * @OA\Post(
     *     path="/api/admin/login",
     *     tags={"Authentication"},
     *     summary="Admin login",
     *     description="Authenticate admin user and return API token",
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 required={"email", "password"},
     *                 @OA\Property(property="email", type="string", example="admin@example.com", description="Admin email address"),
     *                 @OA\Property(property="password", type="string", example="password", description="Admin password")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Login successful",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Login successful"),
     *             @OA\Property(property="token", type="string", example="1|abc123def456...")
     *         )
     *     ),
     *     @OA\Response(
     *         response=401,
     *         description="Invalid credentials"
     *     )
     * )
     */
    public function login()
    {
        // Documentation only
    }

    /**
     * @OA\Post(
     *     path="/api/admin/logout",
     *     tags={"Authentication"},
     *     summary="Admin logout",
     *     description="Logout admin user and invalidate token",
     *     security={{"sanctum":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Logout successful",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Logged out successfully")
     *         )
     *     )
     * )
     */
    public function logout()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/admin/user",
     *     tags={"Authentication"},
     *     summary="Get authenticated admin user",
     *     description="Return details of currently authenticated admin user",
     *     security={{"sanctum":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Admin user details",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", example=1),
     *             @OA\Property(property="name", type="string", example="Admin User"),
     *             @OA\Property(property="email", type="string", example="admin@example.com"),
     *             @OA\Property(property="role", type="string", example="admin")
     *         )
     *     )
     * )
     */
    public function user()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/user",
     *     tags={"Authentication"},
     *     summary="Get authenticated user",
     *     description="Returns details of the currently authenticated user",
     *     security={{"sanctum":{}}},
     *     @OA\Response(
     *         response=200,
     *         description="Authenticated user details",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", example=1),
     *             @OA\Property(property="name", type="string", example="John Doe"),
     *             @OA\Property(property="email", type="string", example="user@example.com")
     *         )
     *     )
     * )
     */
    public function getAuthenticatedUser()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/home",
     *     tags={"Home"},
     *     summary="Get home page data",
     *     description="Returns data required for home page display",
     *     @OA\Response(
     *         response=200,
     *         description="Home page data",
     *         @OA\JsonContent(
     *             @OA\Property(property="latest_news", type="array", @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Sample News Title")
     *             )),
     *             @OA\Property(property="latest_announcements", type="array", @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Sample Announcement Title")
     *             )),
     *             @OA\Property(property="latest_research", type="array", @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Sample Research Title")
     *             ))
     *         )
     *     )
     * )
     */
    public function getHomeData()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/news",
     *     tags={"News"},
     *     summary="Get all news",
     *     description="Returns a paginated list of published news articles",
     *     @OA\Parameter(
     *         name="search",
     *         in="query",
     *         description="Search term to filter news by title or content",
     *         required=false,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="category",
     *         in="query",
     *         description="Category ID to filter news",
     *         required=false,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Parameter(
     *         name="per_page",
     *         in="query",
     *         description="Number of items per page (max 100)",
     *         required=false,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="List of news articles",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="data", type="array", @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Sample News Title"),
     *                 @OA\Property(property="content", type="string", example="Sample news content..."),
     *                 @OA\Property(property="category", type="object",
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="name", type="string", example="Sample Category")
     *                 )
     *             )),
     *             @OA\Property(property="links", type="object",
     *                 @OA\Property(property="first", type="string", example="http://localhost:8000/api/news?page=1"),
     *                 @OA\Property(property="last", type="string", example="http://localhost:8000/api/news?page=10"),
     *                 @OA\Property(property="prev", type="string", example=null),
     *                 @OA\Property(property="next", type="string", example="http://localhost:8000/api/news?page=2")
     *             ),
     *             @OA\Property(property="meta", type="object",
     *                 @OA\Property(property="current_page", type="integer", example=1),
     *                 @OA\Property(property="from", type="integer", example=1),
     *                 @OA\Property(property="last_page", type="integer", example=10),
     *                 @OA\Property(property="path", type="string", example="http://localhost:8000/api/news"),
     *                 @OA\Property(property="per_page", type="integer", example=10),
     *                 @OA\Property(property="to", type="integer", example=10),
     *                 @OA\Property(property="total", type="integer", example=100)
     *             )
     *         )
     *     )
     * )
     */
    public function getNews()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/news/{id}",
     *     tags={"News"},
     *     summary="Get single news by ID",
     *     description="Returns a single published news article",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="News ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Single news article",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", example=1),
     *             @OA\Property(property="title", type="string", example="Sample News Title"),
     *             @OA\Property(property="content", type="string", example="Sample news content..."),
     *             @OA\Property(property="category", type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="Sample Category")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="News not found"
     *     )
     * )
     */
    public function getSingleNews()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/news/latest",
     *     tags={"News"},
     *     summary="Get latest news",
     *     description="Returns the 5 latest published news articles",
     *     @OA\Response(
     *         response=200,
     *         description="List of latest news articles",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Sample News Title"),
     *                 @OA\Property(property="content", type="string", example="Sample news content..."),
     *                 @OA\Property(property="category", type="object",
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="name", type="string", example="Sample Category")
     *                 )
     *             )
     *         )
     *     )
     * )
     */
    public function getLatestNews()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/news/popular",
     *     tags={"News"},
     *     summary="Get popular news",
     *     description="Returns the 5 most popular news articles",
     *     @OA\Response(
     *         response=200,
     *         description="List of popular news articles",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Sample News Title"),
     *                 @OA\Property(property="content", type="string", example="Sample news content..."),
     *                 @OA\Property(property="category", type="object",
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="name", type="string", example="Sample Category")
     *                 )
     *             )
     *         )
     *     )
     * )
     */
    public function getPopularNews()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/news/category/{categoryId}",
     *     tags={"News"},
     *     summary="Get news by category",
     *     description="Returns news articles filtered by category ID",
     *     @OA\Parameter(
     *         name="categoryId",
     *         in="path",
     *         description="Category ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="List of news articles in category",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="data", type="array", @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Sample News Title"),
     *                 @OA\Property(property="content", type="string", example="Sample news content..."),
     *                 @OA\Property(property="category", type="object",
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="name", type="string", example="Sample Category")
     *                 )
     *             )),
     *             @OA\Property(property="links", type="object"),
     *             @OA\Property(property="meta", type="object")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Category not found"
     *     )
     * )
     */
    public function getNewsByCategory()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/announcements",
     *     tags={"Announcements"},
     *     summary="Get all announcements",
     *     description="Returns a paginated list of published announcements",
     *     @OA\Parameter(
     *         name="search",
     *         in="query",
     *         description="Search term to filter announcements by title or content",
     *         required=false,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="per_page",
     *         in="query",
     *         description="Number of items per page (max 100)",
     *         required=false,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="List of announcements",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="data", type="array", @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Sample Announcement Title"),
     *                 @OA\Property(property="content", type="string", example="Sample announcement content...")
     *             ))
     *         )
     *     )
     * )
     */
    public function getAnnouncements()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/announcements/{id}",
     *     tags={"Announcements"},
     *     summary="Get single announcement by ID",
     *     description="Returns a single published announcement",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="Announcement ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Single announcement",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", example=1),
     *             @OA\Property(property="title", type="string", example="Sample Announcement Title"),
     *             @OA\Property(property="content", type="string", example="Sample announcement content...")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Announcement not found"
     *     )
     * )
     */
    public function getSingleAnnouncement()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/announcements/latest",
     *     tags={"Announcements"},
     *     summary="Get latest announcements",
     *     description="Returns the 5 latest published announcements",
     *     @OA\Response(
     *         response=200,
     *         description="List of latest announcements",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Sample Announcement Title"),
     *                 @OA\Property(property="content", type="string", example="Sample announcement content...")
     *             )
     *         )
     *     )
     * )
     */
    public function getLatestAnnouncements()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/research",
     *     tags={"Research"},
     *     summary="Get all research",
     *     description="Returns a paginated list of research items",
     *     @OA\Response(
     *         response=200,
     *         description="List of research items",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="data", type="array", @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Sample Research Title"),
     *                 @OA\Property(property="description", type="string", example="Sample research description...")
     *             ))
     *         )
     *     )
     * )
     */
    public function getResearch()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/research/{id}",
     *     tags={"Research"},
     *     summary="Get single research by ID",
     *     description="Returns a single research item",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="Research ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Single research item",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", example=1),
     *             @OA\Property(property="title", type="string", example="Sample Research Title"),
     *             @OA\Property(property="description", type="string", example="Sample research description...")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Research not found"
     *     )
     * )
     */
    public function getSingleResearch()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/research/latest",
     *     tags={"Research"},
     *     summary="Get latest research",
     *     description="Returns the 5 latest research items",
     *     @OA\Response(
     *         response=200,
     *         description="List of latest research items",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Sample Research Title"),
     *                 @OA\Property(property="description", type="string", example="Sample research description...")
     *             )
     *         )
     *     )
     * )
     */
    public function getLatestResearch()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/research/type/{type}",
     *     tags={"Research"},
     *     summary="Get research by type",
     *     description="Returns research items filtered by type",
     *     @OA\Parameter(
     *         name="type",
     *         in="path",
     *         description="Research type",
     *         required=true,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="List of research items by type",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="data", type="array", @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Sample Research Title"),
     *                 @OA\Property(property="description", type="string", example="Sample research description...")
     *             ))
     *         )
     *     )
     * )
     */
    public function getResearchByType()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/categories",
     *     tags={"Categories"},
     *     summary="Get all categories",
     *     description="Returns a list of all categories",
     *     @OA\Response(
     *         response=200,
     *         description="List of categories",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="Sample Category"),
     *                 @OA\Property(property="slug", type="string", example="sample-category")
     *             )
     *         )
     *     )
     * )
     */
    public function getCategories()
    {
        // Documentation only
    }

    /**
     * Admin News Endpoints - Requires Authentication
     */

    /**
     * @OA\Get(
     *     path="/api/admin/news",
     *     tags={"Admin"},
     *     summary="Get all news for admin",
     *     description="Returns all news items (including unpublished) for admin management",
     *     security={{"sanctum":{}}},
     *     @OA\Parameter(
     *         name="search",
     *         in="query",
     *         description="Search term to filter news by title or content",
     *         required=false,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Parameter(
     *         name="category",
     *         in="query",
     *         description="Category ID to filter news",
     *         required=false,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Parameter(
     *         name="per_page",
     *         in="query",
     *         description="Number of items per page (max 100)",
     *         required=false,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="List of all news items",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="data", type="array", @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="title", type="string", example="Sample News Title"),
     *                 @OA\Property(property="content", type="string", example="Sample news content..."),
     *                 @OA\Property(property="is_published", type="boolean", example=true),
     *                 @OA\Property(property="category", type="object",
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="name", type="string", example="Sample Category")
     *                 )
     *             ))
     *         )
     *     )
     * )
     */
    public function getAdminNews()
    {
        // Documentation only
    }

    /**
     * @OA\Post(
     *     path="/api/admin/news",
     *     tags={"Admin"},
     *     summary="Create new news",
     *     description="Creates a new news article (admin only)",
     *     security={{"sanctum":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 required={"title", "content", "excerpt"},
     *                 @OA\Property(property="title", type="string", example="New News Title", description="News title"),
     *                 @OA\Property(property="content", type="string", example="News content...", description="News content"),
     *                 @OA\Property(property="excerpt", type="string", example="News excerpt...", description="News excerpt"),
     *                 @OA\Property(property="category_id", type="integer", example=1, description="Category ID"),
     *                 @OA\Property(property="is_published", type="boolean", example=false, description="Publish status")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="News created successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", example=1),
     *             @OA\Property(property="title", type="string", example="New News Title"),
     *             @OA\Property(property="content", type="string", example="News content...")
     *         )
     *     )
     * )
     */
    public function createNews()
    {
        // Documentation only
    }

    /**
     * @OA\Get(
     *     path="/api/admin/news/{id}",
     *     tags={"Admin"},
     *     summary="Get single news for admin",
     *     description="Returns a single news article (including unpublished)",
     *     security={{"sanctum":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="News ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Single news article",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", example=1),
     *             @OA\Property(property="title", type="string", example="Sample News Title"),
     *             @OA\Property(property="content", type="string", example="Sample news content..."),
     *             @OA\Property(property="is_published", type="boolean", example=true),
     *             @OA\Property(property="category", type="object",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="Sample Category")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="News not found"
     *     )
     * )
     */
    public function getSingleAdminNews()
    {
        // Documentation only
    }

    /**
     * @OA\Put(
     *     path="/api/admin/news/{id}",
     *     tags={"Admin"},
     *     summary="Update news",
     *     description="Updates an existing news article (admin only)",
     *     security={{"sanctum":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="News ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 @OA\Property(property="title", type="string", example="Updated News Title", description="Updated news title"),
     *                 @OA\Property(property="content", type="string", example="Updated news content...", description="Updated news content"),
     *                 @OA\Property(property="excerpt", type="string", example="Updated news excerpt...", description="Updated news excerpt"),
     *                 @OA\Property(property="category_id", type="integer", example=1, description="Updated category ID"),
     *                 @OA\Property(property="is_published", type="boolean", example=true, description="Updated publish status")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="News updated successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", example=1),
     *             @OA\Property(property="title", type="string", example="Updated News Title"),
     *             @OA\Property(property="content", type="string", example="Updated news content...")
     *         )
     *     )
     * )
     */
    public function updateNews()
    {
        // Documentation only
    }

    /**
     * @OA\Delete(
     *     path="/api/admin/news/{id}",
     *     tags={"Admin"},
     *     summary="Delete news",
     *     description="Deletes a news article (admin only)",
     *     security={{"sanctum":{}}},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="News ID",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="News deleted successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Berita berhasil dihapus.")
     *         )
     *     )
     * )
     */
    public function deleteNews()
    {
        // Documentation only
    }
}
