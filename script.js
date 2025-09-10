const fechin = document.getElementById("fecha");
let anoActual = currentDate.getFullYear();
let mesActual = currentDate.getMonth() + 1;
let diaActual = currentDate.getDate(); 

function calcularEdad(){
   let resultado = fechin.value;
   let anoNacimiento = parseInt(resultado[0] + resultado[1] + resultado[2] + resultado[3]);
   let mesNacimiento = parseInt(resultado[5] + resultado[6]);
   let diaNacimiento = parseInt(resultado[8] + resultado[9]);
   
   console.log("Tenes "+(anoActual - anoNacimiento)+" años");
}

function verificarFecha(){
    
}