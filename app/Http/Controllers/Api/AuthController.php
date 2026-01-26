<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
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

        // Hapus semua token lama milik user
        try {
            $user->tokens()->delete();
        } catch (\Exception $e) {
            // Jika ada error saat menghapus token lama, lanjutkan saja
            Log::warning('Error during old token deletion: ' . $e->getMessage());
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
        try {
            // Logout Sanctum token if exists
            if ($request->user()) {
                $request->user()->currentAccessToken()->delete();
            }
            
            // Juga hapus semua token Sanctum milik user ini untuk memastikan bersih
            if ($request->user()) {
                $request->user()->tokens()->delete();
            }
        } catch (\Exception $e) {
            // Jika token tidak ditemukan atau ada error lain, lanjutkan logout
            Log::warning('Error during token deletion: ' . $e->getMessage());
        }

        // Juga logout dari sesi web tradisional
        // Session logout not needed for API tokens
        // Auth::logout();
        // $request->session()->invalidate();
        // $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Logged out successfully'
        ], 200);
    }
    
    /**
     * Get authenticated user
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}