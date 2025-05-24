const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o lado A: ", function(aStr) {
    entrada.question("Digite o lado B: ", function(bStr) {
        entrada.question("Digite o lado C: ", function(cStr) {
            const A = parseFloat(aStr);
            const B = parseFloat(bStr);
            const C = parseFloat(cStr);

            // Verifica se os lados são positivos
            if (A <= 0 || B <= 0 || C <= 0) {
                console.log("Os lados devem ser maiores que zero.");
            }
            // Verifica se formam um triângulo com base na condição fornecida
            else if (A < B + C && B < A + C && C < A + B) {
                // Triângulo Equilátero: todos os lados iguais
                if (A === B && B === C) {
                    console.log("Triângulo Equilátero");
                }
                // Triângulo Isósceles: dois lados iguais
                else if (A === B || A === C || B === C) {
                    console.log("Triângulo Isósceles");
                }
                // Triângulo Escaleno: todos os lados diferentes
                else {
                    console.log("Triângulo Escaleno");
                }
            } else {
                console.log("Os valores fornecidos NÃO formam um triângulo.");
            }

            entrada.close();
        });
    });
});
