<!DOCTYPE html>
<html lang="en">

    <head>
        <title>@yield('title', 'TEST')</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css">

    </head>

<body id="page-top">

<div class="container">

        <h1 class="title">Edit Tasks</h1>

        <form method="POST" action="/tasks/{{ $task->id }}">

            @method('PATCH') {{-- <-- is the blade option  {{ method_field('PATCH') }} --}}

            @csrf {{-- <-- is the blade option {{ csrf_field() }} --}}

            <div class="field">

                <label for="title" class="label">Title</label>

                <div class="control">

                    <input type="text" class="input" name="title" placeholder="Title" value="{{ $task->title }}">

                </div>

            </div>

            <div class="field">

                <label for="description" class="label">Description</label>

                <div class="control">

                    <textarea name="description" class="textarea">{{ $task->description }}</textarea>

                </div>

            </div>

            <div class="field">

                <div class="control">

                    <button type="submit" class="button is-link">Update</button>

                </div>

            </div>

        </form>

        <form method="POST" action="/tasks/{{ $task->id }}" style="margin-top: 1em;">

           @method('DELETE') {{-- {{ method_field('DELETE') }} --}}

           @csrf  {{--{{ csrf_field() }} --}}

            <div class="field">

                    <div class="control">

                        <button type="submit" class="button">Delete</button>

                    </div>

                </div>

        </form>


</div>
</body>

</html>
