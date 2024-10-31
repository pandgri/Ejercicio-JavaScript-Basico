let agregarTexto = document.getElementById("newTaskInput");
let elementoLista = document.getElementById("taskList");
let boton = document.getElementById("addTaskBtn");

function addTask() {

    let texto = agregarTexto.value;
    if (texto === "") {
        return
    };

    let lista = document.createElement("li");
    lista.textContent = texto;

    let botonEliminado = document.createElement("button");
    botonEliminado.innerHTML = "X";
    botonEliminado.classList.add("deleteBtn");

    function eliminar() {
        lista.remove();
    }

    botonEliminado.addEventListener("click", eliminar);

    lista.appendChild(botonEliminado);

    elementoLista.appendChild(lista);

    agregarTexto.value = "";
}

boton.addEventListener("click", addTask);