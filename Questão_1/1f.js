const prompt = require("prompt-sync")();

let valor = Number(prompt("Digite o valor total da conta: "))
let pessoas = Number(prompt("Digite a quantidade de pessoas que irão dividir a conta: "))

console.log("O valor final dividido para cada pessoa da mesa será:",valor/pessoas)