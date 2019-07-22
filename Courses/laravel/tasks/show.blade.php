<!DOCTYPE html>
<html lang="en">

    <head>
        <title>@yield('title', 'TEST')</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css">

    </head>

<body id="page-top">

    <div class="container">

        <h1 class="title">{{ $task->title }}</h1>

        <div class="content">{{ $task->description }}</div>

        <p>
            <a href="/tasks/{{ $task->id }}/edit">Edit</a>
        </p>

    </div>
</body>

</html>
