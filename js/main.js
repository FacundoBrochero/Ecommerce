const Cursos = [
    {
        id: "curso - intro",
        nombre: "Curso de Introducción a las Finanzas",
        precio: 35000,
        duracion: 2 + " meses",
        imagen: "../img/introduccion a las finanzas.jpg",
        detalle: `En este curso aprenderás a manejar tus finanzas de manera efectiva para lograr sus objetivos económicos
        a largo plazo. A lo largo del mismo, se explorarán los fundamentos de las finanzas personales, desde el 
        concepto de riqueza y los ingresos pasivos, hasta la inversión en el mercado de valores. También se 
        discutirán temas clave como el presupuesto y el ahorro, deudas y tasa de interés, renta fija y renta 
        variable.`

    },
    {
        id: "curso - invertir",
        nombre: "Curso de Cómo operar en la bolsa argentina",
        precio: 65000,
        duracion: 5 + " meses",
        imagen: "../img/operar en bolsa.jpg",
        detalle: `Conocer los diversos activos e instrumentos de inversión que existen para poder invertir en la 
        bolsa argentina, para poder lograr que nuestro dinero rinda más y no se devalúe con el tiempo.
        Por eso creamos este programa integral de inversiones, para que todos aquellos alumnos que se 
        inscriban aprendan las diferentes nociones sobre la economía argentina y los activos e instrumentos 
        bursátiles que existen para poder generar inversiones.`
    },

    {
        id: "curso - cripto",
        nombre: "Curso de Criptomonedas",
        precio: 45000,
        duracion: 3 + " meses",
        imagen: "../img/criptomonedas.jpg",
        detalle: `Este curso Introductorio, que no requiere conocimientos previos, es para todos aquellos
        interesados en entender qué es y cómo funciona Bitcoin, la primer Criptomoneda. Buscaremos
        entender qué es lo que motivó su aparición en el mundo y cuál es el potencial que las criptomonedas
        tienen para cambiar para siempre la forma en la que utilizamos el dinero, ahorramos e invertimos las
        personas, así como casos de uso en el mundo actual.`
    }
]

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

cargarCursos();


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

