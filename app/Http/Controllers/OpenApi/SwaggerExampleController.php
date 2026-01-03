<?php

namespace App\Http\Controllers\OpenApi;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

// This controller provides example Swagger documentation annotations
// Global info and server definitions are in AllEndpointsDocumentation.php
class SwaggerExampleController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/swagger-example",
     *     description="Get example data",
     *     tags={"Example"},
     *     @OA\Response(
     *         response=200,
     *         description="Successful response",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Hello World"),
     *             @OA\Property(property="status", type="string", example="success")
     *         )
     *     )
     * )
     */
    public function index(): JsonResponse
    {
        return response()->json([
            'message' => 'Hello World',
            'status' => 'success'
        ]);
    }

    /**
     * @OA\Post(
     *     path="/api/swagger-example",
     *     description="Create example data",
     *     tags={"Example"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 @OA\Property(property="name", type="string", example="John Doe"),
     *                 @OA\Property(property="email", type="string", example="john@example.com")
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Created successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Created successfully"),
     *             @OA\Property(property="data", type="object")
     *         )
     *     )
     * )
     */
    public function store(Request $request): JsonResponse
    {
        return response()->json([
            'message' => 'Created successfully',
            'data' => $request->all()
        ], 201);
    }

    /**
     * @OA\Get(
     *     path="/api/swagger-example/{id}",
     *     description="Get example data by ID",
     *     tags={"Example"},
     *     @OA\Parameter(
     *         name="id",
     *         description="Example ID",
     *         in="path",
     *         required=true,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful response",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", example=1),
     *             @OA\Property(property="name", type="string", example="John Doe"),
     *             @OA\Property(property="email", type="string", example="john@example.com")
     *         )
     *     ),
     *     @OA\Response(response=404, description="Not found")
     * )
     */
    public function show(int $id): JsonResponse
    {
        return response()->json([
            'id' => $id,
            'name' => 'John Doe',
            'email' => 'john@example.com'
        ]);
    }
}