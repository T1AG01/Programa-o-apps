const prompt = require("prompt-sync")()

let num = Number(prompt("Digite um número: "))
let maior = num
let menor = num
let cont = 0
let soma = num
let media = soma / cont

if(num != 0){
    while(num != 0){
        num = Number(prompt("Digite um número: "))
        cont++
        soma += num
        media = soma / cont
        if(num > maior && num != 0){
            maior = num
        }
        else if(num < menor && num != 0){
            menor = num
        }   
    }
}
if(num == 0){
    console.log(media)
    console.log(maior)
    console.log(menor)
}