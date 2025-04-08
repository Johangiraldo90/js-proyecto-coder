//
alert("Ingrese el usuario y la contraseña para iniciar sesión en el convertidor de Divisas")

const cliente = [
    {usuario: "johan", password: "1234"},
    {usuario: "alejo", password: "2345"},
    {usuario: "juan", password: "3456"}
]
let usuarioCliente = prompt("Ingrese Usuario")
let passwordCliente = prompt("Ingrese la contraseña")

for (let i =0; i < cliente.length; i++ ){
    if (cliente[i].usuario==usuarioCliente && cliente[i].password == passwordCliente){
        alert("Respetado cliente Bienvenido al cambiador de divisas");
    } 
}

alert("Ingrese el valor a que moneda quiere cambiar, DOLAR o EURO")

let cambio = prompt("Ingrese el tipo de moneda al que quieres cambiar DOLAR o EURO")

if (cambio == "DOLAR") {
    const dolar = 5000
    let peso = parseInt(prompt("Ingrese el valor en pesos"))
    let resultado = dolar*peso
    alert("El resultado en pesos "+ peso + " a el dolar es de " + resultado);
} else if (cambio == "EURO"){
    const euro = 4500
    let peso = parseInt(prompt("Ingrese el valor en pesos"))
    let resultado = euro*peso
    alert("El resultado en pesos "+ peso + " a el Euro es de " + resultado);
}else{
    alert("Elige una opcion Correcta")
}





