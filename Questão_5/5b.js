const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))
let num3 = Number(prompt("Digite o terceiro número: "))
let num4 = Number(prompt("Digite o quarto número: "))


soma(num1, num2, num3, num4)
subtracao(num1, num2, num3, num4)
multiplicacao(num1, num2, num3, num4)
divisao(num1, num2, num3, num4)

function soma(num1, num2, num3, num4){
    console.log(`${num1} + ${num2} = ${num1 + num2}`)
    console.log(`${num3} + ${num4} = ${num3 + num4}`)
    return true
}

function subtracao(num1, num2, num3, num4){
    console.log(`${num1} - ${num2} = ${num1 - num2}`)
    console.log(`${num3} - ${num4} = ${num3 - num4}`)
    return true
}

function multiplicacao(num1, num2, num3, num4){
    console.log(`${num1} x ${num2} = ${num1 * num2}`)
    console.log(`${num3} x ${num4} = ${num3 * num4}`)
    return true
}

function divisao(num1, num2, num3, num4){
    if(num2 == 0 && num4 != 0){
        console.log(`Operação número 1 inválida, impossível dividir por 0`)
        console.log(`${num3} ÷ ${num4} = ${num3 / num4}`)
    }
    else if(num4 == 0 && num2 != 0){
        console.log(`Operação número 2 inválida, impossível dividir por 0`)
        console.log(`${num1} ÷ ${num2} = ${num1 / num2}`)
    }
    else if(num4 != 0 && num2 != 0){
    console.log(`${num1} ÷ ${num2} = ${num1 / num2}`)
    console.log(`${num3} ÷ ${num4} = ${num3 / num4}`)
    }
    else{
        console.log(`Ambas as operações inválidas, impossível dividir por 0`)
    }
    return true
}