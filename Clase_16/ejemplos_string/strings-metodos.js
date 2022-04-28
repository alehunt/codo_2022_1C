/******************* STRINGS - MÁS MÉTODOS */

var cad= "Aprendiendo JavaScript ";
document.write(cad);
document.write("<br><br>");
//.repeat(n) : Devuelve el texto de la variable repetido n veces.
document.write("REPEAT <br>");
document.write(cad.repeat(4)); // repite 4 veces
document.write("<br><br>");

//.toLowerCase(): Devuelve el texto de la variable en minúsculas.
document.write("TOLOWERCASE <br>");
document.write(cad.toLowerCase()); // pasa a minúsculas
document.write("<br><br>");

//.toUpperCase(): Devuelve el texto de la variable en mayúsculas.
document.write("TOUPPERCASE <br>");
document.write(cad.toUpperCase()); // pasa a mayúsculas
document.write("<br><br>");

var cad2= "       Texto de ejemplo"
//.trim(): Devuelve el texto sin espacios a la izquierda y derecha.
document.write("TRIM (ver alert) <br>");
alert(cad2.trim());
document.write("<br><br>");

//.replace(str, newstr): Reemplaza la primera aparición del texto str por newstr.
document.write("REPLACE <br>");
document.write(cad.replace("JavaScript", "Python"));
document.write("<br><br>");

//.substr(ini, len): Devuelve el subtexto desde la posición ini hasta ini+len.
document.write("SUBSTR <br>");
document.write(cad.substr(12, 4));
document.write("<br><br>");

//.substring(ini, end): Devuelve el subtexto desde la posición ini hasta end.
document.write("SUBSTRING <br>"); 
document.write(cad.substring(1, 4));
document.write("<br><br>");