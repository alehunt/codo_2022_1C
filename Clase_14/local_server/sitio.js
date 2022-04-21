let diaIngresado = prompt("Ingrese el día del mes: ");
let diaIngresadoNumero = parseInt(diaIngresado);

if (diaIngresadoNumero > 10) {
    
    document.write("<h1> No llego a fin de mes </h1>");
    //alert("No llego a fin de mes");
}
else if (diaIngresadoNumero < 0) {
    document.write("Ingresaste fruta");
    //alert("Creo que llego");
}
else {
    
    document.write("Tengo la esperanza de que llego a fin de mes");
}

for (let index = 0; index < 5; index++) {
    console.log(index);
}

let valorDeVerdad = false;

while (valorDeVerdad){
    console.log("Es true");

    let numero = prompt("Ingrese un numero");
    let numeroIngresado = parseInt(numero);

    if (numeroIngresado == 5){
        valorDeVerdad = false;
    }
}

do {
    console.log("Es true");

    let numero = prompt("Ingrese un numero");
    let numeroIngresado = parseInt(numero);

    if (numeroIngresado == 5){
        valorDeVerdad = false;
    }

} while (valorDeVerdad)

//NO es correcto hacerlo así
// let  index = 0;
// while (index < 5){
//     console.log(index);
//     index++;
// }








console.log("Ejecute todo el script");



