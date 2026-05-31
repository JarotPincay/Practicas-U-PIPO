<?php

    use Illuminate\Support\Facades\Route;
    use App\Http\Controllers\MusicaController;

    Route::get('/', [MusicaController::class, 'Vista']);

    Route::apiResource('musica', MusicaController::class);
