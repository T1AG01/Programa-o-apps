const prompt = require("prompt-sync")();

let folha_de_pag = 0
let func = 20

for(let i = 1; i <= func; i++){
    let salario = Number(prompt("Digite o salário: "))
    folha_de_pag += salario
}

console.log(`A folha de pagamento da empresa é igual a ${folha_de_pag}`)
console.log(`A média salarial da empresa é ${folha_de_pag/func}`)
