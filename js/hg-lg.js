// overlay spelregels
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

// buttons

const higherBtn = document.querySelector(".btn-higher");
higherBtn.addEventListener("click", higher);

const lowerBtn = document.querySelector(".btn-lower");
lowerBtn.addEventListener("click", lower);

const startBtn = document.querySelector(".btn-start");
startBtn.addEventListener("click", start);

// Win or Lose
let playerWon;
const won = document.querySelector(".won");
const draw = document.querySelector(".draw")
const lose = document.querySelector(".lose");


function showResult() {
  switch (playerWon) {
    case true:
      won.textContent = "Je hebt gewonnen";
      break;
    case false:
      lose.textContent = "Je hebt verloren";
      break;
    case undefined:
      draw.textContent = "Gelijk spel";
      break;
  }
}

function hideResults() {
  won.textContent = "";
  lose.textContent = "";
  draw.textContent = "";
}

// score display
const scoreDisplay = document.querySelector(".score");

function displayScore() {
  scoreDisplay.textContent = "score: ";
  scoreDisplay.textContent += score;
}

// sound script
const audio = document.querySelector(".audio");
function playSound() {
  audio.play();
}

function loadSound() {
  audio.load();
}

// game 
let gameStarted = false;
let currentNumber;
let prevNumber;
let playerBet;
let score = 10;

displayScore();

function higher() {
  hideResults();
  if (gameStarted == true) {
    higherBtn.setAttribute("disabled", "disabled");
    lowerBtn.removeAttribute("disabled", "disabled");
    startBtn.removeAttribute("disabled", "disabled");
    playerBet = "higher";
  }
}

function lower() {
  hideResults();
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
    startBtn.textContent = "Submit";
    startBtn.setAttribute("disabled", "disabled");
    currentNumber = Math.floor(Math.random() * 6) + 1;
    imgChange();
  }
  else if (gameStarted == true) {
    submit();
    imgChange();
    loadSound();
    playSound();
  }
}

function submit() {
  lowerBtn.removeAttribute("disabled", "disabled");
  higherBtn.removeAttribute("disabled", "disabled");
  startBtn.setAttribute("disabled", "disabled");
  prevNumber = currentNumber;
  currentNumber = Math.floor(Math.random() * 6) + 1;

// THE CHECK

if (score === 20) {
  alert("You win");
} else if (score === 0) {
  alert("Game Over");
  window.open("index.html", "_self");
} else {
  switch (playerBet) {
    case "higher":
      if (currentNumber > prevNumber) {
        playerWon = true;
        score++;
        displayScore();
        showResult();
      } else if (currentNumber < prevNumber) {
        playerWon = false;
        showResult();
        score--;
        displayScore();
      } else if (currentNumber == prevNumber) {
        playerWon = undefined;
        showResult();
      }
      break;

    case "lower":
      if (currentNumber < prevNumber) {
        showResult();
        playerWon = true;
        score++;
        displayScore();
      } else if (currentNumber > prevNumber) {
        playerWon = false;
        showResult();
        score--;
        displayScore();
      } else if (currentNumber == prevNumber) {
        playerWon = undefined;
        showResult();
      }
      break;
  }
  playerBet = "nothing";
}
}

function imgChange() {
  switch (currentNumber) {
    case 1:
      dice.src = "./images/1.png";
      break;
    case 2:
      dice.src = "./images/2.png";
      break;
    case 3:
      dice.src = "./images/3.png";
      break;
    case 4:
      dice.src = "./images/4.png";
      break;
    case 5:
      dice.src = "./images/5.png";
      break;
    case 6:
      dice.src = "./images/6.png";
      break;
  }
}

