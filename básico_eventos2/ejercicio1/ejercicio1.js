let frases = [
    "La primera regla de la programación: si funciona, no lo toques.",
    "El mejor tester es un pesimista compulsivo.",
    "El trabajo en informática es como abrir una piñata con los ojos vendados: nunca sabes qué sorpresas te encontrarás.", 
    "La primera regla de la programación: si funciona, no lo toques."
];

function frasesAleatorias() {
    let frase = Math.floor(Math.random() * frases.length);
    let texto = document.getElementById("texto-informatica");

    texto.textContent = frases[frase];
}

document.getElementById("ver-mas-boton").addEventListener("click", frasesAleatorias);