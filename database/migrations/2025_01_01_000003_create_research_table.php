<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('research', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('abstract');
            $table->text('content')->nullable();
            $table->string('slug')->unique();
            $table->string('authors'); // JSON string atau comma-separated
            $table->string('research_type')->nullable(); // Penelitian/Pengabdian
            $table->string('funding_source')->nullable();
            $table->decimal('funding_amount', 15, 2)->nullable();
            $table->string('status')->default('active'); // active, completed, ongoing
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->string('file_path')->nullable(); // Path to research document
            $table->string('featured_image')->nullable();
            $table->timestamp('published_at')->nullable();
            $table->boolean('is_published')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('research');
    }
};