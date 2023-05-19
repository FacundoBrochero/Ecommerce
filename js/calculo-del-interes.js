let capital = document.getElementById("#importe");
let porcentaje = document.getElementById("#interes");
let dias = document.getElementById("#plazo");
let botonCalcular = document.getElementById(".btn")


botonCalcular.addEventListener("click", calc)
console.log(botonCalcular)
function calc() {

    let montoFinal = Math.round(capital * porcentaje * dias) / 36000;
    montoFinal.innerText = `$${montoFinal}`

}


