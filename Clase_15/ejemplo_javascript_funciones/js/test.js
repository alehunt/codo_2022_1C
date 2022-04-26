var x = myFunction(myFunction(4, 3),myFunction(4,3));

console.log(x);



function myFunction(a, b) {

  return a * b;

}

// for(var j = 0; j < 2; i++){
// }
// console.log(j)


// function dividir(suma){
//     console.log(Math.floor(suma / 2));
//     }
//     function multiplicar(suma){
//     console.log(suma * 2);
//     }
        
//     function elegirOperacion(num1,num2,operacion){
//          let suma = num1 + num2;
//          operacion(suma);
//     }
    
//     elegirOperacion(5, 5, multiplicar); 