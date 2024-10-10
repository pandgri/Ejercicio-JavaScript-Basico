function calculateFactorial(number) {

    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i; 
    }
    return result;
}

function pedirNumero() {
    let number = parseInt(prompt("Introduzca un número no negativo para calcular el factorial:"));
    let factorial = calculateFactorial(number);
    console.log("El factorial del número " + number + " es " +factorial);
}

pedirNumero();