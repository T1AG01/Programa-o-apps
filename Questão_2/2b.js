const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite o número: "))

if(n1 % 2 == 0){
    console.log("O número é par")
}
else{
    console.log("O número é impar")
}