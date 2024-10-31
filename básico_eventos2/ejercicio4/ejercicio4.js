
function toggleBox() {
    let caja = document.getElementById("box");
    let boton = document.getElementById("toggleBtn");

    if (caja.style.display === "block") {
        caja.style.display = "none";
        boton.innerHTML = "Mostrar Caja";
    } else {
        caja.style.display = "block";
        boton.innerHTML = "Ocultar Caja";
    };
}

document.getElementById("toggleBtn").addEventListener("click", toggleBox);