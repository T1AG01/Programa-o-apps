const prompt = require("prompt-sync")();

let nome1 = prompt("Digite o primeiro nome: ");
let nome2 = prompt("Digite o segundo nome: ");
let nome3 = prompt("Digite o terceiro nome: ");

saudacao(nome1);
saudacao(nome2);
saudacao(nome3);

function saudacao(nome){
    console.log(`Olá ${nome}! Seja bem vindo(a)`);
}