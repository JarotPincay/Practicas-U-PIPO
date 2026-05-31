<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Musica;

class MusicaWebController extends Controller
{
    public function index()
    {
       $musica = Musica::all();
       return view('musica_diseño', compact('musica'));
       //return response()->jason(Musicas::all());
    }
}

