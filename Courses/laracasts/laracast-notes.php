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
        <!-- Tinker docs - https://laravel-news.com/php-tinker -->
        <!-- Eloquent docs - https://laravel.com/docs/5.8/eloquent -->

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

                <!-- in html - show titles  -->
                @foreach ($tasks as $task)
                    <li>{{ $task->title }}</li>
                @endforeach

<!-- EPISODE 9 - DIRECTORY STRUCTURE REVIEW -->
        <!-- just goes through the directory - may be helpful if stuck -->


<!-- EPISODE 10 - FORM HANDLING & CSRF PROTECTION -->
        <!-- Going to create a create task page that has a form that writes to the db  -->
        <!-- web.php  - POST route -->
        Route::post('/tasks', 'TasksController@store');
        <!-- create a new page called create.blade.php-->
        <h1>Create New Tasks</h1>
            <form action="/tasks" method="POST" > 
            {{ csrf_field() }} <!-- this is a hidden field with a security token -->
                <div>
                    <input type="text" name="title" placeholder="Task Title">
                </div>

                <div>
                    <textarea name="description" placeholder="Task Description"></textarea>
                </div>

                <div>
                    <button type="submit">Create Task</button>
                </div>
            </form>
            <!-- In our taskController we need an new function to view the page -->.
            public function create() 
            {
                return view('tasks.create');
            }
            <!-- and another to store the data - this is the long way -->
            public function store() 
            {
                $task = new Task();
                $task->title = request('title');
                $task->description = request('description');
                $task->save();

                return redirect('/tasks');

                <!-- // return request()->all(); from the form - brings back json -->
            }


<!-- EPISODE 11 - ROUTING CONVENTIONS WORTH FOLLOWING -->

    <!-- Routing - web.php
        GET /tasks (index) - show all resources        
        GET /tasks/create (create) - form to display to create a task
        GET /tasks/taskid (show) - show existing task
        POST /tasks (store) - add a resource
        GET /tasks/taskid/edit (edit) - display resource that needs updated
        PATCH /tasks/taskid - update a resource
        DELETE /tasks/taskid - delete a resource
        -->
        Route::resource('tasks', 'TasksController'); <!-- short version but it includes GET/POST/PATCH/DELETE requests -->
        <!-- // To see what routes you have go to terminal - php artisan route:list
        // | Domain | Method    | URI               | Name          | Action                                       | Middleware   |
        // |        | GET|HEAD  | /                 |               | Closure                                      | web          |
        // |        | GET|HEAD  | api/user          |               | Closure                                      | api,auth:api |
        // |        | GET|HEAD  | tasks             | tasks.index   | App\Http\Controllers\TasksController@index   | web          |
        // |        | POST      | tasks             | tasks.store   | App\Http\Controllers\TasksController@store   | web          |
        // |        | GET|HEAD  | tasks/create      | tasks.create  | App\Http\Controllers\TasksController@create  | web          |
        // |        | GET|HEAD  | tasks/{task}      | tasks.show    | App\Http\Controllers\TasksController@show    | web          |
        // |        | PUT|PATCH | tasks/{task}      | tasks.update  | App\Http\Controllers\TasksController@update  | web          |
        // |        | DELETE    | tasks/{task}      | tasks.destroy | App\Http\Controllers\TasksController@destroy | web          |
        // |        | GET|HEAD  | tasks/{task}/edit | tasks.edit    | App\Http\Controllers\TasksController@edit    | web          |
        // |        | GET|HEAD  | your-profile      |               | Closure                                      | web          |

        // Long version -
        // Route::get('/tasks', 'TasksController@index');
        // Route::get('/tasks/create', 'TasksController@create');
        // Route::get('/tasks/{taskid}/show', 'TasksController@show');
        // Route::post('/tasks', 'TasksController@store');
        // Route::get('/tasks/{taskid}/edit', 'TasksController@edit');
        // Route::patch('/tasks/{taskid}', 'TasksController@update');
        // Route::delete('/tasks/{taskid}', 'TasksController@destroy'); -->
        <!-- **Remember to add the functions to the controller - app/Http/Controllers/TaskController.php** or do the below.. -->

        <!-- You can make a controller a resource when you make it  -->
        <!-- BASH --> php artisan make:controller NewController -r -m -post 
                <!-- This provides a controller with the boilerplate code so all the functions index, create, show, edit, update, destroy -->
                <!-- the -m & -Post creates a post model -->          
        

<!-- EPISODE 12 - FAKING PATCH AND DELETE REQUESTS -->

        <!-- Patch & Delete are not availbale in form method -->
            <!-- we need to add them in the controller -->

            <!-- // To see what routes you have go to terminal - php artisan route:list
// | Domain | Method    | URI               | Name          | Action                                       | Middleware   |
// |        | GET|HEAD  | /                 |               | Closure                                      | web          |
// |        | GET|HEAD  | api/user          |               | Closure                                      | api,auth:api |
// |        | GET|HEAD  | tasks             | tasks.index   | App\Http\Controllers\TasksController@index   | web          |
// |        | POST      | tasks             | tasks.store   | App\Http\Controllers\TasksController@store   | web          |
// |        | GET|HEAD  | tasks/create      | tasks.create  | App\Http\Controllers\TasksController@create  | web          |
// |        | GET|HEAD  | tasks/{task}      | tasks.show    | App\Http\Controllers\TasksController@show    | web          |
// |        | PUT|PATCH | tasks/{task}      | tasks.update  | App\Http\Controllers\TasksController@update  | web          |
// |        | DELETE    | tasks/{task}      | tasks.destroy | App\Http\Controllers\TasksController@destroy | web          |
// |        | GET|HEAD  | tasks/{task}/edit | tasks.edit    | App\Http\Controllers\TasksController@edit    | web          |
// |        | GET|HEAD  | your-profile      |               | Closure                                      | web          |

// Long version -
// Route::get('/tasks', 'TasksController@index');
// Route::get('/tasks/create', 'TasksController@create');
// Route::get('/tasks/{taskid}/show', 'TasksController@show');
// Route::post('/tasks', 'TasksController@store');
// Route::get('/tasks/{taskid}/edit', 'TasksController@edit');
// Route::patch('/tasks/{taskid}', 'TasksController@update'); 
// Route::delete('/tasks/{taskid}', 'TasksController@destroy'); -->
            

<!-- EPISODE 13 - FORM DELETE REQUESTS -->
    <!-- dd('hello!'); // dd() is die & don't - good for debugging -->
        <!-- use findOrFail istead of just fail to show 404 error rather than a debug error -->
            <!-- the below should go in the form -->
            @method('PATCH') <!-- <-- is the blade option of {{ method_field('PATCH') }}  -->      
            <!-- OR -->
            @method('DELETE')

            @csrf <!-- <-- is the blade option {{ csrf_field() }} -->
            <!-- 
                delete should be a separate form
                for example:
             -->
             <form action="/projects/{{ $project->id}}" method="POST" >
                 {{ method_field('DELETE') }} <!-- or  @method('DELETE') -->
                 @csrf 
                 <div class="field">
                     <div class="control">
                         <button type="submit" class="button">Delete Project</button>
                     </div>
                 </div>
             </form>
             <!-- Test it works witha die & dump in the destroy method-->
                    dd('hello');
                    <!-- Can put.. -->
                    Project::findOrFail($id)->delete();
                    return redirect('/projects');

<!-- EPISODE 14 - CLEANER CONTROLLERS & MASS ASSIGNMENT CONCERNS -->
            <!-- Laravel route model binding -->
            MassAssignmentException <!-- looks like you are trying to mass update things which isn't great -->
            <!-- to fix this we need to add what fields we want to be fillable in our model app/task.php -->
            class Task extends Model
            {
                protected $fillable = [
                    'title', 'description'
                ];
                <!-- or do the opposite add all the fields you dont want fillable -->
                protected $guarded = [
                    'password', 'blah'
                ];
            }
            <!-- cleaner code is within the TaskController & commented out is what it was -->

<!-- EPISODE 15 - TWO LAYERS OF VALIDATION -->
    <!-- request function you can do what you need with the request data -->
    <!-- to add validation we use request()->validate() -->
    <!-- $errors is an object that is available all the time -->

    <!-- you can one line what we did in TaskController old example below -->
        Task::create(request()->validate([
            'title' => ['required', 'min:3', 'max:255'],
            'description' => 'required'
        ]));
        return redirect('/tasks');
        <!-- the above was -->
        $validated = request()->validate([
            'title' => ['required', 'min:3', 'max:255'],
            'description' => 'required'
        ]);
        Task::create($validated);
        return redirect('/tasks');

        <!-- error handling for input in html -->
            {{ $errors->has('title') ? 'is-danger' : '' }}

        <!-- Add old() so if there are any errors the input values are still there -->
            {{ old('title') }}

        <!-- confirmed valadation rule -->
            'password' => 'required|confirmed'

<!-- EPISODE 16 - YOUR FIRST ELOQUENT RELATIONSHIP -->

        <!-- CREATING A SUBTASK MODEL -->
            <!-- With migration file & factory -->
            php artisan make:model Subtask -m -f
            <!-- factories app/database/factories -->
            <!-- we can then check if a task has a subtask -->
            <!-- we should ad an if statement to check for subtasks
                otherwise there will be an empty div for those without
                     -->
            @if ($task->subtask->count())
                <div>
                    @foreach ($task->subtask as $subt)
                        <li>{{ $subt->description }}</li>
                    @endforeach
                </div>
            @endif
            <!-- inverse of this - a subtask belows to a task -->
            <!-- In the model subtask.php add the below -->
            public function task()
            {
                return $this->belongsTo(Task::class);
            }
            <!--  to check.. check in tinker -->
            >>> App\Task::first()->subtask
                => Illuminate\Database\Eloquent\Collection {#2986
                    all: [
                    App\Subtask {#2972
                        id: 1,
                        task_id: 10,
                        description: "Finish Laracasts",
                        completed: 0,
                        created_at: "2019-07-22 00:00:00",
                        updated_at: "2019-07-22 00:00:00",
                    },
                    ],
                }
                >>> $subtask = App\Subtask::first();
                => App\Subtask {#2980
                    id: 1,
                    task_id: 10,
                    description: "Finish Laracasts",
                    completed: 0,
                    created_at: "2019-07-22 00:00:00",
                    updated_at: "2019-07-22 00:00:00",
                }
                >>> $subtask->task;
                => App\Task {#2969
                    id: 10,
                    title: "What is going on!!",
                    description: "Who knows!! FGSFGSFGS",
                    created_at: "2019-07-22 14:12:33",   
                    updated_at: "2019-07-22 14:15:55",
                }

           
<!-- EPISODE 17 - FORM ACTION CONSIDERTIONS 8m-->
        <!-- To access an element in the console do the following - good for testing -->
        <!-- highlight the element & go to console eg. form element-->
        $0
        <!-- to submit the form -->
        $0.submit()

        <!-- MassAssignment error -->
        <!-- remember you can do the following to protect all fields-->
        protected $guarded =[];
        <!-- or.. to protect specific field-->
        protected $fillable = ['name'];
         <!--check a checkbox is completed  -->
         {{ $subt->completed ? 'checked' : ''}}       


<!-- EPISODE 18 - CREATE NEW PROJECT TASKS 10m-->

  <!-- we added error code to an error include file -->
         <!-- added validation to subtask description field in the store method in controlloer-->
         $attributes = request()->validate(['description' => 'required|min:3|max:255']);
         <!-- This is a better way - add your own method to Task.php -->
            $task->addSubtask($attributes); // we don't need the task id like below as we have access to the task with $task
             <!-- // This is one way of doing it
            // Subtask::create([
            //     'task_id' => $task->id,
            //     'description' => request('description')
            // ]); -->
        return back();
        <!-- and the below in Task.php -->
        public function addSubtask($subtask)
        {
                <!-- // This is better as we have a relationship with subtask with the the above method so we can do the below -->
                <!-- // $this->tasks()->create(['description' => $description]) or the below os better.. -->
            $this->subtask()->create($subtask); <!-- changed from 'description' as the validation attributes in controller is pulling through the data -->
                    <!-- // Could do the below like what we did in the TaskSubtaskController
                //    return Subtask::create([
                //         'task_id' => $this->id,
                //         'description' => $description
                //     ]); -->
        }

<!-- EPISODE 19 - BETTER ENCAPSULATION 8m-->
        <!-- Encapsulation: Hide internal state & values inside a class -->
        <!-- complete/incomplete classes - in subtask.php -->
        public function complete($completed = true)
        {
            $this->update(compact('completed')); // or ['completed' => $completed]
        }
        public function incomplete()
        {
            $this->complete(false);
        }
        <!-- Below are a few ways to do an if statement to toggle the complete/incomplete -->
                <!-- this was the original code before the classes
                $subtask->complete(request()->has('completed')); // this class is in Subtask.php
                    $subtask->update([
                        'completed' => request()->has('completed')
                    ]); -->
        
        <!-- FEW WAYS TO DO THE AN IF STATEMENT - -->
         if (request()->has('completed')) {
                $subtask->complete();
            } else {
                $subtask->incomplete();
            }

        request()->has('completed') ? $subtask->complete() : $subtask->incomplete();

        
        $method = request()->has('completed') ? 'complete' : 'incomplete';
        $subtask->$method();

<!-- EPISODE 20 - WHEN IN DOUBT 5.5m-Just a side track video -->

    <!-- You can create a new controller for multiple things
        for example:
            We could do a completed tasks controller to handle the 
            storing and destroying of subtasks from the last video -->


<!-- EPISODE 21 - CORE CONCEPTS: SERVICE CONTAINER & AUTO-RESOLUTION 15.5m-->
        <!-- service container & auto resolving -->
        <!-- Filesystem -->
        <!-- app() out of the laravel container -->
        app(Filesystem::class);
        <!-- call methods on app() web.php-->
        app()->bind('example', function () {
                return new \App|Example'
        });
        Route::get('/', function () {
            dd(app('example'));
            return view ('welcome');
        });
    
<!-- EPISODE 22 - CORE CONCEPTS: SERVICE PROVIDERS 15.5m-->

<!-- EPISODE 23 - CORE CONCEPTS: CONFIGURATION & ENVIROMENTS 12m-->

<!-- EPISODE 24 - A FULL REGISTRATION SYSTEM IN MINUTES 6m-->

<!-- EPISODE 25 - CORE CONCEPTS: MIDDLEWARE 10m-->

<!-- EPISODE 26 - YOU MAY ONLY VIEW YOUR PROJECTS 10m-->

<!-- EPISODE 27 - AUTHORIZATION ESSENTIALS -->

<!-- EPISODE 28 - SIMPLER DEBUGGING WITH LARAVEL TELESCOPE -->

<!-- EPISODE 29 - DON'T FORGET READABILITY -->

<!-- EPISODE 30 - MAILABLES -->

<!-- EPISODE 31 - MODEL HOOKS AND SEESAWS -->

<!-- EPISODE 32 - CUSTOM EVENTS AND LISTNERS -->

<!-- EPISODE 33 - USER NOTIFICATIONS -->

<!-- EPISODE 34 - LARAVEL AND THE FORNT-END --> 

<!-- EPISODE 35 - COLLECTION ESSENTIALS -->

<!-- EPISODE 36 - SESSIONS AND FLASH MESSAGING -->

<!-- EPISODE 37 - LARAVEL TESTING CRASH COURSE -->

<!-- EPISODE 38 - THE NEXT STEPS -->
            


<!-- AUTHENTICATION DOC NOTES -->
    <!-- guards: how users are authenticated for each request -->
    <!-- providers: defines how users are retrieved from your persistent storage -->

    <!-- PRE-BUILT CONTROLLERS -->
        <!-- RegisterController: new user registration | to remove: Auth::routes(['register' => false]);-->
        <!-- LoginController: handles authentication -->
        <!-- ForgotPasswordController: handles emailing links for resetting passwords -->
        <!-- ResetPasswordController: logic to reset passwords -->

    <!-- ROUTING -->
    php artisan make:auth
        <!-- this creates required views (resources/views/auth & resources/views/layouts) and a HomeController -->
