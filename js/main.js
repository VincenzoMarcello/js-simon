//! VARIABILI GLOBALI
//* RECUPERO GLI ELEMENTI DAL DOM CON L'ID
const secondsEl = document.getElementById("seconds");
const minutesEl = document.getElementById("minutes");
const hoursEl = document.getElementById("hours");
const daysEl = document.getElementById("days");

const interval = setInterval(countdown, 1000);
countdown();

// ! FUNZIONE CHE INIZIALIZZA IL COUNTDOWN
function countdown() {
  //* CREO UN OGGETTO CON LA DATA DI OGGI
  const now = new Date();
  //* CREO UN OGGETTO CON LA DATA DI DOMANI
  const tomorrow = new Date("2023-08-25 18:46");

  //* PRENDO I MILLISECONDI PASSATI PER ARRIVARE A OGGI
  const msNow = now.getTime();
  //* PRENDO I MILLISECONDI PASSATI PER ARRIVARE A DOMANI
  const msTomorrow = tomorrow.getTime();

  //* VEDO I MILLISECONDI RESTANTI TRA OGGI E DOMANI E LI TRASFORMO IN SECONDI
  let restTime = Math.floor((msTomorrow - msNow) / 1000);

  //* METTIAMO UN CONTROLLO PER BLOCCARE IL COUNTDOWN UNA VOLTA ARRIVATO A 0
  if (restTime <= 0) {
    clearInterval(interval);
    restTime = 0;
  }

  //* CALCOLIAMO I SECONDI I MINUTI E LE ORE
  let seconds = restTime % 60;
  let minutes = Math.floor((restTime / 60) % 60);
  let hours = Math.floor((restTime / 60 / 60) % 24);
  let days = Math.floor(restTime / 60 / 60 / 24);

  //* STAMPO NEL DOM E USO OPERATORE TERNARIO PER AGGIUNGERE LO 0
  //* QUANDO I NUMERI SONO INFERIORI DI 10
  secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
  minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
  hoursEl.innerText = hours < 10 ? "0" + hours : hours;
  daysEl.innerText = days < 10 ? "0" + days : days;
}
