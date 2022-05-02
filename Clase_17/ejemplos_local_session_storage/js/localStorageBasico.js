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

var persona =  {nombre: "Alejandro", apellido: "Alfredo"};
localStorage.datos = JSON.stringify(persona);


// let arr = ['html5','css3','js'];
// // Guardo el objeto como un string
// localStorage.setItem('datos', JSON.stringify(arr));
// Obtener el string previamente salvado
let datos = localStorage.getItem('datos');
console.log('Datos: ', JSON.parse(datos));





