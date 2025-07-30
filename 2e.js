const prompt = require("prompt-sync")();

let num = Number(prompt("Digite o número: "))
let maior = num
let menor = num

for(let i = 0; i < 4; i++){
    let num = Number(prompt("Digite o número: "))
    if(num > maior){
        maior = num
        }
    if(num < menor){
        menor = num    
        }
}
console.log(`O maior número é ${maior}`)
console.log(`O menor número é ${menor}`)