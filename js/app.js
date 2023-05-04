
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

class curso {
    constructor(titulo, precio) {
        this.titulo = titulo;
        this.precio = precio;
        this.gracias = function () { console.log("Gracias, por interesarte en el " + this.titulo) }
    }
}

const curso1 = new curso("Curso de Introducción a las Finanzas", 35000);
const curso2 = new curso("Curso de Criptomonedas: Inversiones y Finanzas. Bitcoins y Tecnología Blockchain", 65000);
const curso3 = new curso("Curso de Cómo invertir y operar en la bolsa argentina online - Programa Integral", 65000);

curso1.gracias();
curso2.gracias();
curso3.gracias();

const cursos = [curso1, curso2, curso3]

for (let i = 0; i < cursos.length; i++) {
    console.log(cursos[i])
}

console.log(cursos.length)

cursos.push("nuevo Curso al Final")
console.log(cursos)

cursos.unshift("nuevo Curso al inicio")
console.log(cursos)
