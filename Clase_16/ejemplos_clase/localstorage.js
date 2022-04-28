// LocalStorage
// Las propiedades localStorage y sessionStorage permiten guardar pares clave / valor en un navegador web. Los datos guardados son siempre formato texto.
// El objeto localStorage almacena datos sin fecha de vencimiento. Los datos almacenados en sessionStorage son eliminados cuando finaliza la sesion de navegación (cuando se cierra la página).

if (typeof(Storage) !== "undefined") {
    // Store
   var persona =  {nombre: "Alejandro", apellido: "Alfredo"};

    localStorage.setItem("apellido", "Perez"); // No existe, lo agrega. 
    localStorage.setItem("apellido", "Pérez"); // Existe, lo reemplaza
    localStorage.setItem("nombre", "Juan");
    // Retrieve
    document.getElementById("resultado").innerHTML = localStorage.getItem("apellido");
} else {
    document.getElementById("resultado").innerHTML = "Su navegador no soporta Web Storage.";
}