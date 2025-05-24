const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o peso em kg: ", function(pesoStr) {
    entrada.question("Digite a altura em metros (ex: 1,5m): ", function(alturaStr) {
        const peso = parseFloat(pesoStr);
        const altura = parseFloat(alturaStr);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            console.log("Valores inválidos. Insira números positivos.");
        } else {
            const imc = peso / (altura * altura);
            console.log(`Seu IMC é: ${imc.toFixed(2)}`);

            if (imc < 18.5) {
                console.log("Categoria: Baixo peso");
            } else if (imc < 25) {
                console.log("Categoria: Peso normal");
            } else if (imc < 30) {
                console.log("Categoria: Sobrepeso");
            } else {
                console.log("Categoria: Obesidade");
            }
        }

        entrada.close();
    });
});
