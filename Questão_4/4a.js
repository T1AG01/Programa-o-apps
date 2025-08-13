const prompt = require("prompt-sync")();

let jogos = ['Valorant', ' FIFA', ' Read Dead Redemption', ' The Last Of Us', ' Roblox']

jogos.push ('Batman: Arkham Knight')

jogos[1] = ' Minecraft'

jogos.pop()
console.log(`A lista de jogos é : ${jogos}`)
console.log(`A quantidade de itens na lista é: ${jogos.length}`)