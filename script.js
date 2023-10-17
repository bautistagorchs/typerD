const words = [
  "californication",
  "plataforma5",
  "black",
  "summer",
  "flea",
  "aeroplane",
  "peppers",
  "unlimited",
  "arcadium",
  "love",
  "getaway",
  "stadium",
  "quixoticelixer",
  "quarter",
  "snow",
  "dylan",
  "zephyr",
  "funky",
  "chili",
  "control",
  "phone",
  "machine",
  "calendar",
  "sound",
  "person",
  "patrol",
  "flying",
  "thunder",
  "characters",
  "consistency",
  "detected",
  "personalization",
  "support",
];
// contador y puntuacion
let score = 0;
let time = 10;

//       VARIABLES HTML  //
const input = document.querySelector("input");
const showWord = document.querySelector("#randomWord");
const button = document.querySelector("button");
const seconds = document.querySelector("#timeSpan");
const timeContainer = document.querySelector(".time-container");
const points = document.querySelector("#score");
const textScore = document.querySelector(".score-container");
const pScore = document.querySelector(".score-container");
const parrafo = document.querySelector("p");
let timeInterval;
showWord.textContent = randomWordFn();
points.textContent = score;

//       FUNCIONES      //
function randomWordFn() {
  let randomNum = Math.floor(Math.random() * words.length);
  let randomWord = words[randomNum];
  showWord.textContent = randomWord;
  return randomWord;
}

function actualizarTiempo() {
  seconds.textContent = time;
  if (time === 0) {
    gameOver();
    // frenar
    clearInterval(timeInterval);
  }
  return time--;
}

function gameOver() {
  // dejar en blanco palabra random
  showWord.textContent = "";
  // cambiar texto a perdiste
  parrafo.textContent = "¡Se te acabo el tiempo!";
  // mostrar puntaje
  pScore.textContent = "Tu puntaje final es " + score;
  // mostrar boton
  button.style.display = "block";
}

function reset() {
  time = 10;
  score = 0;
  points.textContent = score;
}

function match() {
  input.value = "";
  score++;
  time += 1;
  points.textContent = score;
}
timeInterval = setInterval(actualizarTiempo, 1000);

//      EVENTOS     //

button.addEventListener("click", () => {
  reset();
  randomWordFn();
});

input.addEventListener("keyup", () => {
  if (input.value === showWord.textContent) {
    randomWordFn();
    match();
  }
});
