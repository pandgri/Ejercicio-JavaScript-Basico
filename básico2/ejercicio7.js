function conversorTemperatura() {
    let opcion = parseInt(prompt("¿Qué tipo de conversión deseas realizar? (1 para Celsius a Fahrenheit, 2 para Fahrenheit a Celsius):"));

    if (opcion === 1) {
        celsiusFahrenheit();
    } else if (opcion === 2) {
        fahrenheitCelsius();
    }
}; 

function celsiusFahrenheit() {
    let gradoCelsius = parseInt(prompt("Introduzca la temperatura en grados Celsius:"));
    let formulaCelsius = (gradoCelsius * 9/5) + 32;
    console.log( gradoCelsius + " grados Celsius equivalen a " + formulaCelsius + " grados Fahrenheit")
}

function fahrenheitCelsius() {
    let gradoFahrenheit = parseInt(prompt("Introduzca la temperatura en grados Fahrenheit:"));
    let formulaFahrenheit = (gradoFahrenheit - 32) * 5/9;
    console.log( gradoFahrenheit + " grados Fahrenheit equivalen a " + formulaFahrenheit + " grados Celsius")
}

conversorTemperatura();