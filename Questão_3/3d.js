const prompt = require("prompt-sync")();

let i = 1
let grupo = Number(prompt("Digite a quantidade de pessoas no grupo: "))
let nome = prompt(`Digite o nome da pessoa ${i}: `)
let M_nome = nome
let m_nome = nome
let idade = Number(prompt(`Digite a idade da pessoa ${i}: `))
let M_idade = idade
let m_idade = idade

if(grupo == 1){
    console.log(`O nome da pessoa é: ${nome}`)
    console.log(`A idade da pessoa é: ${idade}`)
}
else{
    for(i = 2; i <= grupo; i++){
        nome = prompt(`Digite o nome da pessoa ${i}: `)
        idade = Number(prompt(`Digite a idade da pessoa ${i}: `))
        if(idade > M_idade){
            M_idade = idade
            M_nome = nome
        }
        else if(idade < m_idade){
            m_idade = idade
            m_nome = nome
        }

    }
    console.log(`O nome da pessoa mais velha é ${M_nome} e a idade é ${M_idade}`)
    console.log(`O nome da pessoa mais nova é ${m_nome} e a idade é ${m_idade}`)
}