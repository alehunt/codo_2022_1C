var persona = {
    nombre: "Juan", //variable del objeto. Par variable: valor,
    apellido: "Paz",
    dni: 11223344,
    direccion: "Algun Lugar",

    //Método: 
    // nombreCompleto: function () { //Esta variable guarda el resultado de una función
    //     return this.nombre + " " + this.apellido; 
    //     //El string que devuelve tiene información del propio objeto
    //}

    //Getter
    get nombreCompleto() {
        return this.nombre + " " + this.apellido;
    },
    //Setter 
    set dire(pDireccion) {
        this.direccionire = pDireccion.toUpperCase();
    }
};

persona.dire = "Monroe 4012";

console.log(persona) // Imprimo el objeto
console.log(persona.nombre) // Imprimo una propiedad del objeto: Juan
//console.log(persona.nombreCompleto()) // Imprimo el resultado de una función del objeto: Juan Paz
console.log(persona.nombreCompleto) // Imprimo el resultado llamando al getter
console.log(persona.direccion);
//Recorriendo las propiedades de un objeto
for (let propiedad in persona)
{
    console.log(`${propiedad}: ${persona[propiedad]}`);
}