
function login() {

    let user, pass;

    user = document.getElementById("usuario").value
    pass = document.getElementById("contraseña").value

    if (user == "Facundo" && pass == "1234" || user == "Profesor" && pass == 1234) {
        window.location = "../pages/bienvenida.html"

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Datos Incorrectos!',
        })
    }
}

const EnviarFormulario = document.getElementById("contraseña")

document.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        login()
    }
})



