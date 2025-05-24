const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Quantos cigarros você fuma por dia? ", function(cigarrosPorDiaStr) {
    entrada.question("Há quantos anos você fuma? ", function(anosStr) {
        const cigarrosPorDia = parseInt(cigarrosPorDiaStr);
        const anos = parseInt(anosStr);

        if (isNaN(cigarrosPorDia) || isNaN(anos) || cigarrosPorDia < 0 || anos < 0) {
            console.log("Por favor, insira apenas números válidos e positivos.");
        } else {
            const totalCigarros = cigarrosPorDia * 365 * anos;
            const minutosPerdidos = totalCigarros * 10;
            const diasPerdidos = Math.floor(minutosPerdidos / 1440); // 1440 minutos em um dia

            console.log(`Você perdeu aproximadamente ${diasPerdidos} dias de vida.`);
        }

        entrada.close();
    });
});
