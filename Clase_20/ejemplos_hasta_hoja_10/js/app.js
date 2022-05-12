const {createApp, computed} = Vue;

//Ejemplo 1
const ejemplo1 = Vue.createApp({
    data(){
        return{
            mensaje: 'Introducción a Vue.JS'
        }
    }
}).mount("#ejemplo1");

//Ejemplo 2
const ejemplo2 = Vue.createApp({
    data(){
        return{
            nombre: "Juan",
            apellido: "Pérez",
            direccion: "Buenos Aires"
        }
    },
    methods: {
        detalles() {
            return `Soy ${this.nombre} ${this.apellido} y vivo en ${this.direccion}`;
        }
    }
}).mount("#ejemplo2");

//Ejemplo 3
const ejemplo3 = Vue.createApp({
    data(){
        return{
            nombre: "Juan",
            apellido: "Pérez",
            contenidoHtml: "<div><h2>Imagen de un paisaje</h2></div>",
            imgsrc: "img/paisaje.jpg",
            imgalt: "Imagen de un paisaje"
        }
    }
}).mount("#ejemplo3");

//Ejemplo 4
const CustomComponent1 = {
    template:   `<div>
                    <h2>{{buttonText}}</h2>
                </div>`,
    data() {
        return {
            'buttonText': "Componente Custom en Vue.JS 3"
        }
    }
}

const ejemplo4 = Vue.createApp({
    components: {
        'custom-component': CustomComponent1
    }
}).mount("#ejemplo4");

//Ejemplo 5
const CustomComponent2 = {
    template: `<div v-on:mouseover = "cambiarNombre();" v-on:mouseout = "reestablecerNombre();">
                    <h1>Componente creado por <span id = "nombre">{{nombre}}</span></h1>
                </div>`,
    data(){
        return{
            nombre: "Juan"
        }
    },
    methods: {
        cambiarNombre() {
            this.nombre = "Martín";
        },
        reestablecerNombre() {
            this.nombre = "Juan";
        }
    }
}

const ejemplo5 = Vue.createApp({
    components: {
        'custom-component-two': CustomComponent2
    }
}).mount("#ejemplo5");


//Ejemplo 6
const ejemplo6 = Vue.createApp({
    data(){
        return{
            vista: 'componente'
        }
    },
    components: {
        'componente': {
            template: `<div>
                            <span style = "font-size:3rem;color:green;">
                                Componente dinámico
                            </span>
                        </div>`
        },
        'componente2': {
            template: `<div>
                            <span style = "font-size:3rem;color:red;">
                                Componente re dinámico
                            </span>
                        </div>`
        }
    }
}).mount("#ejemplo6");

//Ejemplo 7
const ejemplo7 = Vue.createApp({
    data(){
        return{
            nombre: "",
            apellido: ""
        }
    },
    computed: {
        getNombreCompleto() {
            return this.nombre + " " + this.apellido;
        }
    }
}).mount("#ejemplo7");

//Ejemplo 8
const ejemplo8 = Vue.createApp({
    methods: {
        addText() {
            const text          = this.$refs.text.value;
            const textField     = this.$refs.textField;
            textField.innerHTML = `${textField.innerHTML}<br>${text}`;
        },
        deleteText() {
            const textField     = this.$refs.textField;
            textField.innerHTML = "";
        }
    }
}).mount("#ejemplo8");