/*1.  Realizar una función, a la que se le pase como parámetro un número N, y muestre por consola N veces, el  siguiente mensaje: “Bienvenidos al curso Full Stack”*/

//Declaración
function mensaje(N) {
    for (let i = 1; i <= N; i++) {
        //let: a nivel de bloque 
        document.write(i + "- Bienvenidos al curso Full Stack" + "<br>")
    }
}

//Ejecución
//- prompt: pide el dato
//- parseInt: parsea a entero
//- mensaje: llama a la función
mensaje(parseInt(prompt("Ingrese un Numero:")));

