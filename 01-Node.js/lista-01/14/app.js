const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite um número inteiro não negativo: ", function(entradaDigitada) {
    const numero = parseInt(entradaDigitada);

    if (isNaN(numero) || numero < 0) {
        console.log("Por favor, digite um número inteiro não negativo.");
    } else {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        console.log(`O fatorial de ${numero} é: ${fatorial}`);
    }

    entrada.close();
});
