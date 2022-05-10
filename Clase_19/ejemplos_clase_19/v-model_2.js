var ejemplo_vModel = new Vue({
    el: '#ejemploVM',
    data: {
      titulo: "Ejemplo v-model y v-on",
      frutas: [
        // Objetos dentro del array frutas con el par clave-valor
        {nombre:"Naranja", cantidad: 10},
        {nombre:"Banana", cantidad: 0},
        {nombre:"Pera", cantidad: 3}
      ],
      nuevaFruta: ''
    },
    methods: {
      agregarFruta(){
        this.frutas.push({ nombre: this.nuevaFruta, cantidad: 0 });
        this.nuevaFruta= '';
      },
      agregarFrutaConIF(){
        if (this.nuevaFruta != "") {
          this.frutas.push({ nombre: this.nuevaFruta, cantidad: 0 });
          this.nuevaFruta= '';
        }
      }
    }
})