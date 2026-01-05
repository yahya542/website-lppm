<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Handle user login
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        // Cek apakah user adalah admin
        if ($user->role !== 'admin') {
            return response()->json([
                'message' => 'Unauthorized access. Admins only.'
            ], 403);
        }

        $token = $user->createToken('admin-token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
            'token_type' => 'Bearer',
        ]);
    }
    

    /**
     * Handle user logout
     */
    public function logout(Request $request)
    {
        // Logout Sanctum token if exists
        if ($request->user()) {
            $request->user()->currentAccessToken()->delete();
        }

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }
    
    /**
     * Handle admin logout with session
     */
    public function adminLogout(Request $request)
    {
        // Logout session
        auth()->logout();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }

    /**
     * Get authenticated user
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
    
    /**
     * Handle admin login and session
     */
    public function adminSessionLogin(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'The provided credentials are incorrect.'
            ], 401);
        }

        // Cek apakah user adalah admin
        if ($user->role !== 'admin') {
            return response()->json([
                'message' => 'Unauthorized access. Admins only.'
            ], 403);
        }

        // Login user secara session
        Auth::login($user);

        return response()->json([
            'message' => 'Login successful',
            'redirect_url' => '/admin'
        ]);
    }
    
    /**
     * Handle admin logout with session
     */
    public function adminSessionLogout(Request $request)
    {
        // Logout session
        Auth::logout();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }
}