//alert('Hola');

function mostrarMensaje() {
    //alert('Mensaje');

    //Mostrar los números del 1 al 10
    for (let i = 1; i <= 10; i++) {
    //console.log(i);
    alert(i);
    }
}

//Ejemplo 2
let texto = "";

//Obtenemmos el conteo como texto HTML
for (let i = 1; i <= 10; i ++) {
    texto += `${i}<br />`;
}

//Asignamos al elemento
document.getElementById('demo').innerHTML = texto;

//Ejemplo 3
//Limpiamos la variable texto
texto = "";
//Recorrer lista por índice
const autos = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]

//Acceder a los elementos de la lista mediante un bucle
for (let i = 0; i < autos.length; i ++) {
    texto += `${autos[i]}<br />`;
    
}

//Asignamos al elemento
document.getElementById('autos').innerHTML = texto;

//Ejemplo 4
//Limpiamos la variable texto
texto = "";

//Recorrer una lista por elemento
for (let auto of autos) {
    texto += `${auto}<br />`;
}
//Asignamos al elemento
document.getElementById('autos2').innerHTML = texto;