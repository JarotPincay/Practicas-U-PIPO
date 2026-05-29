<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Personas;

class PersonaController extends Controller
{

    public function index (){
         $personas = Personas::all();
        return view('personas', compact('personas'));
    }


}
