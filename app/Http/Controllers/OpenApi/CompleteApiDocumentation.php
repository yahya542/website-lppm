<?php

namespace App\Http\Controllers\OpenApi;

use App\Http\Controllers\Controller;

class CompleteApiDocumentation extends Controller
{
    // This file exists to maintain compatibility but all documentation 
    // is now handled in AllEndpointsDocumentation.php
    public function index()
    {
        return response()->json(['message' => 'API Documentation available at /api/documentation']);
    }
}
