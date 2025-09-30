
//1
function calcularEdad() {
   const fechin = document.getElementById("fecha");
   const currentDate = new Date();
   const anoActual = currentDate.getFullYear();
   const mesActual = currentDate.getMonth() + 1;
   const diaActual = currentDate.getDate();

   if (!fechin.value) {
      alert("⚠️ Primero seleccioná tu fecha de nacimiento");
      return;
   }


   let [anoNacimiento, mesNacimiento, diaNacimiento] = fechin.value.split("-").map(Number);

   let edad = anoActual - anoNacimiento;


   if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
      edad--;
   }

   alert("Tenés " + edad + " años");
}

//2
function frutas() {
   const frutas = [
      "Manzana", "Banana", "Naranja", "Uva", "Sandía",
      "Melón", "Frutilla", "Kiwi", "Mango", "Pera"
   ];

   const frutin = document.getElementById("fruta");

   if (!frutin.value) {
      alert("⚠️ Ingresa algo");
      return;
   }

   if (frutas.includes(frutin.value)) {
      alert("✅ Tenemos esa fruta");
   } else {
      alert("❌ No tenemos esa fruta");
   }
}

//3
function comprobar(){
   if (10 == "10"){
      console.log("10 == 10");
   } else{
      console.log("1 falso");
   }
   if (10 === "10"){
      console.log("10 === 10");
   } else{
      console.log("2 falso");
   }
   console.log(typeof 10.6)
   if (true == 1){
      console.log("true == 1");
   } else{
      console.log("4 falso");
   }
}

//4
function Objeto(){
   const ciudad = {
      nombre: "Buenos Aires",
      fechaFundacion: "1536-02-02",
      poblacion: 3075646,
      extension: "203 km²"
    };
    
    for (let clave in ciudad) {
      if (ciudad.hasOwnProperty(clave)) {
        console.log("Clave: " + clave);
        console.log("Valor: " + ciudad[clave]);
      }
    }
}

//5
function duplicarArray(numeros) {
   const duplicados = numeros.map(num => num * 2);
   console.log(duplicados);
 }
 
 
//6
function trianguloB(n) {
   for (let i = 1; i <= n; i++) {
     let estrellas = "*".repeat(2 * i - 1);
     let guiones = "-".repeat(n - i);
     console.log(guiones + estrellas + guiones);
   }
 }
 
//7

function filtrarNombres() {
   const input = document.getElementById("nombres").value;
 
   if (!input) {
     alert("⚠️ Ingresá al menos un nombre");
     return;
   }
 

   const lista = input.split(",").map(nombre => nombre.trim());
 
   const filtrados = lista.filter(nombre => nombre.charAt(0).toUpperCase() === "A");
 
   const resultado = document.getElementById("resultado");
   resultado.innerHTML = ""; 
 
   if (filtrados.length === 0) {
     resultado.innerHTML = "<li>No hay nombres que empiecen con A</li>";
   } else {
     filtrados.forEach(nombre => {
       const li = document.createElement("li");
       li.textContent = nombre;
       resultado.appendChild(li);
     });
   }
 }
 
//8
function reemplazarPalabra() {
   const texto = document.getElementById("texto").value;
   const palabra = document.getElementById("palabra").value;
   const reemplazo = document.getElementById("reemplazo").value;
   const resultado = document.getElementById("resultado");
 
   if (!texto || !palabra || !reemplazo) {
     alert("⚠️ Completá todos los campos");
     return;
   }
 
   const regex = new RegExp(palabra, "g");
 
   const nuevoTexto = texto.replace(regex, reemplazo);
 
   resultado.textContent = nuevoTexto;
 }
 

//9
function cortarTexto() {
   const texto = document.getElementById("texto").value;
   const numero = parseInt(document.getElementById("numero").value);
   const resultado = document.getElementById("resultado");
 
   if (!texto || isNaN(numero)) {
     alert("⚠️ Ingresá una cadena y un número válido");
     return;
   }
 
   const nuevoTexto = texto.substring(0, numero);
   resultado.textContent = nuevoTexto;
 }
 

//10
function mostrarLista() {
   const input = document.getElementById("lista").value;
   const resultado = document.getElementById("resultado");
 
   if (!input) {
     alert("⚠️ Ingresá una lista de elementos separados por coma");
     return;
   }
 
   const array = input.split(",").map(el => el.trim());
   const nuevoString = array.join(" - ");
 
   resultado.textContent = nuevoString;
} 

//11
/*function calcularLista() {
   const lista = document.getElementById("listaCompras");
   let textoLista = lista.value;
   let productos = textoLista.split(":");
   let precios = productos;

   for(let i = 0; i < productos.length; i++){
      precios[i].split(", ");
   }

   let total = 0;
   let texto = "";

   for (let i = 0; i < precios.length; i++) {
        if(precios[i].includes("0") || precios[i].includes("1") || precios[i].includes("2") || precios[i].includes("3") || precios[i].includes("4") || precios[i].includes("5") || precios[i].includes("6") || precios[i].includes("7") || precios[i].includes("8") || precios[i].includes("9")){
            texto += ""+(precios[i]);
        }
   }

   alert(texto);
}*/

function calcularLista(){
    const lista = document.getElementById("listaCompras");
    let textoLista = lista.value;

    for(let i = 0; i < 5; i++){
       for(let i = 0; i < textoLista.length; i++){
         if(!esNumero(textoLista[i])){
         textoLista = textoLista.replace(textoLista[i], "");
         }
   }
}



   let precios = textoLista.split(" ");
   let total = 0;
   for(let i = 0; i < precios.length; i++){
      total += parseFloat(precios[i]);
   }


   alert(total);
}

function esNumero(char){
   let Es = false;
   let numeros = "1234567890. ";
   for(let i = 0; i < numeros.length; i++){
      if(numeros[i] == char){
         Es = true;
      }
   }
   return Es;
}