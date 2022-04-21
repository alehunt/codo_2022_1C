console.log("Abs: ", Math.abs(-5)); // 5
console.log("Sign: ", Math.sign(-5)); // -1
console.log("Exp: ", Math.exp(1)); // e, o sea, 2.718281828459045
console.log("Expm1: ", Math.expm1(1)); // 1.718281828459045
console.log("Max: ", Math.max(1, 40, 5, 15)); // 40
console.log("Min: ", Math.min(5, 10, -2, 0)); // -2
console.log("Pow: ", Math.pow(2, 10)); // 1024
console.log("Sqrt: ", Math.sqrt(2)); // 1.4142135623730951
console.log("Cbrt: ", Math.cbrt(2)); // 1.2599210498948732
console.log("Imul: ", Math.imul(0xffffffff, 7)); // -7

// Ejemplo de clz32 (count leading zeros)
const x = 1;
console.log("clz32: ", "0".repeat(Math.clz32(x)) + x.toString(2));
// Devuelve "00000000000000000000000000000001"

