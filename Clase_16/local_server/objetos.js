// const persona = {
//     _nombre: "Alejandro",
//     apellido: "Hunt",
//     edad: 39,
//     cuadro: "Velez",
//     // nombreCompleto: function (){
//     //     return this.nombre + " " + this.apellido;
//     // }
//     get nombre() {
//         return this._nombre.toUpperCase();
//     },
//     set nombre(variable) {
//         if (variable == "Diego")
//             this._nombre = "Diegote";
//         else
//             this._nombre = variable;
//     } 
// };



// // function Persona(pNombre, pApellido) {
// //     this.nombre = pNombre,
// //     this.apellido = pApellido
// // }

// class Persona {
//     constructor(pNombre, pApellido) {
//       this.nombre = pNombre;
//       this.apellido = pApellido;
//     }
//   }

// const juan = new Persona("Juan", "Perez");

// console.log(typeof persona);
// console.log(typeof juan);

// //alert("Hola " + persona.nombreCompleto());
// alert("Hola "+ persona.nombre)
// persona.nombre = "Diego";
// alert("Hola "+ persona.nombre)

// console.log(typeof persona);
















// const empleado = new Persona();
// empleado.direccion = "Monroe";






var persona = {
    nombre: "Juan", //variable del objeto. Par variable: valor,
    apellido: "Paz",
    dni: 11223344,
    direccion: "Algun Lugar"//,

    //Método: 
    // nombreCompleto: function () { //Esta variable guarda el resultado de una función
    //     return this.nombre + " " + this.apellido; 
    //     //El string que devuelve tiene información del propio objeto
    //}

    // //Getter
    // get nombreCompleto() {
    //     return this.nombre + " " + this.apellido;
    // },
    // //Setter 
    // set dire(pDireccion) {
    //     this.direccion = pDireccion.toUpperCase();
    // }
};

// persona.dire = "Monroe 4012";

// console.log(persona) // Imprimo el objeto
// console.log(persona.nombre) // Imprimo una propiedad del objeto: Juan
// //console.log(persona.nombreCompleto()) // Imprimo el resultado de una función del objeto: Juan Paz
// console.log(persona.nombreCompleto) // Imprimo el resultado llamando al getter
// console.log(persona.direccion);
// //Recorriendo las propiedades de un objeto
for (let propiedad in persona)
{
    console.log(propiedad + ":" + persona[propiedad]);
    //console.log(`${propiedad}: ${persona[propiedad]}`);
}