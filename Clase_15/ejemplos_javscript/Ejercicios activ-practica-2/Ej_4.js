document.write("4.Crear una función que lea notas hasta que ingrese -1 y devuelve el promedio de las notas leídas. (aunque no se suele leer valores en una función).<br>");

//Creación de la función
function leerNotas(){
    var sumaNros = 0;
    var cantNros = 0;
    var nota = Number(prompt("Ingrese un número"));
    while (nota != -1) {
       sumaNros = sumaNros + nota;
       cantNros++;
       document.write(nota + "<br>")
       nota = Number(prompt("Ingrese el otro número (escriba -1 para salir)"));
    }
    promedio = sumaNros / cantNros;
    return promedio;
}

document.write("Números ingresados: <br>")
leerNotas();
document.write("El promedio de los números es: " + promedio);