<?php

use App\Http\Controllers\Shopify\DashboardController;
use Illuminate\Support\Facades\Route;



Route::group(['prefix' => 'shopify', 'as' => 'shopify.'], function () {
    Route::middleware(['verify.shopify'])->group(function () {
        Route::get('/', [DashboardController::class, 'dashboard'])->name('dashboard');
    });
});
