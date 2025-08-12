const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))


let operacao = Number(prompt(`Digite o número correspondente a operação desejada (1 para adição, 2 para subtração, 3 para multiplicação e 4 para divisão): `))



switch(operacao){
    case 1:
        function soma(num1, num2, num3, num4){
            console.log(`${num1} + ${num2} = ${num1 + num2}`)
            return true 
        }
        break
    case 2:
        function subtracao(num1, num2, num3, num4){
            console.log(`${num1} - ${num2} = ${num1 - num2}`)
            return true
        }
        break
    case 3:
        function multiplicacao(num1, num2, num3, num4){
            console.log(`${num1} x ${num2} = ${num1 * num2}`)
            return true
        }
        break
    case 4:
        function divisao(num1, num2, num3, num4){
            if(num2 == 0){
                console.log(`Operação número 1 inválida, impossível dividir por 0`)
            }
            else if(num4 == 0 && num2 != 0){
                console.log(`Operação número 2 inválida, impossível dividir por 0`)
            }
            else if(num2 != 0){
            console.log(`${num1} ÷ ${num2} = ${num1 / num2}`)
            }
            else{
                console.log(`Ambas as operações inválidas, impossível dividir por 0`)
            }
            return true
        }
        break
}