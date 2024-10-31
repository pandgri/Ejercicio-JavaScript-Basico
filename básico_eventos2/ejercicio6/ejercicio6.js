let agregarTexto = document.getElementById("inputName");
let elementoLista = document.getElementById("nameList");
let boton = document.getElementById("addBtn");
let botonAleatorio = document.getElementById("randomBtn");

let nombres = [];

function renderizar() {
    elementoLista.innerHTML = "";

    for (let nombre of nombres) {
        let lista = document.createElement('li');
        lista.textContent = nombre;
        elementoLista.appendChild(lista);
    };
}

function agregarNombres() {
    let nombre = agregarTexto.value;
    if (nombre !== "") {
        nombres.push(nombre);
        renderizar();
        inputName.value = "";
    }

}

function seleccionAleatoria() {
    if (nombres.length > 0) {
        let aleatorio = Math.floor(Math.random() * nombres.length);
        let nombreElegido = nombres[aleatorio];

        const nombreLista = elementoLista.childNodes[aleatorio];
        nombreLista.classList.add("selected");
        nombreLista.textContent += " - Se ha elegido: " + nombreElegido;
    }
}

boton.addEventListener("click", agregarNombres);

botonAleatorio.addEventListener("click", seleccionAleatoria);