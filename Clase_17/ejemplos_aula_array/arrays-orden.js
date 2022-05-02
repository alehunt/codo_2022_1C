/************** METODOS DE ORDENACION PARA ARRAYS *****************/

// var frutas = ["Banana", "Naranja", "Manzana", "Mango", "Kiwi", "Pera"];
// document.write("ARRAY ORIGINAL:", "<br>");
// document.write(frutas, "<br>");
// document.write("<br>", "ARRAY INVERTIDO:", "<br>");
// document.write(frutas.reverse());
// document.write("<br>");
// document.write("<br>", "ARRAY ORDENADO:", "<br>");
// document.write(frutas.sort());
// document.write("<br>");
// document.write("<br>", "ARRAY ORDENADO (Z-A):", "<br>");
// document.write(frutas.reverse(frutas.sort()));
// document.write("<br>");

// Función de comparación para ordenación natural
const numeros = [1, 8, 2, 32, 9, 7, 4];

const asc = function (a, b) {
        return a - b;
};
const desc = function (a, b) {
        return b - a;
};
document.write(numeros);
document.write("<br>");
document.write(numeros.sort(asc));
document.write("<br>");
document.write(numeros.sort(desc));
document.write("<br>");
    
