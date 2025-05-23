const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a nota (0 a 10): ', function(input) {
    const nota = parseFloat(input);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        console.log("Nota inválida. Digite um número entre 0 e 10.");
    } else if (nota >= 7) {
        console.log("Classificação: Aprovado");
    } else if (nota >= 5) {
        console.log("Classificação: Recuperação");
    } else {
        console.log("Classificação: Reprovado");
    }

    rl.close();
});
