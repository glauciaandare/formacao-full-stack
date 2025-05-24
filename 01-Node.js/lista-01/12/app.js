const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite um número para ver a tabuada: ", function(entradaDigitada) {
    const numero = parseInt(entradaDigitada);

    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
    } else {
        console.log(`\nTabuada do ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }

    entrada.close();
});
