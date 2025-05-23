const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Exibe o menu
console.log("=== MENU ===");
console.log("1 - Cadastrar");
console.log("2 - Relatorio");
console.log("3 - Sair");

entrada.question("Escolha uma opção (1, 2 ou 3): ", function(opcao) {
    switch (opcao) {
        case '1':
            console.log("Cadastre seu usuário: 😊");
            break;
        case '2':
            console.log("Escolha o Relátorio a ser impresso:");
            break;
        case '3':
            console.log("Saindo do programa...");
            break;
        default:
            console.log("Opção inválida.");
    }

    entrada.close();
});
