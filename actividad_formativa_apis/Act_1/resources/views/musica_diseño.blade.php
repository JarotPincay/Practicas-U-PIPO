<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>Lista de musica</h1>
     @if($musica->isEmpty())
        <p>No hay musica disponible.</p>
    @else
        <ul>
            @foreach($musica as $m)
                <li>{{ $m->nombre }} - {{ $m->artista }} ({{ $m->duracion }} min) - {{ $m->genero }}</li>
            @endforeach
        </ul>
    @endif

</body>
</html>
