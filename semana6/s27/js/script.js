//Función que reciba dos números y retorne la suma de los mismos
//Definición de la función
/*
function sumar (num1, num2) {
    let resultado = num1 + num2;

    return resultado;
}

//Llamar a la función
let resultado = sumar(43, 34);
console.log(resultado);
console.log(sumar(43, 34));

//Función que reciba dos números y retorne la resta de los mismos
function restar (num1, num2) {
    let resultado = num1 -num2;

    return resultado;
}

//Llamamos a la función
let resultadoResta = restar(78, 156);
console.log(resultadoResta);

//Función para multiplicar
function multiplicar (num1, num2) {
    let resultado = num1 * num2;

    return resultado;
}

//Llamamos a la función
let resultadoMultiplicar = multiplicar (8, 9);
console.log(resultadoMultiplicar);

//Función para dividir
function dividir (num1, num2) {
    if (num2 !=0) {
      let resultado = num1 / num2;

    return resultado;   
    }
   return "Error"
}

//Llamamos a la función
let resultadoDividir = dividir (36, 0);
console.log(resultadoDividir);
*/

//Arrow funtion significa función de flecha
//Sumar
let sumar = (num1, num2) => num1 + num2;

//llamar a la función
let respuesta = sumar(23, 22);
console.log(respuesta);

console.log("");

//Restar
let restar = (num1, num2) => {
     let resultado = num1 - num2;

    return resultado;
};

//Llamamos a la función
let respuestaRestar = restar(30, 15);
console.log(respuestaRestar);

//Multiplicar
let multiplicar = (num1, num2) => num1*num2;

//llamar a la función
let respuestaMultiplicar = multiplicar(3, 22);
console.log(respuestaMultiplicar);

console.log("");

//Dividir
let dividir = (num1, num2) => {
        if (num2 !=0) {
          let respuesta = num1 / num2;
    
        return respuesta;   
        }
       return "Error"
    }

//Llamamos a la función
let respuestaDividir = dividir(30, 15);
console.log(respuestaDividir);