
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

 





//11
function calcularLista() {
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
}