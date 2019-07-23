<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>@yield('title', 'Rabbies')</title>

  <!-- Custom fonts for this template-->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
  <link href="css/bootstrap.min.css" rel="stylesheet" />
  <!-- Custom styles for this template-->
  <link href="css/sb-admin-2.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.2/css/bulma.css">

</head>

<body id="page-top">

<h1 class="title">Create New Tasks</h1>


<div class="container">



        <form action="/tasks" method="POST" >
            {{ csrf_field() }}

                <div class="field">
                    <label for="title" class="label">Task Title</label>

                    <div class="control">
                            <input type="text" class="input {{ $errors->has('title') ? 'is-danger' : '' }}" name="title" value="{{ old('title') }}" >
                    </div>

                </div>

                <div class="field">
                    <label for="description" class="label">Task Description</label>
                    <div class="control">
                            <textarea class="input {{ $errors->has('description') ? 'is-danger' : '' }}" name="description">{{ old('description') }} </textarea>
                    </div>

                </div>

                <div class="field">
                    <div class="control">
                    <button type="submit" class="button is-link">Create Task</button>
                    </div>
                </div>

                @include ('inc/errors')

            </form>

</div>



</body>

</html>
