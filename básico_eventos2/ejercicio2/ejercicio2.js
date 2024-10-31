let frases = [
    "La primera regla de la programación: si funciona, no lo toques.",
    "El mejor tester es un pesimista compulsivo.",
    "El trabajo en informática es como abrir una piñata con los ojos vendados: nunca sabes qué sorpresas te encontrarás.",
    "La primera regla de la programación: si funciona, no lo toques."
];

let colores = [
    "#ff0000", // Rojo
    "#00ff00", // Verde
    "#0000ff", // Azul
    "#ff00ff", // Magenta
    "#00ffff", // Cyan
    "#ff8000", // Naranja
    "#8000ff", // Morado
    "#00ff80", // Verde claro
    "#ff0080", // Rosa
    "#80ff00", // Verde lima
    "#0080ff", // Azul claro
    "#ffbf00", // Amarillo oscuro
    "#bf00ff", // Violeta oscuro
    "#00ffbf", // Turquesa
    "#bf00ff", // Púrpura
    "#00bfff", // Azul claro
    "#ff00bf", // Magenta oscuro
    "#80ff80", // Verde claro pastel
    "#ff80ff", // Rosa pastel
    "#80ffff" // Cian claro
];

function frasesAleatorias() {
    let frase = Math.floor(Math.random() * frases.length);
    let texto = document.getElementById("texto-informatica");
    let color = Math.floor(Math.random() * colores.length);
    let colorAleatorio = colores[color];
    let boton = document.getElementById("ver-mas-boton");

    texto.textContent = frases[frase];
    texto.style.color = colorAleatorio;
    boton.style.backgroundColor = colorAleatorio;

}

document.getElementById("ver-mas-boton").addEventListener("click", frasesAleatorias);