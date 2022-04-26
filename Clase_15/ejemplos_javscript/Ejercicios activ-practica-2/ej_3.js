/*3.  Crear una función que se llame promedio3, que reciba como parámetro tres valores y devuelva el promedio de los mismos.*/

//Declaración
function promedio3(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

//Ejecución: pedimos los valores y los guardamos en la variable promedio
let a = parseInt(prompt("Ingrese 1er numero"));
let b = parseInt(prompt("Ingrese 1er numero"));
let c = parseInt(prompt("Ingrese 1er numero"));
let promedio = promedio3(a, b, c)
alert("El promedio de " + a + " - " + b + " - " + c + " es = " + promedio);

//Alternativa sin utilizar variable promedio:
//alert("El promedio de " + a + " - " + b + " - " + c + " es = " + promedio3(a, b, c));