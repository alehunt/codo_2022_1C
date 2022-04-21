console.log("parseInt (42)", Number.parseInt("42")); // 42
console.log("parseInt (42$)", Number.parseInt("42$")); // 42
console.log("parseInt (Num. 42)", Number.parseInt("Num. 42")); // NaN
console.log("parseInt (A)", Number.parseInt("A")); // NaN

console.log("parseInt (11101, 2 (binario))", Number.parseInt("11101", 2)); // 29 en binario
console.log("parseInt (31, 8 (octal))", Number.parseInt("31", 8)); // 25 en octal
console.log("parseInt (FF, 16 (hexadecimall))", Number.parseInt("FF", 16)); // 255 en hexadecimal


