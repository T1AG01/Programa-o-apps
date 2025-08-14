const prompt = require("prompt-sync")();

let qtdAlunos = 3;
let notas = [];
let notas7 = [];

for (let i = 0; i < qtdAlunos; i++) {
    let nome = prompt("Digite o nome do aluno: ");
    let nota = Number(prompt("Digite a nota do aluno: ")); 
    notas.push([nome, nota]);
    if (nota >= 7) {
        notas7.push([nome, nota]); 
    }
}

console.log("\nAlunos com nota maior ou igual a 7:");
for (let f = 0; f < notas7.length; f++) {
    console.log(`O aluno ${notas7[f][0]} tirou ${notas7[f][1]}`);
}
