<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Musica extends Model
{
    protected $table = 'musicas';
   protected $fillable = ['nombre','duracion','artista','genero'];
}
