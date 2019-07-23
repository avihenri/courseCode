<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Task;

class TasksController extends Controller
{
    public function index()
    {
        $tasks = Task::all();

       // return $tasks;  returns all the tasks as JSON
        return view('tasks.index', ['tasks' => $tasks]); // or use compact('tasks); with foreach it returns it
    }

    public function create()
    {
        return view('tasks.create');
    }

    public function store()
    {
       $validated = request()->validate([
            'title' => ['required', 'min:3', 'max:255'],
            'description' => 'required'
        ]);


        Task::create($validated);
        // all of the below is the same as above

        //1. Task::create([
        //     'title' => request('title'),
        //     'description' => request('description')
        // ]);

        //2. $task = new Task();
        // $task->title = request('title');
        // $task->description = request('description');
        // $task->save();

        return redirect('/tasks');

        // return request()->all(); from the form - brings back json
    }

     /**
     * Display the specified resource.
     *
     */
    public function show(Task $task) //removed $id
    {
        // $task = Task::findOrFail($id); // removed this to refactor the code
        return view('tasks.show', compact('task'));
    }

    /**
     * Show the form for editing the specified resource.
     *

     */
    public function edit(Task $task) //removed $id
    {
        // $task = Task::findOrFail($id);

        return view('tasks.edit', compact('task'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Task $task) //removed $id
    {
        $task->update(request(['title', 'description']));
        // $task = Task::findOrFail($id);
        // $task->title = request('title');
        // $task->description = request('description');
        // $task->save();
        return redirect('/tasks');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task) //removed $id
    {
        // Task::findOrFail($id)->delete();
        $task->delete();
        return redirect('/tasks');
    }
}


