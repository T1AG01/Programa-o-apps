const prompt = require("prompt-sync")();

let sexo = prompt("Digite o seu sexo (M/F): ")

if(sexo == "M" || sexo =="m"){
    let idade = Number(prompt("Digite a sua idade: "))
    if(idade >= 18){
        console.log("Alistamento obrigatório")
    }
    else{
        console.log("Alistamento ainda não obrigatório por conta da idade")
    }
}
else{
    console.log("Alistamento não obrigatório por conta do sexo")
}