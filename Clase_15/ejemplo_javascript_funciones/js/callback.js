function saludar(nombre) {
  alert('Hola ' + nombre);
}


function mandarCoheteLuna(astronauta)
{
  console.log("Se fue el cohete " + astronauta);
}

function procesarEntradaUsuario(funcionCallback) {

  /**Banda de codigo */
  
  if (typeof callback == 'function')
  {
    var nombre = prompt('Por favor ingresa tu nombre.');
    funcionCallback(nombre);
  }
  else
  {
    alert("Mandaste cualquiera");
  }
}

procesarEntradaUsuario(saludar);
procesarEntradaUsuario(mandarCoheteLuna);

procesarEntradaUsuario(5); //Esto va a fallar
//alert("Llegué al final")