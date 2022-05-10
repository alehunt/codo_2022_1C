const ej1 = new Vue({
    el: '#app',
    data: {
        contador: 0,
        contador2: 0
    },
    computed: {
        output: function() {
            console.log("Computed");
            return this.contador > 5 ? 'Mayor a 5' : 'Menor a 5'; //No utiliza el contador2
        }
    },
    methods: {
        resultado() {
            console.log("Method");
            return this.contador > 5 ? 'Mayor a 5' : 'Menor a 5'; //No utiliza el contador2
        }
    }
});