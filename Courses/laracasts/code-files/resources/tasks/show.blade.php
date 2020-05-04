<!DOCTYPE html>
<html lang="en">

    <head>
        <title>@yield('title', 'TEST')</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css">

        <style>
            .is-complete {
                text-decoration: line-through;
            }
        </style>
    </head>

<body id="page-top">

    <div class="container">

        <h1 class="title">{{ $task->title }}</h1>
        <p>
                <a href="/tasks/{{ $task->id }}/edit">Edit</a>
            </p>
        <div class="content">{{ $task->description }}</div>



        @if ($task->subtask->count())

        <div class="box">
            <h2 style="margin-bottom: 1em;">CHECKLIST</h2>
            @foreach ($task->subtask as $subt)
            <div>
            <form method="POST" action="/subtask/{{ $subt->id }}">
                @method('PATCH')
                @csrf

                <label for="completed" class="checkbox {{ $subt->completed ? 'is-complete' : ''}}">
                    <input type="checkbox" name="completed" onChange="this.form.submit()" {{ $subt->completed ? 'checked' : ''}}>
                    {{ $subt->description }}
                </label>

            </form>
        </div>

            @endforeach


        </div>
        @endif

        {{-- Add a new task form --}}

        <form method="POST" action="/tasks/{{ $task->id }}/subtask"  class="box" style="margin-top: 2em;">
            @csrf

            <div class="field">
                <label for="description" class="label"> New </label>

                <div class="control">
                    <input type="text" class="input {{ $errors->has('description') ? 'is-danger' : '' }}" name="description">
                </div>

            </div>

            <div class="field">

                    <div class="control">
                        <button type="submit" class="button is-link">Add to Checklist</button>
                    </div>

                </div>

                @include ('inc/errors')

        </form>




    </div>
</body>

</html>
