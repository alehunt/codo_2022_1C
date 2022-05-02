/* const array = ["a", "bb", "c", 3, false, "d"];


// Iterar array con for
for (let i = 0; i < array.length; i++) {
    mensaje = `Elemento: ${i} = ${array[i]}`;
    console.log("Elemento: " + i + "=" + array[i]);
}


//Iterar con for in
for (let i in array)
{
    console.log("Elemento: " + i + "=" + array[i]);
}

//Iterar con for of 
for (let elemento of array)
{
    console.log("Elemento: " + array.indexOf(elemento) + "=" + elemento);
}

//Busqueda de elemento con ciclo inexacto
let elementoEncontrado = false;
let index = 0;
while (!elementoEncontrado && index < array.length)
{
    if (array[index] == "bb")
        elementoEncontrado = true;
    index++;
}

if (elementoEncontrado)
{
    console.log("Encontré el elemento 'bb' en el índice " + index);
}
else
{
    console.log("No encontré el elemento 'bb'");
} */


/*********************************************/
// Array functions (callbacks)

/* const arr = ["a", "bb", "c", "d"];
const f = function(elemento,indice) {
    console.log("f-Elemento: "+indice+" - Valor: "+elemento);
};

arr.forEach(f); 

arr.forEach((elemento, indice) => console.log("Elemento: "+indice+ " - Valor: "+elemento));
arr.forEach((elemento) => console.log("El elemento es: " + elemento)); */

/*********************************************/
//Sort con callback
/* const arrayNumeros = [1, 8, 2, 32, 9, 7, 4]

//Función de comparación para ordenamiento natural
//Si a-b es Negativo: a->b (b va después que a)
//Si a-b es Cero: a = b (sin cambios)
//Si a-b es Positivo b ->a (b va antes que a)
const funcionOrdenamiento = function (a, b) {
    return a - b; 
}

console.log("Array ordernado: " + arrayNumeros.sort(funcionOrdenamiento)); */

/*********************************************/
/* const arr = ["a", "bab", "ca", "ad"];
const funcEvery = function(valor) {
    // Si el string incluye el caracter a
    return valor.includes("a");
};
// Le pasamos la función callback todos() a every
console.log("Every: " + arr.every(funcEvery));  */

/*********************************************/
/* const arr = ["a", "b", "c", "d"];
const funcSome = function(valor) {
    return valor.includes("a");
};

console.log("Some: " + arr.some(funcSome)); */

/*********************************************/
/* const arrayNombres = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const funcMap = function(valor) {
    return valor.length;
};
console.log("Map (nombres): " + arrayNombres.map(funcMap));


const arrayNumeros = [1, 2, 3, 4, 5, 6];
const funcionDuplicar = function(valor) {
    return valor*2;
};

console.log("Map (sin duplicar): " + arrayNumeros);
console.log("Map (duplicar): " + arrayNumeros.map(funcionDuplicar)); */

/*********************************************/
/* const arr2 = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const funcFilter = function(valor) {
    if (valor[0] == "P") return true;
    else return false;
};
console.log("Filter: " + arr2.filter(funcFilter)); */
/*********************************************/
/* const arr2 = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];

const funcFind = function(valor) {
    if (valor.length == 5) return true;
    else return false;
};
console.log("Find: " + arr2.find(funcFind));
console.log("FindIndex: " + arr2.findIndex(funcFind)); */
/*********************************************/
/* const arr3 = [2, 4, 6, 8, 20];
console.log("Reduce: ");
const funcReduce = function(primero, siguiente) {
    console.log("P= " + primero + " - S= " + siguiente);
    return primero - siguiente;
};
console.log("Reduce: " + arr3.reduce(funcReduce));
console.log("ReduceRight: " + arr3.reduceRight(funcReduce)); */