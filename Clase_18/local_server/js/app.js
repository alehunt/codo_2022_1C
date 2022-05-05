
const container = document.querySelector(".container");

const  button = document.querySelector("div");

function agregarItem() {
    const item = document.getElementById("miItem");
    // const item = document.querySelector("#miItem");
    const carrito = container.querySelector(".carrito");
    const lista = carrito.querySelector("ul");

    const nuevoItem = document.createElement("li");
    nuevoItem.innerHTML = item.value;
    lista.appendChild(nuevoItem);
}