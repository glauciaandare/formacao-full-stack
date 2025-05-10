
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question('Digite um número inteiro: ', (numero) => {
    numero = parseInt(numero);

    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
    } else if (numero % 2 === 0) {
        console.log(`O número ${numero} é par.`);
    } else {
        console.log(`O número ${numero} é ímpar.`);
    }

    readline.close(); 
});
