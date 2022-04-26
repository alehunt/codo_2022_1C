/************ FUNCIONES DE 1 PARAMETRO ***************/

// // Declaración
// function tablaMultiplicar(hasta) {
//       for (var i = 1; i <= hasta; i++)
//         console.log("1 x", i, "=", 1 * i);
// }
// //Ejecución
// tablaMultiplicar(4);

//¿Cómo haríamos para armar la tabla de multiplicar de un número dado por el usuario?

// // Declaración
// function saludarDos(miNombre){
//     console.log("Hola " + miNombre); //Contenido de la función
// }

// //Ejecución
// saludarDos("Juan Pablo"); //Parámetro fijo
// var nombre= prompt("Ingrese su nombre"); //Pedimos valores
// saludarDos(nombre); //Parámetro variable

/************ FUNCIONES DE MÁS DE 1 PARAMETRO (MÚLTIPLES) ***************/

// // Declaración
// function tablaMultiplicar(tabla, hasta) {//¿qué pasa si doy vuelta los parámetros?
//       for (var i = 1; i <= hasta; i++)
//         console.log(tabla + " x " + i + " = ", tabla * i);
// }

// //Ejecución
// tablaMultiplicar(1, 10); // Tabla del 1, calcula desde el 1 hasta el 10
// tablaMultiplicar(5, 10); // Tabla del 5, calcula desde el 1 hasta el 10

// // Declaración
// function mayoriaEdad(miApellido, miNombre, miEdad){
//     console.log("Apellido y nombre: " + miApellido + ", " + miNombre);
//     if (miEdad >= 18) {
//         console.log("Es mayor de edad " + "(" + miEdad + ")");}
//         else{
//         console.log("No es mayor de edad " + "(" + miEdad + ")");}
//     }

// //Ejecución
// var ape= prompt("Ingrese su apellido");
// var nom= prompt("Ingrese su nombre");
// var edad= prompt("Ingrese su edad");
// mayoriaEdad(ape, nom, edad);

/************ OTROS EJEMPLOS: DEVOLUCIÓN DE VALORES ***************/

// // Declaración
// function sumar(a, b) {
//       return a + b; // Devolvemos la suma de a y b al exterior de la función
// }

// // Ejecución
// var a = 5, b = 5;
// var resultado = sumar(a, b); // Se guarda 10 en la variable resultado
// console.log("La suma entre "+ a +" y "+ b +" es: "+ resultado);

    
// function sumar(num1, num2){
//     var suma = num1 + num2;
//     console.log("La suma es " + suma);
// }
// sumar(2,5);

// function sumarDos(num1, num2){
//     var suma = num1 + num2;
//     return suma;
// }
// n1 = 2;
// n2 = 3;
// var resultado = sumarDos(n1, n2);
// console.log("El resultado es: " + resultado);

// var suma = function sumarTres(numero1, numero2) {
//     return numero1 + numero2;
// }
// console.log(suma(40, 15));

var numeroMaximo = function (valor1, valor2) {
    if (valor1 > valor2) {
        return valor1;
    }
    return valor2;
}

var resultado = numeroMaximo(2, 3);
var v1 = parseInt(prompt("Ingrese un numero entero"));
var v2 = parseInt(prompt("Ingrese otro numero entero"));
console.log("El numero maximo es:", numeroMaximo(v1,v2));