function calcularEdadCanina() {
    let edadPerro = parseInt(prompt("Introduzca la edad del perro (años):"));

    let edadHumana = edadPerro * 7;
    console.log("La edad del perro en años humanos es " + edadHumana + " años");
}

calcularEdadCanina();