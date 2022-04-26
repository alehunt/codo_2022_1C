function mostrarAlertaJubilado(){
    alert("Sos un jubilado pobre");
}

function felicitar(){
    alert("Sos joven pero igual pobre");
}

//let variableEjemplo = 20;

//Declaración de la función
///pEdad : parametro number
function esJubilado(pEdad){
    if (pEdad == undefined)
        console.warn("Me vino la edad undefined");
    /*
    UN montonazo de código
    */
    //variableEjemplo = 100;
    let respuesta = pEdad > 60;
    //mas codigo
    return respuesta;
}

// //Llamado a la función
// esJubilado(30);
// esJubilado(variableEjemplo);
// alert(variableEjemplo);



