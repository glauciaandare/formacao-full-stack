const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;
let contador = 0;

function perguntarNumero() {
    entrada.question("Digite um número decimal (0 para sair): ", function(entradaDigitada) {
        const numero = parseFloat(entradaDigitada);

        if (isNaN(numero)) {
            console.log("Por favor, digite um número válido.");
            perguntarNumero(); // repete
        } else if (numero === 0) {
            if (contador === 0) {
                console.log("Nenhum número foi digitado.");
            } else {
                const media = soma / contador;
                console.log(`Média aritmética: ${media.toFixed(2)}`);
            }
            entrada.close();
        } else {
            soma += numero;
            contador++;
            perguntarNumero(); // continua
        }
    });
}

perguntarNumero();
