<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subtask extends Model
{
    protected $guarded =[];

    public function complete($completed = true)
    {
        $this->update(compact('completed')); // or ['completed' => $completed]
    }

    public function incomplete()
    {
        $this->complete(false);
    }

    public function task()
    {
        return $this->belongsTo(Task::class);
    }
}
