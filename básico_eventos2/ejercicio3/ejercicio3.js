let agregarTexto = document.getElementById("newItemInput");
let boton = document.getElementById("addItemBtn");
let elementoLista = document.getElementById("itemsList");

function addItem() {
    let texto = agregarTexto.value;
    if (texto === "") {
        return
    };

    let lista = document.createElement("li");
    lista.textContent = texto;

    let botonCompletado = document.createElement("button");
    botonCompletado.innerHTML = "<span class='material-icons'>check</span>";
    botonCompletado.classList.add("completeBtn");

    let botonEliminado = document.createElement("button");
    botonEliminado.innerHTML = "<span class='material-icons'>delete</span>";
    botonEliminado.classList.add("deleteBtn");

    function completar() {
        lista.classList.toggle("completed");
    }

    function eliminar() {
        lista.remove();
    }

    botonCompletado.addEventListener("click", completar);
    botonEliminado.addEventListener("click", eliminar);

    lista.appendChild(botonCompletado);
    lista.appendChild(botonEliminado);

    elementoLista.appendChild(lista);

    agregarTexto.value = "";
}

boton.addEventListener("click", addItem);

