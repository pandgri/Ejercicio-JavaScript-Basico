function calcularImc() {
    let peso = parseFloat(prompt("Introduzca su peso (kilogramos):"));
    let altura = parseFloat(prompt("Introduzca su altura (metros):"));

    let imc = peso / (altura * altura);
    let clasificacion;
    if (imc < 18.5) {
        clasificacion = "Bajo peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        clasificacion = "Peso normal"
    } else if (imc >= 25 && imc <= 29.9) {
        clasificacion = "Sobrepeso"
    } else {
        clasificacion = "Obesidad"
    }

    console.log("IMC: " + imc.toFixed(2) + ", Clasificación: " + clasificacion);
}

calcularImc();