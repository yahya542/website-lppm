<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Laravel\Sanctum\PersonalAccessToken;

class SanctumAdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Check if user is authenticated via Sanctum token
        $token = $request->bearerToken();
        
        if (!$token) {
            // Check for token in header with 'Token' prefix as well
            $token = $request->header('Authorization');
            if ($token && str_starts_with($token, 'Bearer ')) {
                $token = substr($token, 7);
            }
        }

        if (!$token) {
            // For web requests, redirect to login page
            if (!$request->expectsJson()) {
                return redirect('/login');
            }
            
            return response()->json([
                'message' => 'Unauthenticated.'
            ], 401);
        }

        // Find the token and get the user
        $accessToken = PersonalAccessToken::findToken($token);
        
        if (!$accessToken) {
            // For web requests, redirect to login page
            if (!$request->expectsJson()) {
                return redirect('/login');
            }
            
            return response()->json([
                'message' => 'Invalid token.'
            ], 401);
        }

        // Get user from token
        $user = $accessToken->tokenable;
        
        if (!$user || $user->role !== 'admin') {
            // For web requests, redirect to login page
            if (!$request->expectsJson()) {
                return redirect('/login');
            }
            
            return response()->json([
                'message' => 'Unauthorized access. Admins only.'
            ], 403);
        }

        // Authenticate the user for this request
        Auth::login($user);
        
        return $next($request);
    }
}