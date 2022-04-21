console.log(1+2); //Cálculo desde la consola
console.log("1+2"); //Literal
console.log("------------------------------------");
console.log(1+2); //3
console.log(1+2/3); //1.6666
console.log((1+2)/3); //1
/*Se respeta las mismas reglas en cuanto al uso de paréntesis y
jerarquía de signos que en matemática: suma y resta separan términos,
multiplicación y división unen términos.*/

var num1 = 10;
var num2 = 2;
console.log("Suma: ", num1 + num2); //12
console.log("Resta: ", num1 - num2); //8
console.log("Multiplicación: ", num1 * num2); //20
console.log("Exponenciación: ", num1 ** num2); //100
console.log("División: ", num1 / num2); //5
console.log("Módulo: resto de dividir: ", num1 % num2); //0
console.log("Incremento: ", ++num1); //11
console.log("Decremento: ", --num1); // ¿por qué 10 y no 9?
console.log("Decremento: ", --num2); //1