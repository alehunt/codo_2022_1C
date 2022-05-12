Vue.component('contador', {
    template: //html 
        `
        <div>
            <h3>Cantidad: {{num}}</h3>
            <button @click="num++">+</button>
            <button @click="num--">-</button>
        </div>
        `,
    // Ahora data en forma de función y puede retornar más de un dato
    data() {
        return {
            num: 0
        }
    }
})

var app = new Vue({
    el: '#app',
})