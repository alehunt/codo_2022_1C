const ejemplo1 = new Vue({
    el: '#ejemplo1',
    data: {
        mensaje: 'Introducción a Vue.JS'
    }
});

const ejemplo2 = new Vue({
    el: '#ejemplo2',
    data: {
        nombre: "Juan",
        apellido: "Pérez",
        direccion: "Buenos Aires"
    },
    methods: {
        detalles: function() {
            return "Soy " + this.nombre + " " + this.apellido + " y vivo en " + this.direccion;

        }
    }
});

const ejemplo3 = new Vue({
    el: '#ejemplo3',
    data: {
        nombre: "Juan",
        apellido: "Pérez",
        contenidoHtml: "<div><h2>Imagen de un paisaje</h2></div>",
        imgsrc: "img/paisaje.jpg",
        imgalt: "Imagen de un paisaje"
    },
    methods: {
        detalles: function() {
            return "Soy " + this.nombre + " " + this.apellido + " y vivo en " + this.direccion;
        }
    }
});

Vue.component('prueba', {
    template: '<div><h1>Componente de prueba</h1></div>'
});

const ejemplo4 = new Vue({
    el: '#ejemplo4'
});

const ejemplo5 = new Vue({
    el: '#ejemplo5',
    components: {
        'prueba': {
            template: '<div><h1>Componente de prueba modificado</h1></div>'
        }
    }
});

Vue.component('prueba2', {
    template: '<div v-on:mouseover = "cambiarNombre()" v-on:mouseout = "reestablecerNombre();"><h1>Componente creado por <span id = "nombre">{{nombre}}</span></h1></div>',
    data: function() {
        return {
            nombre: "Juan"
        }
    },
    methods: {
        cambiarNombre: function() {
            this.nombre = "Martín";
        },
        reestablecerNombre: function() {
            this.nombre = "Juan";
        }
    }
});

const ejemplo6 = new Vue({
    el: '#ejemplo6'
});

const ejemplo7 = new Vue({
    el: '#ejemplo7'
});

const ejemplo8 = new Vue({
    el: '#ejemplo8',
    data: {
        vista: 'componente'
    },
    components: {
        'componente': {
            template: `<div>
                        <span style = "font-size:3rem;color:green;">
                            Componente dinámico
                        </span>
                    </div>`
        }
    }
});

const ejemplo9 = new Vue({
    el: '#ejemplo9',
    data: {
        nombre: "",
        apellido: "",
    },
    computed: {
        getNombreCompleto: function() {
            return this.nombre + " " + this.apellido;
        }
    }
});

const ejemplo10 = new Vue({
    el: '#ejemplo10',
    methods: {
        addText() {
            const text = ejemplo10.$refs.text.value
            const textField = ejemplo10.$refs.textField
            textField.innerHTML = textField.innerHTML + '<br>' + text
        },
        deleteText() {
            const textField = ejemplo10.$refs.textField
            textField.innerHTML = ''
        }
    }
});