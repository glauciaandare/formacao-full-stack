const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;
let contador = 0;

function perguntarNumero() {
    if (contador < 5) {
        entrada.question(`Digite o ${contador + 1}º número: `, function(valorDigitado) {
            const numero = parseFloat(valorDigitado);

            if (isNaN(numero)) {
                console.log("Por favor, digite um número válido.");
                perguntarNumero(); // repete a mesma iteração
            } else {
                soma += numero;
                contador++;
                perguntarNumero(); // próxima pergunta
            }
        });
    } else {
        console.log(`A soma total dos 5 números é: ${soma}`);
        entrada.close();
    }
}

perguntarNumero();
