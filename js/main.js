let Cursos = [];

fetch("../js/cursos.json")
    .then(response => response.json())
    .then(data => {
        Cursos = data;
        cargarCursos(Cursos);
    })

const contenedorCursos = document.querySelector("#contenedor-cursos");
let botonesAgregar = document.querySelectorAll(".btn");
const numerito = document.querySelector(".numerito");



function cargarCursos() {

    contenedorCursos.innerHTML = "";

    Cursos.forEach(curso => {

        const div = document.createElement("div");
        div.classList.add("curso");
        div.innerHTML =
            ` <img src="${curso.imagen}" alt="${curso.nombre}" />
        <h3>${curso.nombre}</h3>
        <p>
            ${curso.detalle}
        </p>
        <div class="precio">
            <p>$${curso.precio}</p>
        </div>
        <button type="button" class="btn btn-dark" id="${curso.id}">Agregar al carrito</button>
    </div>        
        `;

        contenedorCursos.append(div);

    })

    actualizarBtnAgregar()

}




function actualizarBtnAgregar() {
    botonesAgregar = document.querySelectorAll(".btn");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);

    });
};

let cursosEnCarrito;

let cursosEnCarritoLS = localStorage.getItem("cursos-en-carrito");


if (cursosEnCarritoLS) {
    cursosEnCarrito = JSON.parse(cursosEnCarritoLS);
    actualizarNumerito()
} else {
    cursosEnCarrito = [];
}

function agregarAlCarrito(e) {
    Toastify({
        text: "Curso Agregado",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top   ", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #96c93d,#00b09b)",
            borderRadius: "1rem",
            textTransform: "uppercase",
            color: "black",
            fontSize: "1.5rem",
        },
        onClick: function () { } // Callback after click
    }).showToast();

    const idBoton = e.currentTarget.id;
    const cursoAgregado = Cursos.find(curso => curso.id === idBoton);


    if (cursosEnCarrito.some(curso => curso.id === idBoton)) {

        const index = cursosEnCarrito.findIndex(curso => curso.id === idBoton);
        cursosEnCarrito[index].cantidad++;

    } else {
        cursoAgregado.cantidad = 1;
        cursosEnCarrito.push(cursoAgregado);


    }
    actualizarNumerito();

    localStorage.setItem("cursos-en-carrito", JSON.stringify(cursosEnCarrito));
}



function actualizarNumerito() {

    let nuevoNumerito = cursosEnCarrito.reduce((acc, curso) => acc + curso.cantidad, 0);
    numerito.innerText = nuevoNumerito;

}

