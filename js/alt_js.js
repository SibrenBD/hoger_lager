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

const higherBtn = document.querySelector(".btn-higher");
higherBtn.addEventListener("click", higher);

const lowerBtn = document.querySelector(".btn-lower");
lowerBtn.addEventListener("click", lower);

const startBtn = document.querySelector(".btn-start");
startBtn.addEventListener("click", start);

// score display

const scoreDisplay = document.querySelector(".score");

function displayScore() {
  scoreDisplay.textContent = "score: ";
  scoreDisplay.textContent += score;
}

// game 


let gameStarted = false;
let currentNumber;
let prevNumber;
let playerBet;
let score = 10;

displayScore();

function higher() {
  if (gameStarted == true) {
    higherBtn.setAttribute("disabled", "disabled");
    lowerBtn.removeAttribute("disabled", "disabled");
    startBtn.removeAttribute("disabled", "disabled");
    playerBet = "higher";
  }
}

function lower() {
  if (gameStarted == true) {
    lowerBtn.setAttribute("disabled", "disabled");
    higherBtn.removeAttribute("disabled", "disabled");
    startBtn.removeAttribute("disabled", "disabled");
    playerBet = "lower";
  }
}

function start() {
  if (gameStarted == false) {
    gameStarted = true;
    startBtn.textContent = "go!";
    startBtn.setAttribute("disabled", "disabled");
    currentNumber = Math.floor(Math.random() * 6) + 1;
    imgChange();
  }
  else if (gameStarted == true) {
    submit();
    imgChange();
  }
}

function submit() {
  lowerBtn.removeAttribute("disabled", "disabled");
  higherBtn.removeAttribute("disabled", "disabled");
  startBtn.setAttribute("disabled", "disabled");
  prevNumber = currentNumber;
  currentNumber = Math.floor(Math.random() * 6) + 1;


  switch (playerBet) {
    case "higher":
      if (currentNumber > prevNumber) {
        console.log("Lesss goo");
      }
      else if (currentNumber < prevNumber) {
        console.log("Aww damn");
        score--;
        displayScore();
      }
      else if (currentNumber == prevNumber) {
        console.log("bruh");
      }
      break;
    case "lower":
      if (currentNumber < prevNumber) {
        console.log("Lesss goo");
      }
      else if (currentNumber > prevNumber) {
        console.log("Aww damn");
        score--;
        displayScore();
      }
      else if (currentNumber == prevNumber) {
        console.log("bruh");
      }
      break;
  }
  playerBet = "nothing";
}



function imgChange() {
  switch (currentNumber) {
    case 1:
      dice.src = "/images/1.png";
      break;
    case 2:
      dice.src = "/images/2.png";
      break;
    case 3:
      dice.src = "/images/3.png";
      break;
    case 4:
      dice.src = "/images/4.png";
      break;
    case 5:
      dice.src = "/images/5.png";
      break;
    case 6:
      dice.src = "/images/6.png";
      break;
  }
}

