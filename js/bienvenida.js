const cursos = [
    { nombre: "Curso de Introducción a las Finanzas", precio: 35000, duracion: 2 + " meses" },
    { nombre: "Curso de Cómo invertir y operar en la bolsa argentina online - Programa Integral", precio: 65000, duracion: 5 + " meses" },
]


let carrito = []

let seleccion = prompt("Desea adquirir un curso si o no")
while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingresar si o no")
    seleccion = prompt("Desea adquirir un curso si o no")
}

if (seleccion == "si") {
    alert("A continuacion se detallan los Cursos")
    let todosLosCursos = cursos.map((curso) => curso.nombre + " $ " + curso.precio + " " + curso.duracion);
    alert(todosLosCursos.join(" - "))
} else if (seleccion == "no") {
    alert("Gracias por visitar nuestra pagina, Vuelve pronto")
}

while (seleccion != "no") {
    let curso = prompt("Agrega un curso a tu carrito")
    let precio = 0

    if (curso == "Curso de Introducción a las Finanzas" || curso == "Curso de Criptomonedas Inversiones y Finanzas. Bitcoins y Tecnología Blockchain" || curso == "Curso de Cómo invertir y operar en la bolsa argentina online - Programa Integral") {
        switch (curso) {
            case "Curso de Introducción a las Finanzas":
                precio = 35000;
                duracion = "2 meses";
                break;
            case "Curso de Cómo invertir y operar en la bolsa argentina online - Programa Integral":
                precio = 65000;
                duracion = "5 meses";
                break;
            default:
                break;
        }
        carrito.push({ curso, precio, duracion })

    } else {
        alert("Curso no Disponible")
    }
    seleccion = prompt("¿Desea algun otro curso?")
    while (seleccion === "no") {
        alert("gracias por la compra, Nos vemos en otro momento!")
        carrito.forEach((carritoFinal) => {
            console.log(`curso: ${carritoFinal.curso}, precio: ${carritoFinal.precio}, duracion: ${carritoFinal.duracion}`)
        })
        break;
    }
}


const total = carrito.reduce((acc, el) => acc + el.precio, 0)
console.log(`El total a pagar por los cursos es: ${total}`)


