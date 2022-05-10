var ejemplo_vIf_vFor = new Vue({
    el: '#ejemplo',
    data: {
      titulo: "Ejemplo v-if y v-for",
      frutas: [
        // Objetos dentro del array frutas con el par clave-valor
        {nombre:"naranja", cantidad: 10},
        {nombre:"banana", cantidad: 0},
        {nombre:"pera", cantidad: 3},
        {nombre:"kiwi", cantidad: 7},
        {nombre:"durazno", cantidad: 5},
        {nombre:"mandarina", cantidad: 4}
      ]
    }
})