/*2.  Diseñar una función que tenga como parámetros dos números, y que calcule el máximo.*/

//Declaración
function mayor(a, b) {
    if (a > b) {
        alert("De los numeros ingresados " + a + " - " + b + " el mayor es: " + a)
    } else if (b > a) {
        alert("De los numeros ingresados " + a + " - " + b + " el mayor es: " + b)
    } else {
        alert("Los numeros ingresados " + a + " - " + b + " son iguales")
    }
}

//Ejecución: se pasan como parámetros los valores pedidos con prompr y parseados a entero.
mayor(parseInt(prompt("Ingrese 1er numero: ")), parseInt(prompt("Ingrese segundo numero: ")));