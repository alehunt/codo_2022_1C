/*4.  Crear una función que lea notas hasta que ingrese -1 y devuelve el promedio de las notas leídas. (aunque no se suele leer valores en una función)*/

function comprobar_si_num(num) {
    //Esta función permite comprobar si lo ingresado es un número
    if (num != null) { //Comprueba que el valor no esté vacío
        while (isNaN(num)) { //Mientras el valor no sea un número
            if (isNaN(num)) { //Si no es un número lanza una alerta...
                alert("Por favor Ingrese un número")
            }
            num = prompt("Ingrese un número: "); //Pide el número
        }
    }
    return num; //Se guardará en la variable nota de function notas()
}

function notas() {
    var nota = prompt("Ingrese Valor Nota - (-1) para salir");
    nota = comprobar_si_num(nota)//Aqui llamo a otra funcion para comprobar que sea un numero
    var cont = 0, acum = 0; //Variables para contar cantidad de números y acumular sus valores
    while (nota != -1 && nota != null) {
        cont++; //Posfijo: agrega +1 al contador
        acum += parseInt(nota); // acum = acum + nota
        nota = prompt("Ingrese Valor Nota - (-1) para salir");
        nota = comprobar_si_num(nota)//Aqui vuelvo a llamar la otra funcion para comprobar que sea un numero
    }
    return (acum / cont);
}

//Ejecución
alert("El promedio de las notas ingresadas es: " + notas());