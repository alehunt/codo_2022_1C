const { createApp, computed, watch, set} = Vue;

//Ejemplo 1
const ejemplo1 = Vue.createApp({
    data(){
        return{
            kilometros: 0,
            metros: 0
        }
    },
    watch: {
        kilometros(val) {
            this.kilometros = val;
            this.metros = val * 1000;
        },
        metros(val) {
            this.kilometros = val / 1000;
            this.metros = val;
        }
    }
}).mount("#ejemplo1");

//Ejemplo 2
const ejemplo2 = Vue.createApp({
    data(){
        return{
            title: "",
            hreflink: "http://www.google.com"
        }
    }
}).mount("#ejemplo2");
ejemplo2.title = "Enlace a Google";

//Ejemplo 3
const ejemplo3 = Vue.createApp({
    data(){
        return{
            title: "Ejemplo3",
            isActive: true,
            hasError: true
        }
    }
}).mount("#ejemplo3");


//Ejemplo 4
const ejemplo4 = Vue.createApp({
    data(){
        return{
            nombre: 'Juan',
            mensaje: 'Soy un mensaje',
            checked: true,
            seleccionado: 'Negro',
            lenguaje: "C++"
        }
    }
}).mount("#ejemplo4");

//Ejemplo 5
const ejemplo5 = Vue.createApp({
    data(){
        return{
            age: 0,
            msg: '',
            message: ''
        }
    }
}).mount("#ejemplo5");

//Ejemplo 6
const ejemplo6 = Vue.createApp({
    data(){
        return{
            num1: 100,
            num2: 200,
            total: 0
        }
    },
    methods: {
        mostrarResultado(event) {
            console.log(event);
            return this.total = this.num1 + this.num2;
        }
    }
}).mount("#ejemplo6");

//Ejemplo 7
const ejemplo7 = Vue.createApp({
    data(){
        return{
            styleobj: {
                width: "100px",
                height: "100px",
                backgroundColor: "red"
            }
        }
    },
    methods: {
        changebgcolor() {
            this.styleobj.backgroundColor = "green";
        },
        originalcolor() {
            this.styleobj.backgroundColor = "red";
        }
    }
}).mount("#ejemplo7");

//Ejemplo 8
const ejemplo8 = Vue.createApp({
    data(){
        return{
            clicknum: 0,
            clicknum1: 0,
            styleobj: {
                backgroundColor: '#2196F3!important',
                cursor: 'pointer',
                padding: '8px 16px',
                verticalAlign: 'middle'
            }
        }
    },
    methods: {
        buttonclickedonce() {
            this.clicknum++;
        },
        buttonclicked() {
            this.clicknum1++;
        }
    }
}).mount("#ejemplo8");

//Ejemplo 9
const ejemplo9 = Vue.createApp({
    data(){
        return{
            name: '',
            styleobj: {
                width: "30%",
                padding: "12px 20px",
                margin: "8px 0",
                boxSizing: "border-box"
            }
        }
    },
    methods: {
        mostrarValor(event) {
            this.name = event.target.value;
        }
    }
}).mount("#ejemplo9");

//Ejemplo 10
const ejemplo10 = Vue.createApp({
    data(){
        return{
            show: true,
            styleobj: {
                backgroundColor: '#2196F3!important',
                cursor: 'pointer',
                padding: '8px 16px',
                verticalAlign: 'middle'
            }
        }
    },
    methods: {
        showdata() {
            this.show = !this.show;
        }
    }
}).mount("#ejemplo10");

const ejemplo11 = Vue.createApp({
    data(){
        return{
            items: [],
            styleobj: {
                width: "30%",
                padding: "12px 20px",
                margin: "8px 0",
                boxSizing: "border-box"
            }
        }
    },
    methods: {
        showinputvalue(event) {
            this.items.push(event.target.value);
        }
    },
}).mount("#ejemplo11");