

var numeroLoco = -1;
debugger;
function multiplicar(a,b){
    let mensaje = 'función multiplicar:';
    if (a < 0)    
    {        
        retorno = "Escribiste cualquiera";    
    }
    else
    {
        retorno = a * a * b;
    }

    mensaje= "Estoy re loco";
    return retorno;

}

var resultado = multiplicar(numeroLoco, 3);
debugger;
alert(resultado);
alert(numeroLoco);
//No está definida si esta con el let adentro
alert(mensaje);

// function sumar100(a){
//     return a + 100;
// }

// let sumar100 = a => a + 100;
// alert(sumar100(3));

// function sumar (a, b) {
//     let mensaje = 'función suma:';
//     return mensaje + (a+b);
// }

// alert(sumar(2,3))

// let sumarA = (a,b) => {
//     let mensaje = 'arrow suma:';
//     return mensaje + (a+b);
// }

// alert(sumarA(2,3))



