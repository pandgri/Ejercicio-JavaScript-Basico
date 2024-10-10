function calcularCosteTotal() {
    let alojamiento = parseFloat(prompt("Introduzca los gastos de alojamiento:"));
    let alimentacion = parseFloat(prompt("Introduzca los gastos de alimentación:"));
    let entretenimiento = parseFloat(prompt("Introduzca los gastos de entretenimiento:"));

    let costeTotal = alojamiento + alimentacion + entretenimiento;

    console.log("El coste total del viaje es " + costeTotal.toFixed(2) + "€");
}

calcularCosteTotal();