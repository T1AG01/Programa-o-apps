const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número: "))

if (num % 3 == 0)(
    console.log("Esse número é múltiplo de 3")
)

else(
    console.log("Esse número não é múltiplo de 3")
)