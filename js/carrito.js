let cursosEnCarrito = localStorage.getItem("cursos-en-carrito");
cursosEnCarrito = JSON.parse(cursosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoCursos = document.querySelector("#carrito-cursos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll("#carrito-producto-eliminar")
const botonVaciar = document.querySelector("#carrito-acciones-vaciar")
const contenedorTotal = document.querySelector("#total")
const botonComprar = document.querySelector("#carrito-acciones-comprar")
const tituloTotal = document.querySelector(".carrito-acciones-total")
const tituloCarrito = document.querySelector(".titulo-principal")

function cargarCursosEnCarrito() {
    if (cursosEnCarrito && cursosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled")
        contenedorCarritoCursos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");




        contenedorCarritoCursos.innerHTML = "";

        cursosEnCarrito.forEach(curso => {
            const div = document.createElement("div");
            div.classList.add("carrito-curso");
            div.innerHTML = `
            <img src="${curso.imagen}" alt="${curso.nombre}" />
                <div class="carrito-producto-nombre">
                <small>Titulo</small>
                <h3>${curso.nombre}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                <small>cantidad</small>
                <p>${curso.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                <small>precio</small>
                <p>$${curso.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                <small>subtotal</small>
                <p>$${curso.precio * curso.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${curso.id}">
                <i class="bi bi-trash3"></i>
                </button>
            </div>
        `;
            contenedorCarritoCursos.append(div);

        });


    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoCursos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        botonVaciar.classList.add("disabled")
        contenedorTotal.classList.add("disabled")
        botonComprar.classList.add("disabled")
        tituloTotal.classList.add("disabled")
        tituloCarrito.classList.add("disabled")


    }
    actualizarBotonesEliminar();
    actualizarTotal()
}

cargarCursosEnCarrito()


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = cursosEnCarrito.findIndex(curso => curso.id === idBoton);

    cursosEnCarrito.splice(index, 1);
    cargarCursosEnCarrito();

    localStorage.setItem("cursos-en-carrito", JSON.stringify(cursosEnCarrito));

}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    cursosEnCarrito.length = 0;
    localStorage.setItem("cursos-en-carrito", JSON.stringify(cursosEnCarrito));
    cargarCursosEnCarrito();
}

function actualizarTotal() {
    const totalCalculado = cursosEnCarrito.reduce((acc, curso) => acc + (curso.precio * curso.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    cursosEnCarrito.length = 0;
    localStorage.setItem("cursos-en-carrito", JSON.stringify(cursosEnCarrito));

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoCursos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");

} 