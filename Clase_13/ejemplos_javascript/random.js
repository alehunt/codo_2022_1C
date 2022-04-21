// Obtenemos un número al azar entre [0, 1) con 16 decimales
let x = Math.random();
console.log(x);
// Multiplicamos dicho número por el valor máximo que buscamos (5)
x = x * 5;
console.log(x);
// Redondeamos inferiormente, quedándonos sólo con la parte entera
x = Math.floor(x);
console.log(x);
