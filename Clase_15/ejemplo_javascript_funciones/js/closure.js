function crearFuncion() {
    let nombre = "Codo a Codo";
    function muestraNombre() {

      alert(nombre);
    }
    
    return muestraNombre;
  }
  
  let miFunc = crearFuncion();
  miFunc();
  //Define una nueva variable nombre global y le asigna "Hola"
  nombre = "HOLA";
  //Vuelve a llamar al closure que tiene su propia variable nombre
  miFunc();
  //No está definida de manera global por lo que da error, solo está definida
  //dentro de crearFuncion
  muestraNombre();


  


