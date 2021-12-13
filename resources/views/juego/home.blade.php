@extends('layouts.plantilla')

@section('title','Home')

@section('content')

    <div class="container">

        <div class="row">

            <div class="col-12">
                <center>
                    <h1>Bienvenido a la sala de juego</h1>
                </center>
            </div>

        </div>

        <div class="row">

            <div class="col-md-3 p-5 offset-md-2">

                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">Nuevo Juego</h5>
                    <p class="card-text">Inicia un nuevo juego de forma rapida</p>
                    <a href="http://localhost/TIC_TAC_TOE/public/juegos/triquy" class="btn btn-primary">Iniciar Juego</a>
                    </div>
                </div>

            </div>

            <div class="col-md-3 p-5 offset-md-1">

                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">Unirse a partida</h5>
                    <p class="card-text">Unete a una partida de forma rapida</p>
                    <a href="#" class="btn btn-primary">Unirse a una partia</a>
                    </div>
                </div>

            </div>

        </div>
    </div>

@endsection



