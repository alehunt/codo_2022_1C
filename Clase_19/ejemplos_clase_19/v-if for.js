var ejemplo_vIf_vFor = new Vue({
    el: '#ejemplo',
    data: {
      titulo: "Ejemplo v-if y v-for",
      frutas: [
        //seguimos el modelo propiedad (frutas): clave (nombre:), valor ('Pera').
        {nombre:"naranja", cantidad: 10}, //Cada uno de estos es un elemento del array
        {nombre:"banana", cantidad: 0},
        {nombre:"pera", cantidad: 3}
      ],
      mostrarPrueba: true
    }
})
//ejemplo_vIf_vFor.titulo = "Otro texto con VUE!";