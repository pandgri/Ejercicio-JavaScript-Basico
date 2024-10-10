function numeroPrimo() {
    let num1 = parseInt(prompt("Introduza el primer número:"));
    let num2 = parseInt(prompt("Introduzca el segundo número:")); 

    for (let i = num1; i <= num2; i++) {
        if (esPrimo(i)) {
            console.log(i);
        }
    }

}

function esPrimo(num) {
    if (num <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true;
}

numeroPrimo();