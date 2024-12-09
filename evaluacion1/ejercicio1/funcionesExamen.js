// Función que comprueba si un número es "curioso"
function esCurioso(numero) {
    let suma = 0; // Variable que almacena la suma de los cubos de los dígitos del número
    let numero_copiado = numero; // Variable que hace una copia al número que se introduce en la función

    // Bucle mientras queden dígitos en la copia
    while (numero_copiado > 0) {
        let digito = numero_copiado % 10; // Variable que obtiene el último dígito de la copia del número
        suma += Math.pow(digito, 3); // Variable que va guardando la suma del cubo del dígito
        numero_copiado = parseInt(numero_copiado / 10); // Quitar el último digito
    }

    if (numero === suma) {
        // Es un número curioso
        return true;
    }

    // No es un número curioso
    return false;
}

// Función para encontrar los primeros 5 números curiosos
function numerosCuriosos() {
    let curiosos = []; // Lista para almacenar los números curiosos

    // Bucle del número 1 hasta el 1000
    for (let i = 1; i <= 1000; i++) {
        // Buscar mientras la lista no contenga 5 elementos
        if (curiosos.length < 5) {
            if (esCurioso(i)) { // Comprobar si el número es curioso
                curiosos.push(i); // Añadirlo a la lista
            }
        }
    } 

    // Mostrar la lista de números curiosos en un mensaje de alerta
    alert("Números curiosos: " + curiosos.join(", "));
    
}
