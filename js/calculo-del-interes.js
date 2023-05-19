let importe = document.getElementById("#importe");
let plazo = document.getElementById("#plazo");
let interes = 1.97;
let respuesta = document.getElementById("#total-final")
const botonCalcular = document.getElementById("#calcular")

botonCalcular.addEventListener("click", calc)

function calc() {

    let total = importe + plazo + interes

    respuesta.innerHTML = `${total}`;
}

console.log(botonCalcular)