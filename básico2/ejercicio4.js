function precioFinal() {
    let precioOriginal = parseFloat(prompt("Introduzca el precio original del producto:"));
    let porcentajeDescuento = parseFloat(prompt("Introduzca el porcentaje de descuento:"));

    let descuento = (precioOriginal * porcentajeDescuento) / 100;
    let precioFinal = precioOriginal - descuento;
    console.log("El precio final del producto después de aplicar un descuento del " + porcentajeDescuento + "% es: " + precioFinal + " euros.");
}

precioFinal();