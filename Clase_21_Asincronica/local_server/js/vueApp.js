const { createApp} = 'vue'

const vueApp = Vue.createApp({
    data() {
    // component logic
    const fecha = new Date().toLocaleDateString();
    return {
        fecha, 
        mensaje: "",
        pregunta: "",
        chiste: ""
    }
  },
  methods: {
        borrar() {
            this.mensaje = "";
            this.pregunta = "";
            this.chiste = "";
        },
        obtenerChistesPromises() {
            this.mensaje = "";
            this.pregunta = "";
            this.chiste = "";
            fetch("https://v2.jokeapi.dev/joke/Programming?lang=es")
                .then(respuesta => respuesta.json())
                .then(respuestaJson => {
                    //Que datos retorna lo se en base a la documentación (https://sv443.net/jokeapi/v2/)
                    const tipo = respuestaJson.type;
                    if (tipo == "single"){
                        this.chiste = respuestaJson.joke;
                    } else{
                        this.pregunta = respuestaJson.setup;
                        this.chiste = respuestaJson.delivery;
                    }
                })
                .catch(error => {
                    console.error(error);
                })

            this.mensaje = "Ya ejecuté la función.";
        },
        async obtenerChistesSincronico() {
            this.mensaje = "";
            this.pregunta = "";
            this.chiste = "";
            const respuesta = await fetch("https://v2.jokeapi.dev/joke/Programming?lang=es");
            const respuestaJson = await respuesta.json();
            
            //Que datos retorna lo se en base a la documentación (https://sv443.net/jokeapi/v2/)
            const tipo = respuestaJson.type;
            if (tipo == "single"){
                this.chiste = respuestaJson.joke;
            } else{
                this.pregunta = respuestaJson.setup;
                this.chiste = respuestaJson.delivery;
            }
            this.mensaje = "Ya ejecuté la función.";
        }
  }
}).mount('#vueApp')