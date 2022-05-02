// Declaración de clase
class Animal {
    // Método que se ejecuta al hacer un new
    constructor() {
    console.warn("Ha nacido un pato.");
    }
    // Métodos
    hablar() {
    return "Cuak";
    }
    }

    const perro = new Animal();

/*Funcion de Capturar, Almacenar datos y Limpiar campos*/
const btnGuardar = document.querySelector("#boton-guardar");
btnGuardar.addEventListener("click",function(){
    /*Captura de datos escrito en los inputs*/
    let nom = document.getElementById("nombretxt").value;
    let apel = document.getElementById("apellidotxt").value;
    /*Guardando los datos en el SessionStorage*/
    localStorage.setItem("Nombre", nom);
    localStorage.setItem("Apellido", apel);
    /*Resetear los campos*/
    document.getElementById("nombretxt").value = "";
    document.getElementById("apellidotxt").value = "";
});

const btnCargar = document.querySelector("#boton-cargar");
btnCargar.addEventListener("click",function(){
        /*Obtener datos almacenados*/
        let nombre = localStorage.getItem("Nombre");
        let apellido = localStorage.getItem("Apellido");
        /*Mostrar datos almacenados*/
        document.getElementById("nombre").innerHTML = nombre;
        document.getElementById("apellido").innerHTML = apellido;
});

const btnBorrar = document.querySelector("#boton-borrar");
btnBorrar.addEventListener("click",function(){
    /*Limpiar localStorage*/
    localStorage.clear();
    /*Resetear los campos*/
    document.getElementById("nombre").innerHTML = "";
    document.getElementById("apellido").innerHTML = "";
});

const btnGuardarArray = document.querySelector("#boton-guardar-array");
btnGuardarArray.addEventListener("click",function(){
    /*Guardar datos del array*/
    let datos = ['html5', 'css3', 'js'];
    localStorage.setItem('datos', JSON.stringify(datos));
});

const btnCargarArray = document.querySelector("#boton-cargar-array");
btnCargarArray.addEventListener("click",function(){
    /*Mostrar los datos del array*/
    let datos = localStorage.getItem('datos');
    datos = JSON.parse(datos); //Convertir JSON a arreglo
    datos = datos.join(" - "); //Convertir array a string poniendo entre los elementos el separador " - "
    document.getElementById("datos").innerHTML = datos;
});

