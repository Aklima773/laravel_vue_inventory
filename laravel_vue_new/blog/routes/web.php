<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/



Route::get('/', function () {
    return view('front');
});

Auth::routes();

Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::post('/checkuser', [App\Http\Controllers\AuthController::class, 'CheckUser']);
Route::post('/logout', [App\Http\Controllers\AuthController::class, 'LogOut']);

Route::get('/{vue_capture?}', function () {
    return view('front');
})->where('vue_capture', '[\/\w\.-]*');
