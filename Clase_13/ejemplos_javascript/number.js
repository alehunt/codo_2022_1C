var a = new Number('123'); // a es igual a 123 
var b = Number('123'); // b es igual a 123
alert("AUXILIO VOY A HACER MATEMATICA");
console.log("a: ", a);
console.log("b: ", b);

/************************COMPROBACIONES NUMÉRICAS********************/

// ¿Número finito?
console.log("Numero finito (42):", Number.isFinite(42)); // true
console.log("Numero finito (infinito):", Number.isFinite(Infinity)); // false, es infinito
// ¿Número entero?
console.log("Numero entero (5):", Number.isInteger(5)); // true
console.log("Numero entero (4.6):", Number.isInteger(4.6)); // false, es decimal
// ¿Número seguro?
//Un entero seguro es un entero que se puede representar exactamente como un número de doble precisión IEEE-754 (todos los enteros desde (253 - 1) a - (253 - 1))
console.log("Numero seguro (1e15):", Number.isSafeInteger(1e15)); // true
console.log("Numero seguro (1e16):", Number.isSafeInteger(1e16)); // false, es un valor no seguro
// ¿No es un número?
console.log("Not a Number (NaN):", Number.isNaN(NaN)); // true
console.log("Not a Number (5):", Number.isNaN(5)); // false, es un número

//Recuerda no hacer comprobaciones directas con NaN, sino utilizar la función Number.isNaN().

