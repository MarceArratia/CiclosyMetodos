function init(){
    do{
        var option = parseInt(prompt("Ingrese un Numero del 1 al 5:"));
        switch(option){
            case 1: optionUno();
                break;
            case 2: optionDos();
                break;
            case 3: optionTres();
                break;
            case 4: optionCuatro();
                break;
            case 5: optionCinco();
                break;
            default: alert("Ingrese un numero que corresponda");
                break; 
        }
    }while(option < 0 || option > 5);
}

//Intrucciones
//1. Solicitar al usuario un número entre 1 al 100. 
function optionUno(){
    var number;
    do{
        number = parseInt(prompt("Ingrese un Numero del 1 al 100:"));
        if(number > 0 && number <= 100){
            for(let i = 0; i <= number; i++){
                console.log(i);
            }
        }
    }while(number < 1 || number > 100);
}

//2. Realizarle al usuario la pregunta “¿De qué color es el caballo blanco de Napoleón?”.
function optionDos(){
    var white;
    do {
        white = prompt("De que Color es el Caballo Blanco de Napoleon?");
        if(white === "blanco" || white === "Blanco"){
            document.write(`<p><center>"Tu respuesta es correcta"</center></p>`);
           
        }
    } while (white != "blanco" && white != "Blanco");   
}

//3. En este ejercicio deberá calcular el promedio de notas del usuario. 
function optionTres(){
    var number=[];
    var promedio = 0;
    number[0] = parseInt(prompt("Ingresar el promedio de notas de Matematica:"));
    number[1] = parseInt(prompt("Ingresar el promedio de notas de Fisica:"));
    number[2] = parseInt(prompt("Ingresar el promedio de notas de Ciencias:"));
    for(nota of number){
        promedio += nota; 
    }
    alert(Math.round(promedio/number.length));
}

//4. Solicite al usuario escribir el nombre de 3 frutas. 
function optionCuatro(){
    var fruit=[];
    for(let i = 0; i < 3; i++){
        
fruit[i] = prompt("Ingresar el Nombre de una fruta:");
    }
    for(let i = 0; i < 3; i++){
        if(fruit[i] != "manzana" && fruit[i] != "Manzana"){
            document.write(`<p>Fruta: </p>` + fruit[i]);
           
        }
    }
}








