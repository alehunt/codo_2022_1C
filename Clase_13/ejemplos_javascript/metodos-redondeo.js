// Redondeo natural, el más cercano
console.log("Round (natural): ", Math.round(3.75)); // 4
console.log("Round (natural): ", Math.round(3.25)); // 3

// Redondeo superior (el más alto)
console.log("Ceil (superior): ", Math.ceil(3.75)); // 4
console.log("Ceil (inferior): ", Math.ceil(3.25)); // 4

// Redondeo inferior (el más bajo)
console.log("Floor (inferior): ", Math.floor(3.75)); // 3
console.log("Floor (inferior): ", Math.floor(3.25)); // 3

// Redondeo con precisión
console.log("Round (natural): ", Math.round(3.123456789)); // 3
console.log("Fround (con precisión): ", Math.fround(3.123456789)); // 3.1234567165374756

// Truncado (sólo parte entera)
console.log("Trunc (truncado): ", Math.trunc(3.75)); // 3
console.log("Round (natural): ", Math.round(-3.75)); // -4
console.log("Trunc (truncado negativo): ", Math.trunc(-3.75)); // -3

//Conservando la parte decimal
var numero = 5.872;
var decimal = numero - Math.trunc(numero);
console.log("Parte decimal: ", decimal);

