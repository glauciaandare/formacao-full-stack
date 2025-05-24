
const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o número de maçãs compradas: ", function(valor) {
    const quantidade = parseInt(valor);

    if (isNaN(quantidade) || quantidade <= 0) {
        console.log("Quantidade inválida.");
    } else {
        const preco = quantidade < 12 ? 0.30 : 0.25;
        const total = quantidade * preco;

        console.log(`Preço unitário: R$ ${preco.toFixed(2)}`);
        console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
    }

    entrada.close();
});
