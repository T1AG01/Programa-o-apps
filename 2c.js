const prompt = require("prompt-sync")();

let idade = Number(prompt("Digite a sua idade: "))

if(idade <= 12){
    console.log("Você é criança")
}
else if(idade >= 13 && idade <=17){
    console.log("Você é adolescente")
}
else if(idade >= 13 && idade <= 64){
    console.log("Você é adulto")
}
else{
    console.log("Você é idoso")
}