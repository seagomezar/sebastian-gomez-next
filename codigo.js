alert("Bienvenido a mi progama");
let nombre = prompt("dame tu nombre");

if(nombre === "ana") {
    alert("hola a mi misma");
} else {
    let resultado = "Hola " + nombre;
    alert(resultado);
}


let edad = prompt("dame tu edad");

if(edad >= 18) {
    alert("felicitaciones eres mayor de edad");
} else {
    alert("sorry eres un niño");
}


let numero1 = prompt("Dame un numero"); // "3"
let numeroConvertido = parseInt(numero1);
alert(numeroConvertido + 2);