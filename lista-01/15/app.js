// Sequência de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

let anterior = 0;
let atual = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci:");

for (let i = 1; i <= 10; i++) {
    console.log(anterior);

    let proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
}
