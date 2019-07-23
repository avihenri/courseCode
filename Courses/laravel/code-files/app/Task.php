<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'title', 'description'
    ];

    public function subtask()
    {
        return $this->hasMany(Subtask::class);
    }

    public function addSubtask($subtask)
    {
        // This is better as we have a relationship with subtask with the the above method so we can do the below
        // $this->tasks()->create(['description' => $description]) or the below os better..
        $this->subtask()->create($subtask);
        // Could do the below like what we did in the TaskSubtaskController
    //    return Subtask::create([
    //         'task_id' => $this->id,
    //         'description' => $description
    //     ]);
    }
}
