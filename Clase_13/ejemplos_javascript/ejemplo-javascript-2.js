// Comentarios cortos de una sola línea. Suelen explicar la línea siguiente.
var a = 1;

var b = 45; // También se utilizan al final de una línea.
var suma=a+b;

/* Por otro lado, existen los comentarios múltiples de varias líneas consecutivas.
Suelen utilizarse para explicaciones largas que requieren bastante
espacio porque se mencionan gran cantidad de cosas :-) */
console.log("La suma entre a y b es:"+a+b);
console.log("La suma entre a y b es:"+(a+b));
console.log("La suma entre a y b es:"+suma);

var nombre="Ana";
console.log("El nombre es:"+ nombre); 

// alert ("Probar todos los ejemplos comentados /*...*/")

//alert("A practicar Javascript"); //Ejemplo de la funcion alert()

nombre=prompt("Ingrese su nombre:"); //  funcion prompt lee por pantalla un texto
console.log("Su nombre es:"+ nombre);

var x=prompt("ingrese un numero x:"); //prompt lee por pantalla un texto
var y=prompt("ingrese un numero y:"); //prompt lee por pantalla un texto
console.log("La suma entre x y y es:"+(x+y) );
console.log("La suma entre x y y es:"+(Number(x)+Number(y) ));

// ejemplos de las funciones parseInt y parseFloat
console.log(parseInt("F", 16));
console.log(parseInt("15"));
console.log(parseFloat("3.14")+5);

// una forma de modificar el html desde java script
document.write("<h1>Bienvenido al curso FullStack Codo a Codo</h1>");
document.write("<p>Python</p>");

console.log("holamundo",5+18);
console.info("se utiliza para mensajes de informacion") ;
console.warn("Muestra información de advertencia.Aparece en amarillo.")  ;
console.error("Muestra información de error. Aparece en rojo.") ;
// console.clear();

