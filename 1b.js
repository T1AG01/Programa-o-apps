const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite o primeiro valor: "));
let n2 = Number(prompt("Digite o segundo valor: "));

console.log("A soma dos números é:",n1+n2)
console.log("A subtração dos números é:",n1-n2)
console.log("A multiplicação dos números é:",n1*n2)
console.log("A divisão dos números é:",n1/n2)
console.log("O resto da divisão dos números é:",n1%n2)