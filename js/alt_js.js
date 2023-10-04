// overlay

const rulesBtn = document.querySelector(".rules");
rulesBtn.addEventListener("click", on);

const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", off);

function on() {
  document.querySelector(".overlay").style.display = "block";
}

function off() {
  document.querySelector(".overlay").style.display = "none";
}

// img

const dice = document.querySelector(".dice");

// knoppen

const hogerBtn = document.querySelector(".btn-hoger");
hogerBtn.addEventListener("click", higher);

const lagerBtn = document.querySelector(".btn-lager");
lagerBtn.addEventListener("click", lower)

const startBtn = document.querySelector(".btn-start");
startBtn.addEventListener("click", start);


let gameStarted = false;

let currentNumber;
let plBet;
let score = 10;

function higher() {
  if (gameStarted == true) {
    hogerBtn.setAttribute("disabled", "disabled");
    lagerBtn.removeAttribute("disabled", "disabled");
  }
}

function lower() {
  if (gameStarted == true) {

    lagerBtn.setAttribute("disabled", "disabled");
    hogerBtn.removeAttribute("disabled", "disabled");
  }
}

function start() {
  if (gameStarted == false) {
    currentNumber = Math.floor(Math.random() * 6) + 1
    console.log(currentNumber);
    gameStarted = true;
    startBtn.textContent = "go!";
  }
  else if (gameStarted == true) {
    currentNumber = Math.floor(Math.random() * 6) + 1
    console.log(currentNumber);
    submit();
  }
}

function submit() {
  lagerBtn.removeAttribute("disabled", "disabled");
  hogerBtn.removeAttribute("disabled", "disabled");
}

function imgChange() {
  switch (currentNumber) {
    case 1:
      dice.src = "images/1.png"
      break;
    case 2:
      dice.src = "images/2.png"
    case 3:
      dice.src = "images/1.png"
      break;
    case 4:
      dice.src = "images/2.png"
  }
}