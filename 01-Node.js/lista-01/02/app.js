const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question('Digite sua idade: ', function(idadeStr) {
    const idade = parseInt(idadeStr);

    if (isNaN(idade) || idade < 0) {
        console.log("Idade inválida.");
    } else if (idade <= 12) {
        console.log("Classificação: Criança");
    } else if (idade <= 17) {
        console.log("Classificação: Adolescente");
    } else if (idade <= 59) {
        console.log("Classificação: Adulto");
    } else {
        console.log("Classificação: Idoso");
    }

    entrada.close();
});

