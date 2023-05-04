
function login() {

    let user, pass;

    user = document.getElementById("usuario").value
    pass = document.getElementById("contraseña").value

    if (user == "Facundo" && pass == "1234" || user == "Profesor" && pass == 1234) {
        window.location = "../pages/bienvenida.html"
    } else {
        alert("Algun dato esta Incorrecto")
        window.location = "../inicio.html"
    }
}

const EnviarFormulario = document.getElementById("contraseña")

document.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        login()
    }
})

class Curso {
    constructor(titulo, precio) {
        this.titulo = titulo;
        this.precio = precio;
        this.gracias = function () { console.log("Gracias, por interesarte en el " + this.titulo) }
    }
}

const curso1 = new Curso("Curso de Introducción a las Finanzas", 35000);
const curso2 = new Curso("Curso de Criptomonedas: Inversiones y Finanzas. Bitcoins y Tecnología Blockchain", 65000);
const curso3 = new Curso("Curso de Cómo invertir y operar en la bolsa argentina online - Programa Integral", 65000);

curso1.gracias();
curso2.gracias();
curso3.gracias();

const cursos = [curso1, curso2, curso3]

for (let i = 0; i < cursos.length; i++) {
    console.log(cursos[i])
}

console.log(cursos.length)

cursos.push(new Curso("Nuevo Curso", 10000))
console.log(cursos)

cursos.unshift(new Curso("Curso al Inicio", 55000))
console.log(cursos)

let buscarCurso = prompt("Buscar Curso:");
let cursoEncontrado = cursos.find(curso => curso.titulo.toLowerCase().includes(buscarCurso.toLowerCase()));

alert("Nombre: " + cursoEncontrado.titulo + " Precio: $" + cursoEncontrado.precio);


