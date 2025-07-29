const prompt = require("prompt-sync")();

let valor = 120
let desconto = (120 * 15)/100
let valorfinal = (valor - desconto) + 10

console.log("O pedido tem valor total igual a:",valorfinal)