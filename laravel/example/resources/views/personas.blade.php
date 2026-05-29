<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jarot</title>
</head>
<body>
    <div style="max-w: 600px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px;">
        <h2>Lista de Personas Registradas</h2>

        @if($personas->isEmpty())
            <p>No hay registros en phpMyAdmin todavía.</p>
        @else
            <table border="1" style="width: 100%; border-collapse: collapse; text-align: left;">
                <thead>
                    <tr style="background-color: #333; color: white;">
                        <th style="padding: 10px;">ID</th>
                        <th style="padding: 10px;">Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($personas as $persona)
                        <tr>
                            <td style="padding: 10px;">{{ $persona->id }}</td>
                            <td style="padding: 10px;">{{ $persona->nombre }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        @endif
    </div>
</body>
</html>
