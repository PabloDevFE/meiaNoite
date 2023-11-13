let horaDisplay = document.querySelector("#hora");
let hora = 0;

let moedasDisplay = document.querySelector("#moedas");
let moeda = 0;

let clickZone = document.querySelector("#imgCenter");

let clickValue = 1;

//sistema de preço/valor
let valorUp1Display = document.querySelector("#valorUp1");
let valorUp2Display = document.querySelector("#valorUp2");
let valorUp3Display = document.querySelector("#valorUp3");
let valorUp4Display = document.querySelector("#valorUp4");

let valorUp1 = 5;
let valorUp2 = 15;
let valorUp3 = 25;
let valorUp4 = 50;

valorUp1Display.innerText = valorUp1;
valorUp2Display.innerText = valorUp2;
valorUp3Display.innerText = valorUp3;
valorUp4Display.innerText = valorUp4;

//evento de compra do upgrade + acrescimo do valor no click
let upgrades = document.querySelectorAll(".cardUpgrade");
upgrades.forEach((upgrade) => {
  upgrade.addEventListener("click", () => {
    if (upgrade.id == "upgrade1") {
      if (moeda >= valorUp1) {
        moeda -= valorUp1; //moedas são subtraidas
        valorUp1 *= 1.2; //valor é multiplicado
        clickValue += 1; //valor do click é aumentado
        valorUp1Display.innerHTML = valorUp1.toFixed(1);
      }
    } else if (upgrade.id == "upgrade2") {
      if (moeda >= valorUp2) {
        moeda -= valorUp2;
        valorUp2 *= 1.3;
        clickValue += 3;
        valorUp2Display.innerHTML = valorUp2.toFixed(1);
      }
    } else if (upgrade.id == "upgrade3") {
      if (moeda >= valorUp3) {
        moeda -= valorUp3;
        valorUp3 *= 1.4;
        clickValue += 5;
        valorUp3Display.innerHTML = valorUp3.toFixed(1);
      }
    } else if (upgrade.id == "upgrade4") {
      if (moeda >= valorUp4) {
        moeda -= valorUp4;
        valorUp4 *= 1.5;
        clickValue += 10;
        valorUp4Display.innerHTML = valorUp4.toFixed(1);
      }
    }

    moedasDisplay.innerText = moeda.toFixed(1);
  });
});

//converter o cliques para o pdrão horas, minutos e segundos
let tempoFormatado = "00:00:00";

function formatar() {
  let horas = Math.floor(hora / 3600);
  let minutos = Math.floor((hora % 3600) / 60);
  let segundos = hora % 60;

  // Formatar a saída
  tempoFormatado =
    horas.toString().padStart(2, "0") +
    ":" +
    minutos.toString().padStart(2, "0") +
    ":" +
    segundos.toString().padStart(2, "0");
}

//tempo real
function contadorDeSegundo() {
  let segundo = 1; //faz passar 1s
  hora += segundo;
  moeda += 0.1; //adiciona 0.1 moeda a cada 1s
  formatar();
  horaDisplay.innerHTML = tempoFormatado;
  moedasDisplay.innerText = moeda.toFixed(1);
}
let intervalo = setInterval(contadorDeSegundo, 1000); //faz com que a função seja executada a cada mil milissegundo (1s)

//evento de click + alteração do valor
horaDisplay.innerHTML = tempoFormatado;
moedasDisplay.innerText = moeda;
clickZone.addEventListener("click", () => {
  hora += clickValue;
  formatar();
  horaDisplay.innerHTML = tempoFormatado;

  function coinCalculate() {
    let coins = clickValue / 10;
    moeda += coins;
  }

  coinCalculate();
  moedasDisplay.innerText = moeda.toFixed(1);
});
