function suma(a,b){
    return a+b;
   }

var a=Number(prompt("ingrese un numero a:"));
var b=Number(prompt("ingrese un numero b:"));
console.log("la suma entre " + a + " y " + b + " es: " + suma(a,b));  //  la suma entre 12 y 21 es: 33
console.log(`la suma entre ${a} y ${b} es: ${suma(a,b)}`);          //  la suma entre 12 y 21 es: 33
