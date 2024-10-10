function fibonacci() {
    let num = parseInt(prompt("Introduzca el número de términos de la secuencia de fibonacci:"));
    
    let a = 0;
    let b = 1;
    
    for (let i = 0; i < num; i++) {
        if (i === 0) {
            console.log(a);
        } else if (i === 1) {
            console.log(b);
        } else {
            let c = a + b;
            console.log(c);
            a = b;
            b = c;
        }
    }
};



fibonacci();
