<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Subtask;
use App\Task;

class TaskSubtaskController extends Controller
{
    public function store(Task $task)
    {
       $attributes = request()->validate(['description' => 'required|min:3|max:255']);
        // This is a better way - add your own method to Task.php
        $task->addSubtask($attributes); // we don't need the task id like below as we have access to the task with $task


        // This is one way of doing it
        // Subtask::create([
        //     'task_id' => $task->id,
        //     'description' => request('description')
        // ]);

        return back();
    }

    public function update(Subtask $subtask)
    {

        // FEW WAYS TO DO THE AN IF STATEMENT -
        //1. if (request()->has('completed')) {
        //     $subtask->complete();
        // } else {
        //     $subtask->incomplete();
        // }

        //2. request()->has('completed') ? $subtask->complete() : $subtask->incomplete();

        //3.
        $method = request()->has('completed') ? 'complete' : 'incomplete';
        $subtask->$method();



        return back(); // returns to last page
    }


}
