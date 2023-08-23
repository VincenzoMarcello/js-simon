//* CREO UN OGGETTO CON LA DATA DI DOMANI
const tomorrow = new Date("2023-08-24 9:30");
//* CREO UN OGGETTO CON LA DATA DI OGGI
const today = new Date();

//* PRENDO I MILLISECONDI PASSATI PER ARRIVARE A DOMANI
const tomorrowSecond = tomorrow.getTime();
//* PRENDO I MILLISECONDI PASSATI PER ARRIVARE A OGGI
const tomorrowToday = today.getTime();

//* VEDO I MILLISECONDI RESTANTI TRA OGGI E DOMANI
const restTime = tomorrowSecond - tomorrowToday;
console.log(restTime);

//* CALCOLIAMO I SECONDI I MINUTI E LE ORE
let seconds = Math.floor(restTime / 1000) % 60;
let minutes = Math.floor(restTime / (60 * 1000)) % 60;
let hours = Math.floor(restTime / (60 * 60 * 1000)) % 60;

const secondElement = document.getElementById("seconds");

setInterval(function () {
  seconds--;

  if (seconds < 0) {
    seconds = 60;
    seconds--;
  }
  if (seconds < 10) seconds = "0" + seconds;

  secondElement.innerHTML = seconds;
  console.log(hours, minutes, seconds);
}, 1000);

setInterval(function () {
  minutes--;

  if (minutes < 0) {
    minutes = 60;
    minutes--;
  }

  console.log(hours, minutes, seconds);
}, 60000);
