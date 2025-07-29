const prompt = require("prompt-sync")();

let distancia = Number(prompt("Digite a distância da viagem(km): "));
let consumo = Number(prompt("Digite o consumo médio do carro(km/l): "));
let preço = Number(prompt("Digite o preço da gasolina: "));

console.log("Será preciso", distancia/consumo,"litros de combustível na viagem")
console.log("Será gasto", consumo/preço,"reais em combustível na viagem")