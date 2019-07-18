<!-- https://laracasts.com/series/laravel-from-scratch-2018 -->

<!-- EPISODE 6 - CONTROLLERS 101 -->
<!-- in web.php 
    - catch all controller -->
    Route::get('/', 'PagesController@home');

   <!-- in termainal -->  php artisan make:controller PagesController
   <!-- the new controller will then be added to app/Http/Controllers 
        - inside the new file there will be boilerplate code-->
