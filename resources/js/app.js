require('./bootstrap');

    let iniJuego=false;
    let intento=9;
    let jugador2;
    let jugador1;
    let puntage1=0;
    let puntage2=0;
    let matriz=[
        [0],[0],[0],
        [0],[0],[0],
        [0],[0],[0]
    ];

    $(document).ready(function(){
        jugador1=true;
        if(iniJuego ===false){
            $("#inicio1").html("<b>Inicia jugador 1</b>");
            $("#inicio1").css("color","red");
            $("#inicio1").css("font-size","20px");
           
            ocultar(iniJuego);
        }
        
    });

    function ocultar(iniJuego){
        setTimeout(function(){
            if( iniJuego===false){
                
                $("#inicio1").css("display","none");
                iniJuego=true;

            }else{
                $("#inicio2").css("display","none");
                iniJuego=false;
            }
        },2000);
    }

    $(document).on("click","#reiniciar",function(){

        intento=9;
        
        if(iniJuego ===false){
             jugador2 = true;
             jugador1=false;
            $("#inicio2").css("display","");
            $("#inicio2").html("<b>Inicia jugador 2</b>");
            $("#inicio2").css("color","red");
            $("#inicio2").css("font-size","20px");
            iniJuego=true;
            ocultar(iniJuego);
            
        }else{
            jugador2 = false;
            jugador1=true;
            $("#inicio1").css("display","");
            $("#inicio1").html("<b>Inicia jugador 1</b>");
            $("#inicio1").css("color","red");
            $("#inicio1").css("font-size","20px");
            iniJuego=false;
            ocultar(iniJuego);
        }

        $("#1").html("");
        $("#1").removeAttr("disabled");
        
        $("#2").html("");
        $("#2").removeAttr("disabled");

        $("#3").html("");
        $("#3").removeAttr("disabled");

        $("#4").html("");
        $("#4").removeAttr("disabled");

        $("#5").html("");
        $("#5").removeAttr("disabled");

        $("#6").html("");
        $("#6").removeAttr("disabled");

        $("#7").html("");
        $("#7").removeAttr("disabled");

        $("#8").html("");
        $("#8").removeAttr("disabled");

        $("#9").html("");
        $("#9").removeAttr("disabled");

        $("#reiniciar").css("display","none");

        matriz=[
            [0],[0],[0],
            [0],[0],[0],
            [0],[0],[0]
        ];



    });

   
    $(document).on("click","#1",function(){
        if(jugador1){

            $("#1").html("X");
            $("#1").css("color","yellow");
            $("#1").css("font-size","36px");
            matriz[0][0]="X";
            jugador1=false;
        }else{
            
            $("#1").html("O");
            $("#1").css("color","black");
            $("#1").css("font-size","36px");
            matriz[0][0]="O";
            jugador1=true;
        }
        $("#1").prop("disabled","disabled");
        validar(matriz,jugador1);
        console.log(matriz);
        
        
    });

    $(document).on("click","#2",function(){
     
        if(jugador1){

            $("#2").html("X");
            $("#2").css("color","yellow");
            $("#2").css("font-size","36px");
            matriz[0][1]="X";
            jugador1=false;
        }else{
            
            $("#2").html("O");
            $("#2").css("color","black");
            $("#2").css("font-size","36px");
            matriz[0][1]="O";
            jugador1=true;
        }
        $("#2").prop("disabled","disabled");
        validar(matriz,jugador1);
        console.log(matriz);
        
        
    });

    $(document).on("click","#3",function(){

        if(jugador1){

            $("#3").html("X");
            $("#3").css("color","yellow");
            $("#3").css("font-size","36px");
            matriz[0][2]="X";
            jugador1=false;
        }else{
            
            $("#3").html("O");
            $("#3").css("color","black");
            $("#3").css("font-size","36px");
            matriz[0][2]="O";
            jugador1=true;
        }
        $("#3").prop("disabled","disabled");
        validar(matriz,jugador1);
        console.log(matriz);
        
        
    });

    
    $(document).on("click","#4",function(){

        if(jugador1){

            $("#4").html("X");
            $("#4").css("color","yellow");
            $("#4").css("font-size","36px");
            matriz[1][0]="X";
            jugador1=false;
        }else{
            
            $("#4").html("O");
            $("#4").css("color","black");
            $("#4").css("font-size","36px");
            matriz[1][0]="O";
            jugador1=true;
        }
        $("#4").prop("disabled","disabled");
        validar(matriz,jugador1);
        console.log(matriz);
        
        
    });

    
    $(document).on("click","#5",function(){

        if(jugador1){

            $("#5").html("X");
            $("#5").css("color","yellow");
            $("#5").css("font-size","36px");
            matriz[1][1]="X";
            jugador1=false;
        }else{
            
            $("#5").html("O");
            $("#5").css("color","black");
            $("#5").css("font-size","36px");
            matriz[1][1]="O";
            jugador1=true;
        }
        $("#5").prop("disabled","disabled");
        validar(matriz,jugador1);
        console.log(matriz);
        
        
    });

    
    $(document).on("click","#6",function(){

        if(jugador1){

            $("#6").html("X");
            $("#6").css("color","yellow");
            $("#6").css("font-size","36px");
            matriz[1][2]="X";
            jugador1=false;
        }else{
            
            $("#6").html("O");
            $("#6").css("color","black");
            $("#6").css("font-size","36px");
            matriz[1][2]="O";
            jugador1=true;
        }
        $("#6").prop("disabled","disabled");
        validar(matriz,jugador1);
        console.log(matriz);
        
        
    });

    
    $(document).on("click","#7",function(){

        if(jugador1){

            $("#7").html("X");
            $("#7").css("color","yellow");
            $("#7").css("font-size","36px");
            matriz[2][0]="X";
            jugador1=false;
        }else{
            
            $("#7").html("O");
            $("#7").css("color","black");
            $("#7").css("font-size","36px");
            matriz[2][0]="O";
            jugador1=true;
        }
        $("#7").prop("disabled","disabled");
        validar(matriz,jugador1);
        console.log(matriz);
        
        
    });


    
    $(document).on("click","#8",function(){

        if(jugador1){

            $("#8").html("X");
            $("#8").css("color","yellow");
            $("#8").css("font-size","36px");
            matriz[2][1]="X";
            jugador1=false;
        }else{
            
            $("#8").html("O");
            $("#8").css("color","black");
            $("#8").css("font-size","36px");
            matriz[2][1]="O";
            jugador1=true;
        }
        $("#8").prop("disabled","disabled");
        validar(matriz,jugador1);
        console.log(matriz);
        
        
    });


    
    $(document).on("click","#9",function(){

        if(jugador1){

            $("#9").html("X");
            $("#9").css("color","yellow");
            $("#9").css("font-size","36px");
            matriz[2][2]="X";
            jugador1=false;
        }else{
            
            $("#9").html("O");
            $("#9").css("color","black");
            $("#9").css("font-size","36px");
            matriz[2][2]="O";
            jugador1=true;
        }
        $("#9").prop("disabled","disabled");
        validar(matriz,jugador1);
        console.log(matriz);
        
        
    });


    function validar(matriz,jugador1){
        
        let simbolo="";
        intento--;

        if(jugador1){
            simbolo="X";
        }else{
            simbolo="O";
        }

        if(simbolo===matriz[0][0] && simbolo===matriz[0][1] && simbolo===matriz[0][2]){
           
            if(simbolo==="X"){
                puntage1++;
                $("#puntage1").html("Puntage "+puntage1);
                Swal.fire({
                    title: '!Ganador Jugador 1!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })

                  $("#reiniciar").css("display","block");
            }else if(simbolo==="O"){
            
                puntage2++;
                $("#puntage2").html("Puntage "+puntage2);
                Swal.fire({
                    title: '!Ganador Jugador 2!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                  $("#reiniciar").css("display","block");
            }
        }

        else if(simbolo===matriz[1][0] && simbolo===matriz[1][1] && simbolo===matriz[1][2]){
           
            if(simbolo==="X"){
              puntage1++;
              $("#puntage1").html("Puntage "+puntage1);
                Swal.fire({
                    title: '!Ganador Jugador 1!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })

                  $("#reiniciar").css("display","block");
            }else if(simbolo==="O"){
                
                puntage2++;
                $("#puntage2").html("Puntage "+puntage2);
                Swal.fire({
                    title: '!Ganador Jugador 2!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                  $("#reiniciar").css("display","block");
            }
        }


        else if(simbolo===matriz[2][0] && simbolo===matriz[2][1] && simbolo===matriz[2][2]){
           
            if(simbolo==="X"){
              puntage1++;
              $("#puntage1").html("Puntage "+puntage1);
                Swal.fire({
                    title: '!Ganador Jugador 1!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })

                  $("#reiniciar").css("display","block");
            }else if(simbolo==="O"){
                
                puntage2++;
                $("#puntage2").html("Puntage "+puntage2);
                Swal.fire({
                    title: '!Ganador Jugador 2!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                  $("#reiniciar").css("display","block");
            }
        }

        else if(simbolo===matriz[0][0] && simbolo===matriz[1][0] && simbolo===matriz[2][0]){
           
            if(simbolo==="X"){
              puntage1++;
              $("#puntage1").html("Puntage "+puntage1);
                Swal.fire({
                    title: '!Ganador Jugador 1!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })

                  $("#reiniciar").css("display","block");
            }else if(simbolo==="O"){
                
                puntage2++;
                $("#puntage2").html("Puntage "+puntage2);
                Swal.fire({
                    title: '!Ganador Jugador 2!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                  $("#reiniciar").css("display","block");
            }
        }


        else if(simbolo===matriz[0][1] && simbolo===matriz[1][1] && simbolo===matriz[2][1]){
           
            if(simbolo==="X"){
              puntage1++;
              $("#puntage1").html("Puntage "+puntage1);
                Swal.fire({
                    title: '!Ganador Jugador 1!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })

                  $("#reiniciar").css("display","block");
            }else if(simbolo==="O"){
                
                puntage2++;
                $("#puntage2").html("Puntage "+puntage1);
                Swal.fire({
                    title: '!Ganador Jugador 2!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                  $("#reiniciar").css("display","block");
            }
        }


        else if(simbolo===matriz[0][2] && simbolo===matriz[1][2] && simbolo===matriz[2][2]){
           
            if(simbolo==="X"){
              puntage1++;
              $("#puntage1").html("Puntage "+puntage1);
                Swal.fire({
                    title: '!Ganador Jugador 1!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })

                  $("#reiniciar").css("display","block");
            }else if(simbolo==="O"){
                ;
                puntage2++;
                $("#puntage2 ").html("Puntage"+puntage2);
                Swal.fire({
                    title: '!Ganador Jugador 2!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                  $("#reiniciar").css("display","block");
            }
        }


        else if(simbolo===matriz[0][0] && simbolo===matriz[1][1] && simbolo===matriz[2][2]){
           
            if(simbolo==="X"){
              puntage1++;
              $("#puntage1").html("Puntage "+puntage1);
                Swal.fire({
                    title: '!Ganador Jugador 1!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })

                  $("#reiniciar").css("display","block");
            }else if(simbolo==="O"){
                
                puntage2++;
                $("#puntage2").html("Puntage "+puntage2);
                Swal.fire({
                    title: '!Ganador Jugador 2!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                  $("#reiniciar").css("display","block");
            }
        }


        else if(simbolo===matriz[0][2] && simbolo===matriz[1][1] && simbolo===matriz[2][0]){
           
            if(simbolo==="X"){
              puntage1++;
              $("#puntage1").html("Puntage "+puntage1);
                Swal.fire({
                    title: '!Ganador Jugador 1!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })

                  $("#reiniciar").css("display","block");
            }else if(simbolo==="O"){
               
                puntage2++;
                $("#puntage2").html("Puntage "+puntage2);
                Swal.fire({
                    title: '!Ganador Jugador 2!',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                  $("#reiniciar").css("display","block");
            }
        }
      
        else if(intento===0){
            Swal.fire({
                title: '!Empate!',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
              $("#reiniciar").css("display","block");
        }
    }

 
