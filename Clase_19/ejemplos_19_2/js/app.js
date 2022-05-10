const ejemplo1 = new Vue({
    el: '#ejemplo1',
    data: {
        kilometros: 0,
        metros: 0
    },
    methods: {},
    computed: {},
    watch: {
        kilometros: function(val) {
            this.kilometros = val;
            this.metros = val * 1000;
        },
        metros: function(val) {
            this.kilometros = val / 1000;
            this.metros = val;
        }
    }
});

const ejemplo2 = new Vue({
    el: '#ejemplo2',
    data: {
        title: "Ejemplo 2",
        hreflink: "http://www.google.com"
    }
});

const ejemplo3 = new Vue({
    el: '#ejemplo3',
    data: {
        title: "Ejemplo3",
        isActive: false,
        hasError: false
    }
});

const ejemplo4 = new Vue({
    el: '#ejemplo4',
    data: {
        nombre: '',
        mensaje: '',
        checked: false,
        seleccionado: 'Blanco',
        lenguaje: ""
    }
});

const ejemplo5 = new Vue({
    el: '#ejemplo5',
    data: {
        age: 0,
        msg: '',
        message: ''
    }
});

const ejemplo6 = new Vue({
    el: '#ejemplo6',
    data: {
        num1: 100,
        num2: 200,
        total: 0
    },
    methods: {
        mostrarResultado: function(event) {
            console.log(event);
            return this.total = this.num1 + this.num2;
        }
    },
});

const ejemplo7 = new Vue({
    el: '#ejemplo7',
    data: {
        styleobj: {
            width: "100px",
            height: "100px",
            backgroundColor: "red"
        }
    },
    methods: {
        changebgcolor: function() {
            this.styleobj.backgroundColor = "green";
        },
        originalcolor: function() {
            this.styleobj.backgroundColor = "red";
        }
    },
});

const ejemplo8 = new Vue({
    el: '#ejemplo8',
    data: {
        clicknum: 0,
        clicknum1: 0,
        styleobj: {
            backgroundColor: '#2196F3!important',
            cursor: 'pointer',
            padding: '8px 16px',
            verticalAlign: 'middle',
        }
    },
    methods: {
        buttonclickedonce: function() {
            this.clicknum++;
        },
        buttonclicked: function() {
            this.clicknum1++;
        }
    }
});

const ejemplo9 = new Vue({
    el: '#ejemplo9',
    data: {
        name: '',
        styleobj: {
            width: "30%",
            padding: "12px 20px",
            margin: "8px 0",
            boxSizing: "border-box"
        }
    },
    methods: {
        mostrarValor: function(event) {
            this.name = event.target.value;
        }
    }
});

const ejemplo10 = new Vue({
    el: '#ejemplo10',
    data: {
        show: true,
        styleobj: {
            backgroundColor: '#2196F3!important',
            cursor: 'pointer',
            padding: '8px 16px',
            verticalAlign: 'middle',
        }
    },
    methods: {
        showdata: function() {
            this.show = !this.show;
        }
    },
});

const ejemplo11 = new Vue({
    el: '#ejemplo11',
    data: {
        items: [],
        styleobj: {
            width: "30%",
            padding: "12px 20px",
            margin: "8px 0",
            boxSizing: "border-box"
        }
    },
    methods: {
        showinputvalue: function(event) {
            this.items.push(event.target.value);
        }
    },
});