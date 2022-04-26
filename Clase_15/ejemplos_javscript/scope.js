/***********************SCOPE*********************/

// // aca no puedo usar la variable carName
// console.log(carName);
// function myFunction() {
//         var carName = "Volvo";
//         // aca si puedo usar la variable carName
//         //console.log(carName);
//     }
// myFunction();
// console.log(carName); // aca no puedo usar la variable carName

//Segundo ejemplo, pero con una variable a nivel global
// var carName2 = "Fiat";
// // aqui si puedo usar carName2
// console.log(carName2);

// function myFunction2() {
//     //aqui tambien puedo usar la variable carName2
//     console.log(carName2, "desde la función");
// }

//myFunction2();

//Tercer ejemplo: variable automáticamente global

// myFunction3();
// // aquí puede se puede usar carName3
// console.log(carName3);
// function myFunction3() {
//    carName3 = "Renault";  // variable no declarada
//    console.log(carName3, "desde adentro de la función");
// }

//let vs var
var a = 5;
var b = 10;
var c = "5";
if (a === c) {
  var a = 4; // El alcance es dentro del bloque if
  b = 15; // El alcance es global, sobreescribe a 10 ¿qué pasa si es let?

  console.log(a);  // 4, por alcance a nivel de bloque
  console.log(b);  // 1, por alcance global
}

console.log(a); // 5, por alcance global
console.log(b); // 1, por alcance global
