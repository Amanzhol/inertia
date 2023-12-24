<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/test', function () {

    function greet(string $greeting, string $name): void
    {
        echo $greeting . ', ' . $name . PHP_EOL;
    }
    $params = ['Hello', 'world',' With all my heart'];
    greet(...$params);
// Hello, world


});

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/users', function () {
    return Inertia::render('Users',[
        'time' => now()->toTimeString()
    ]);
})->name('users');

Route::get('/settings', function () {
    return Inertia::render('Settings');
})->name('settings');

Route::post('/logout', function () {
    dd(request('foo'));
    return Inertia::render('Settings');
});
