let horaDisplay = document.querySelector("#hora")
let hora = 0

let moedasDisplay = document.querySelector("#moedas")
let moeda = 0

let clickZone = document.querySelector("#imgCenter")

let clickValue = 1

//evento de compra do upgrade + acrescimo do valor no click 
let upgrades = document.querySelectorAll(".cardUpgrade")
upgrades.forEach((upgrade) => {
    upgrade.addEventListener('click', () => {

        if (upgrade.id == "upgrade1") {
            clickValue += 1
        } else if (upgrade.id == "upgrade2"){
            clickValue += 3
        } else if (upgrade.id == "upgrade3"){
            clickValue += 5
        } else if (upgrade.id == "upgrade4"){
            clickValue += 10
        }
    })
})

//evento de click + alteração do valor
horaDisplay.innerHTML = hora
moedasDisplay.innerHTML = moeda
clickZone.addEventListener('click', () => {
    hora += clickValue
    horaDisplay.innerHTML = hora

    function coinCalculate() {
        let coins = clickValue/10
        moeda += coins  
    }

    coinCalculate()
    moedasDisplay.innerHTML = moeda.toFixed(1)
})






    
