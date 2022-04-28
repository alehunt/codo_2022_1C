/******************* STRINGS - MÉTODOS *******************/
var cad= "hola como estas";
document.write(cad);
document.write("<br> <br>");

// .charAt(pos): Devuelve el carácter en la posición pos de la variable.
// document.write("CHARAT <br>");
// document.write(cad.charAt(0)); // devuelve "h"
// document.write("<br>");
// var pos1= cad[1]; //devuelve o
// var pos2= cad[20]; //indefinido
// document.write(pos1); //devuelve o
// document.write("<br>");
// document.write(pos2); //indefinido
// document.write("<br> <br>");

//.concat(str1, str2...): Devuelve el texto de la variable unido a str1, a str2...
// document.write("CONCAT <br>");
// document.write(cad.concat(". ¿todo bien?", " más texto")); 
// document.write("<br> <br>");

//.indexOf(str): Devuelve la primera posición del texto str.
//.indexOf(str, from): Idem al anterior, partiendo desde la posición from.
//.lastIndexOf(str, from): Idem al anterior, pero devuelve la última posición.
// document.write("INDEXOF <br>");
// document.write(cad.indexOf("a")); // 3
// document.write("<br>");
// document.write(cad.indexOf("a",4)); //13
// document.write("<br> <br>");
// document.write("LASTINDEXOF <br>");
// document.write(cad.lastIndexOf("o")); //8
// document.write("<br>");
// document.write(cad.lastIndexOf("o", 7)); //6