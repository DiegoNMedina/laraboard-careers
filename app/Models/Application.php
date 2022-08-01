<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $appends = ['humanCreatedAt'];

    protected $fillable = [
        'job_id',
        'name',
        'email',
        'phone',
        'cover_letter',
        'resume',
    ];

    public function job()
    {
        return $this->belongsTo(Job::class);
    }

    public function scopeOnMyJobs($query) {
        if(auth()->user()->isAdmin()) {
            return $query;
        }
        return $query->whereHas('job', function($query) {
            $query->where('jobs.user_id', auth()->id());
        });

    }

    public function getHumanCreatedAtAttribute() {
        return $this->created_at->format('jS F Y H:iA');
    }
}
