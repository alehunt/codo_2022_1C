//const arr = ["a", "bb", "c", "d"];

// Iterar array con for
/* for (let i = 0; i < arr.length; i++) {
    console.log("Elemento: " + i + "= " + arr[i]);
} */

/*********************************************/
// Con funciones por expresión
/* const arr = ["a", "bb", "c", "d"];
const f = function(valor,indice) {
    console.log("Elemento: "+indice+" - Valor: "+valor);
};
arr.forEach(f); */

/*********************************************/
/* const arr = ["a", "bb", "c", "d"];
const funcEvery = function(valor) {
    // Si el tamaño del string es igual a 1
    if (valor.length == 1) return true;
    else return false;
};
// Le pasamos la función callback todos() a every
console.log("Every: " + arr.every(funcEvery));  */
/*********************************************/
/* const arr = ["a", "b", "c", "d"];
const funcSome = function(valor) {
    if (valor.length == 2) return true;
    else return false;
};

console.log("Some: " + arr.some(funcSome)); */

/*********************************************/
/* const arr2 = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const funcMap = function(valor) {
    return valor.length;
};
console.log("Map: " + arr2.map(funcMap)); */
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
const arr3 = [95, 5, 25, 10, 25];
console.log("Reduce: ");
const funcReduce = function(primero, siguiente) {
    console.log("P= " + primero + " - S= " + siguiente);
    return primero - siguiente;
};
console.log("Reduce: " + arr3.reduce(funcReduce));
console.log("ReduceRight: " + arr3.reduceRight(funcReduce));