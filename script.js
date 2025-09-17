
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






//11
function calcularLista() {
   const lista = document.getElementById("listaCompras");
   let textoLista = lista.value;
   let productos = textoLista.split(":");
   let precios = productos.map(item => item.split(","));

   let total = 0;

   for (let i = 0; i < precios.length; i++) {
        if(precios[i].includes("0") || precios[i].includes("1") || precios[i].includes("2") || precios[i].includes("3") || precios[i].includes("4") || precios[i].includes("5") || precios[i].includes("6") || precios[i].includes("7") || precios[i].includes("8") || precios[i].includes("9")){
            total += parseInt(precios[i]);
        }
   }

   alert(total);
}