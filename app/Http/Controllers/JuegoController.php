<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JuegoController extends Controller
{
    public function index(){

    }

    public function nuevaPartida($juego){
        return view('juego.juego',compact('juego'));
    }

    public function unirsePartida(){

    }
}
