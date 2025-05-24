const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite um número inteiro: ", function(valor) {
    const numero = parseInt(valor);

    if (isNaN(numero)) {
        console.log("Valor inválido. Digite um número inteiro.");
    } else {
        for (let i = 1; i <= 10; i++) {
            console.log(`${i} - ${numero}`);
        }
    }

    entrada.close();
});
