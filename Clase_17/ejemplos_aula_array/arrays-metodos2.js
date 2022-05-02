/************** OTROS METODOS PARA ARRAYS *****************/

var frutas = ["Banana", "Naranja", "Manzana", "Mango"];
//.forEach(cb, arg): Realiza la operación definida en cb por cada elemento del array.
// document.write("FOR EACH <br>");
// frutas.forEach(mostrar);
// function mostrar(elemento, indice) {
//     document.write(indice + ": " + elemento + "<br>");
//     indice++;
// }

//.every(cb, arg): Comprueba si todos los elementos del array cumplen la condición de cb.
// document.write("<br> EVERY <br>");
// var edades = [32, 33, 16, 40];
// var edades2 = [32, 33, 20, 40];
// document.write(edades.every(compruebaEdad));//false
// document.write("<br>");
// document.write(edades2.every(compruebaEdad));//true
// function compruebaEdad(edad) {
//     return edad >= 18;
// }
// document.write("<br>");

//.some(cb, arg): Comprueba si al menos un elem. del array cumple la condición de cb.
// document.write("<br> SOME <br>");
// var nombres = ["Juan", "Mateo", "Camilo", "Lucas"];
// var nombres2 = ["Juan", "Ana", "Luisa", "Mateo", "Camilo"];
// document.write(nombres.some(compruebaNombre));//true
// document.write("<br>");
// document.write(nombres2.some(compruebaNombre));//false
// function compruebaNombre(nombre) {
//     return nombre == "Lucas";
// }
// document.write("<br>");

// .map(cb, arg): Construye un array con lo que devuelve cb por cada elemento del array.
// document.write("<br> MAP <br>");
// var numeros = [4, 9, 16, 25];
// document.write(numeros, "<br>");
// document.write("<br>");
// document.write(numeros.map(raizCuadrada));
// document.write("<br>");
// document.write(numeros.map(potencia));
// document.write("<br>");
// document.write(numeros.map(dobles));
// document.write("<br>");
// function raizCuadrada(numero) {
//     return Math.sqrt(numero);
// }
// function potencia(numero) {
//     return numero*numero;
// }
// function dobles(numero) {
//     return numero+numero;
// }

//.filter(cb, arg): Construye un array con los elementos que cumplen el filtro de cb.
// document.write("<br> FILTER <br>");
// var personas = ["Ana", "Pablo", "Pedro", "Paola", "Horacio"];
// document.write(personas.filter(personasComiezaEnP));
// document.write("<br>");
// function personasComiezaEnP(persona) {
//     return persona[0] == "P";
// }

//.findIndex(cb, arg): Devuelve la posición del elemento que cumple la condición de cb.
// document.write("<br> FIND INDEX <br>");
// var edades3 = [30, 19, 10, 28];
// document.write(edades3.findIndex(compruebaMenorEdad));
// document.write("<br>");
// function compruebaMenorEdad(edad) {
//     if (edad < 18) {
//         return edad;
//     }
// }

//.find(cb, arg): Devuelve el elemento que cumple la condición de cb.
// document.write("<br> FIND <br>");
// var edades4 = [5, 30, 19, 10, 28];
// document.write(edades4.find(compruebaMenorEdad));
// document.write("<br>");
// function compruebaMenorEdad(edad) {
//     if (edad < 18) {
//         return edad;
//     }
// }

//.reduce(cb, arg): Ejecuta cb con cada elemento (de izq a der), acumulando el resultado.
//.reduceRight(cb, arg): Idem al anterior, pero en orden de derecha a izquierda.
document.write("<br> REDUCE y REDUCE RIGHT <br>");
var precios = [110, 10, 25, 50, 15];
document.write(precios.reduce(restaPrecios));
document.write("<br>");
document.write(precios.reduceRight(restaPrecios));
document.write("<br>");
function restaPrecios(total, p) {
    return total - p;
}






