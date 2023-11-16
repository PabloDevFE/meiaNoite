let horaDisplay = document.querySelector("#hora");
let hora = 0;

let moedasDisplay = document.querySelector("#moedas");
let moeda = 10;

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
    function purchase(a, b, c ) {
      if (moeda >= a) {
        moeda -= a; //moedas são subtraidas 
        a *= 1.2  //valor é multiplicado
        clickValue += c;  //valor do click é aumentado     
        b.innerHTML = a.toFixed(1); 
        return a
      }
    }

    if (upgrade.id == "upgrade1") {
      valorUp1 = purchase(valorUp1, valorUp1Display,1)
    } else if (upgrade.id == "upgrade2") {
      valorUp2 = purchase(valorUp2, valorUp2Display,3)
    } else if (upgrade.id == "upgrade3") {
      valorUp3 = purchase(valorUp3, valorUp3Display,5)
    } else if (upgrade.id == "upgrade4") {
      valorUp4 = purchase(valorUp4, valorUp4Display,10)
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
