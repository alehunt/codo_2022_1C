// localStorage.nombre = "Juan"; //localStorage.setItem("nombre","Juan");
// localStorage.apellido = "Rodriguez";
// localStorage.nombre = "José";

// localStorage.setItem("cantidadIngresos", 0);
// localStorage.cantidad = 0;

// localStorage.removeItem("nombre");
//localStorage.clear();


// let nombre = localStorage.nombre; //localStorage.getItem("nombre");
// let apellido = localStorage.apellido;
// console.log(`${nombre} ${apellido}`);

// Declaración de clase
class Persona {
    // Método que se ejecuta al hacer un new
    constructor(pNombre, pApellido, pEdad) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
    }

    // Métodos
    saludar() {
        return `Hola soy ${this.apellido}, ${this.nombre} y tengo ${this.edad} años`;
    }
}


let datosGuardados = localStorage.getItem('datos');

if (datosGuardados == null)
{
    //Instanciación de la clase
    let alejandro = new Persona(pNombre="Alejandro", pApellido="Hunt", pEdad=39);
    //Pasar objeto a JSON y guardarlo en localStorage
    localStorage.datos = JSON.stringify(alejandro);
}

datosGuardados = localStorage.getItem('datos');

if (datosGuardados != null) {
    let otroAlejandro = JSON.parse(datosGuardados);

    document.write(`Persona ${otroAlejandro.apellido}, ${otroAlejandro.nombre} con ${otroAlejandro.edad} años`);
    console.log('Datos: ', `Persona ${otroAlejandro.apellido}, ${otroAlejandro.nombre} con ${otroAlejandro.edad} años`);
}






