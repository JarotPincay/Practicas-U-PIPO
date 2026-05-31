<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Musica;
class MusicaController extends Controller
{
        public function Vista()
    {
       $musica = Musica::all();
       return view('musica_diseño', compact('musica'));
       
    }

    public function index()
    {
       $musica = Musica::all();
       return response()->json($musica);
       //return response()->jason(Musicas::all());
    }
    public function store(Request $request)
    {
        $musica = Musica::create($request->all());
        return response()->json($musica, 201);
    }

    public function show($id)
    {
        $musica = Musica::find($id);
        if ($musica) {
            return response()->json($musica);
        } else {
            return response()->json(['message' => 'Música no encontrada'], 404);
        }
    }
    public function update(Request $request, $id)
    {
        $musica = Musica::find($id);
        if ($musica) {
            $musica->update($request->all());
            return response()->json($musica);
        } else {
            return response()->json(['message' => 'Música no encontrada'], 404);
        }
    }

    public function destroy($id)
    {
        $musica = Musica::find($id);
        if ($musica) {
            $musica->delete();
            return response()->json(['message' => 'Música eliminada']);
        } else {
            return response()->json(['message' => 'Música no encontrada'], 404);
        }
    }
}
