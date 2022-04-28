// For in recorre las propiedades de un objeto
const array = ["a", "b", "c", "d"];
const array2 = ["a", "b", "c", "d"];
const texto = "Codo a Codo 2021";
console.log(array);

for (var i in array) {
    console.log(i)
};

for (var i in array) {
    console.log(array[i])
};

for (let indiceLetra in texto)
{
    console.log(texto[indiceLetra]);
}



// Otro ejemplo con Objetos
const persona = {
    nombre: "Ana",
    apellido: "Paz",
    edad: 25,
    nombreCompleto: function () {
        return `Soy ${this.nombre} ${this.apellido}`;
    }
};

let atributo;
for (atributo in persona) {
    console.log(atributo);
};
for (atributo in persona) {
    console.log(atributo+ ": " + persona[atributo]);
}

//For of recorre cada uno de los objetos del array (solo se puede usar en arrays)
// //Esto no funciona ya que persona no es iterable (solo se puede usar en arrays)
// for (atributo of persona)
// {
//     console.log(atributo);
// }

for (let letra of texto)
{
    console.log(letra);
}

const otraPersona = {
    nombre: "Pedro",
    apellido: "Guerra",
    edad: 28,
    apodo: "Pepe"
}

const personasArray = [persona, otraPersona]

for (let persona of personasArray)
{
    console.log(persona);
}


//Formas de recorrer las personas
for (let indice = 0; indice < personasArray.length; indice++) {
    console.log(personasArray[indice]);
}
console.clear();

let indice = 0;
while(indice  < personasArray.length)
{
    console.log(personasArray[indice]);
    indice++;
}
console.clear();
for (let personaIndice in personasArray)
{
    console.log(personasArray[personaIndice]);
}
console.clear();
personasArray.forEach(persona => console.log(persona));
console.clear();
for (let persona of personasArray)
{
    console.log(persona);
}
console.clear();

/*
// JavaScript for/of Statement
// https://www.w3schools.com/jsref/jsref_forof.asp
// Recorre los valores de un iterable.
// Ejemplo 1

let cad = "hola";
for (let letra of cad) {
    console.log(letra);
}

// Ejemplo 2
let nombres = ["Juan", "Ana", "Luis"]
for (let item of nombres) {
    console.log(item);
}

// Ejemplo 3
let numeros = [2, -4, 99]
for (let elem of numeros) {
    console.log(elem);
}
*/