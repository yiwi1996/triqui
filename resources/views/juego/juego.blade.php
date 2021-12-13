@extends('layouts.plantilla')

@section('title','Home')

@section('content')

<div class="container">
    
    <div class="row">
        
        <div class="header">
            <img src="http://35.166.226.205/images/titletictactoe.gif" alt="" id="imag">
        </div>
        
        
        
        <div  class=" row p-2 text-white" id="cuerpo"  id="user">
            <div class="card col-3 user1">
                <div class="card-body user2">
                    <i class="fas fa-user-alt fa-4x" ></i>
                    <h5 class="card-title">Jugador 1</h5>
                    <p id="puntage1">Puntage 0</p>
                    <p class="card-text" id="inicio1"></p>
                </div>
            </div>
            
            <div class="col-6 tabla" >
                <table>
                    <tbody>
                        <tr class="triquy">
                            <td ><button type="button" id="1"></button></td>
                            <td ><button type="button" id="2"></button></td>
                            <td ><button type="button" id="3"></button></td>
                            <input type="number" id="jugador_1"  value="1">
                        </tr> 
                        <tr class="triquy">
                            <td ><button type="button" id="4"></button></td>
                            <td ><button type="button" id="5"></button></td>
                            <td ><button type="button" id="6"></button></td>
                        </tr> 
                        <tr class="triquy">
                            <td ><button type="button" id="7"></button></td>
                            <td ><button type="button" id="8"></button></td>
                            <td ><button type="button" id="9"></button></td>
                        </tr>                         
                    </tbody>
                    
                </table>
            </div>
            
            <div class="card col-3 user1">
                <div class="card-body user2">
                    <i class="fas fa-user-alt fa-4x" ></i>
                    <h5 class="card-title">Jugador 2</h5>
                    <p id="puntage2">Puntage 0</p>
                    <p class="card-text"  id="inicio2"></p>
                    <input type="number" id="jugador_2"  value="2">
                </div>
            </div>
        </div>
        
        <div id="boton">
            <button type="button"  class="btn btn-success" id="reiniciar">Reiniciar Partida</button>
        </div>   
    </div>
</div>

@endsection



