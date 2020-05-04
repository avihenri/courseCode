<?php

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

// When on home page load welcome file - change to index
Route::get('/', function () {
    return view('dashboard');
});


Route::get('/your-profile', function () {
    return view('your-profile');
});

Route::resource('tasks', 'TasksController'); // short version but it includes GET/POST/PATCH/DELETE requests

Route::post('/tasks/{task}/subtask', 'TaskSubtaskController@store');
Route::patch('/subtask/{subtask}', 'TaskSubtaskController@update');
