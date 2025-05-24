const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o primeiro valor: ", function(valorDigitado01) {
    entrada.question("Digite o segundo valor: ", function(valorDigitado02) {
        const valor1 = parseFloat(valorDigitado01);
        const valor2 = parseFloat(valorDigitado02);

        if (isNaN(valor1) || isNaN(valor2)) {
            console.log("Por favor, digite apenas números.");
        } else if (valor1 === valor2) {
            console.log("Os valores não podem ser iguais.");
        } else {
            if (valor1 < valor2) {
                console.log(`Ordem crescente: ${valor1}, ${valor2}`);
            } else {
                console.log(`Ordem crescente: ${valor2}, ${valor1}`);
            }
        }

        entrada.close();
    });
});
