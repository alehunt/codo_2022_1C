/************** METODOS PARA ARRAYS *****************/

var frutas = ["Banana", "Naranja", "Manzana", "Mango"];

// .push(obj1, obj2...): Añade uno o varios elementos al final del array. Devuelve tamaño del array.
// document.write("PUSH <br>");
// document.write(frutas, "<br>");
// frutas.push("Kiwi", "Pera");
// document.write(frutas);

// .pop(): Elimina y devuelve el último elemento del array.
// document.write("<br><br> POP <br>");
// document.write(frutas, "<br>");
// var frutaEliminada = frutas.pop(); //No tiene argumentos
// document.write(frutas);
// document.write("<br> Fruta eliminada: ", frutaEliminada);

//.unshift(obj1, obj2...): Añade uno o varios elementos al inicio del array. Devuelve tamaño del array.
// var colores = ["Rojo", "Amarillo", "Verde", "Celeste"];
// document.write("<br><br> UNSHIFT <br>");
// document.write(colores, "<br>");
// colores.unshift("Azul", "Naranja");
// document.write(colores);

//.shift(): Elimina y devuelve el primer elemento del array.
// document.write("<br><br> SHIFT <br>");
// document.write(colores, "<br>");
// colores.shift(); //No tiene argumentos
// document.write(colores);

// .concat(obj1, obj2...): Concatena los elementos (o elementos de los arrays) pasados por parámetro.
// var varones = ["Juan", "Pablo"];
// var masVarones = ["Luis", "Pedro"];
// var todos = varones.concat(masVarones);

// document.write("<br><br> CONCAT <br>");
// document.write(varones, "<br>");
// document.write(masVarones, "<br>");
// document.write(todos, "<br>");
// todos = todos.concat("Julieta", "Natalia");
// document.write(todos, "<br>");

//.indexOf(obj, from): Devuelve la posición de la primera aparición de obj desde from.
// document.write("<br> INDEX OF <br>");
// var letras = ["A", "B", "C", "D", "E", "B", "C"];
// document.write(letras, "<br>");
// var pos = letras.indexOf("B");
// document.write("B está en la posición: ", pos);
// pos = letras.indexOf("C", 4);
// document.write("<br> C está en la posición: ", pos);

//.lastIndexOf(obj, from): Devuelve la posición de la última aparición de obj desde from.
// document.write("<br><br> LAST INDEX OF");
// var pos2 = letras.lastIndexOf("B");
// document.write("<br> B está en la posición: ", pos2);
// pos2 = letras.lastIndexOf("B",4); //de derecha a izquierda
// document.write("<br> B está en la posición: ", pos2);