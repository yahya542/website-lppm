<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create Admin User
        User::updateOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin LPPM',
                'password' => Hash::make('password'),
                'role' => 'admin',
            ]
        );

        // Create Regular User (optional)
        User::updateOrCreate(
            ['email' => 'user@uim.ac.id'],
            [
                'name' => 'Dosen Peneliti',
                'password' => Hash::make('password'),
                'role' => 'user',
            ]
        );
    }
}
