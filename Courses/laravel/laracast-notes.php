<!-- https://laracasts.com/series/laravel-from-scratch-2018 -->

<!-- .blade.php = template that compiles simple php code to php vanilla 
       - file types need to end in .blade.php e.g. welcome.blade.php -->

<!-- EPISODE 3 - BASIC ROUTING -->
    <!-- BASH --> php artisan <!-- brings up cmd list -->
    <!-- BASH --> php artisan serve <!-- creates local connection 127.0.0.1 -->
    <!-- Routing folder has web.php where you add a routing to the page that should be loaded when on a location -->
    Route::get('/', function () { <!-- This loads the welcome page when you get to the home page '/' -->
    return view('dashboard');
    });

<!-- EPISODE 4 - DYNAMIC CONTENT -->
    @section() <!-- section of content -->
    @yield() <!-- displays the content of a section -->
    <!-- for example -->
    @section('content')
    <h1>Whatever content you want</h1>
    @endsection

    @yield('content')

    <!-- extending a layout page such as navbars and standard html/body/style/js -->
    @extends('layout') <!-- add this to a new page -->
    <!-- then add your content to for the new page -->
    @section('content')
    <h1>Whatever content you want</h1>
    @endsection

    <!-- THE BELOW IS A COPY OF DASHBOARD.PHP - WITHOUT THE ACTUAL CONTENT -->
    @extends('master') <!-- extends layout master -->
    @section('title', 'Dashboard | Rabbies') <!-- dynamnic title -->
    @section('sidebar') <!-- adds sidebar content -->
        @parent
    @endsection

    @section('content')    <!-- Main content -->

        @section('topbar') <!-- adds topbar content -->
            @parent
        @endsection

    <h1>dashboard content goes here</h1>
    @endsection
    <!-- In master layout it has the below to show the content above in the right place on the page-->
    @yield('content')

    <!-- Dynamic Titles -->
    @yield('title', 'default title if none added to other pages')<!-- On master layout page -->
    @section('title', 'Page title')<!-- On relevent page -->

<!-- EPISODE 5 - SENDING DATA TO YOUR VIEWS -->
    <!-- the pages that you route to view, are in resources/views and follow the above to display what you need -->
    <!-- blade - example below of what you can add to show data -->
        <!-- PHP VANILLA -->
            <?php foreach ($tasks as $task) : ?>
                <li><?= $task; ?></li>
            <?php endforeach; ?>
        <!-- SIMPLE PHP -->
            @foreach($tasks as $task)
                <li>{{ $task }}</li>
            @endforeach

    <!-- DISPLAY IMGS -->
        {{ URL:: to('path/to/image')}}
        <!-- Imgs should be in the public folder so path would be like /img/image.png -->

<!-- EPISODE 6 - CONTROLLERS 101 -->
<!-- in web.php 
    - catch all controller -->
    Route::get('/', 'PagesController@home');
   <!-- in termainal -->  php artisan make:controller PagesController
   <!-- the new controller will then be added to app/Http/Controllers 
        - inside the new file there will be boilerplate code
        - in class function you add your view and remove them from the web.php -->
        class PagesController extends Controllers
        {
            public function home()
            {
                return view('welcome', [
                    'foo' => 'bar' <!-- not sure about why this is here -->
                ]);
            }

            public function about()
            {
                return view('about');
            }
            
            public function contact()
            {
                return view('contact');
            }
        }
    <!-- So the web.php should only have the page controller -->
    Route::get('/', 'PagesController@home');
    Route::get('/about', 'PageController@about');
    Route::get('/contact', 'PageController@contact');

<!-- EPISODE 7 - DATABASES & MIGRATION -->
<!-- modal layer - active record pattern - php Eloquent-->
    <!-- BASH --> laravel new project
    <!--  .env file - hold private details 
        - holds the database connection that the config/database.php  -->
        <!-- MIGRATION DOCS - https://laravel.com/docs/master/migrations#creating-indexes -->
    <!-- BASH --> php artisan migrate <!-- Migrations are like version control for your database -->
        <!-- The above will create default tables in the database migration/users/password reset -->
        <!-- If you need to rollback any databsase changes.. -->
            <!-- BASH --> php artisan migrate:rollback
        <!-- If you need to change any of the table column names etc go to database/migrations/<table>
            - have a look at the function up() for column names and datatypes for example.. -->
            public function up()
            {
                Schema::create('users', function (Blueprint $table) {
                    $table->bigIncrements('id');
                    $table->string('name');
                    $table->string('email')->unique();
                    $table->timestamp('email_verified_at')->nullable();
                    $table->string('password');
                    $table->rememberToken();
                    $table->timestamps();
                });
            }
            <!-- the up function creates what you need when you do mirgate and the down function is used for the roll back
            therefore, drops the table related 
                if you comment out the down function code it will still let you rollback but just not drop the table
                if there are any errors when you mirgated the new table, fix the error then do migrate:fresh but remember..
                this drops all the tables!-->
            <!-- If you make a change you have two choices
                1. do php artisan migrate:rollback then php artisan migrate 
                2. do php artisan migrate:fresh
                the latter is only if you are in development stage as it will drop all the tables! Dangerous in production -->
            <!-- note: php artisan migrate:reset resets to the very beginning - not advisibe -->
        <!-- check what you can add in cmd -->
         php artisan help <!-- <then cmd you need help with> -->
         php artisan help make:migration <!-- gives you the help to make a cmd -->
         php artisan make:migration create_tableName_table<!-- creates file so you can edit it to create a new table -->
         php artisan mirgate <!-- migrates the table you just created -->

<!-- EPISODE 8 - ELOQUENT, NAMESPACING, & MVC=ModelViewContainer -->
        
    <!-- To Create a model -->
        php artisan make:model Task
        <!-- this will now be in app/Task.php -->
            <!-- enter tinker - shell - to check what apps you have-->
            App\Task::all(); <!-- will have nothing at first -->
            $task = new App\Task; <!-- creates a new Task and saves it to var task -->
            $task->title = "Test Task" <!-- will save its title to the database -->
            $task->description = "Test description" <!-- will save its description to the database -->
            $task <!-- will then show the whole task -->
            $task->save(); <!-- saves the task -->
            App\Task::all() <!-- it will now show your task -->
            <!-- if you have lots of tasks you can specify which one you want -->
            App\Task::first();
            App\Task::first()->title <!-- returns the title -->
            App\Task::first()->description <!-- returns the description -->
            App\Task::all()[0]; <!-- return task like an array -->
        <!-- A collection is like an array with helpers and shortcuts -->
        
            Route::get('/tasks', 'TasksController@index'); <!-- web.app -->
            php artisan make:controller TasksController <!-- BASH and it creates it in App/Http/Controllers -->
            <!-- in the new controller add this -->
            public function index() 
            {
                $tasks = Task::all();

                // return $tasks;  returns all the tasks as JSON
                return view('tasks.index', ['tasks' => $tasks]); // or use compact('tasks); with foreach it returns it how you displayed it with html
            }
            <!-- create a file index.blade.php in a tasks folder 
                got loaclhost to check it worked-->
        
            


