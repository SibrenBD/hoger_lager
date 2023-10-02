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

// knoppen

const hogerBtn = document.querySelector(".btn-hoger");
hogerbtn.addEventListener("click", higher);

const lagerBtn = document.querySelector(".btn-lager");
lagerBtn.addEventListener("click", lower)

const startBtn = document.querySelector(".btn-start");
startBtn.addEventListener("click", startGame);


function higher() {
    hogerBtn.setAttribute("disabled", "")
}

function lower() {

}

function start() {

}

let cpRoll = "niks";
let plRoll = "niks";
let plBet;
let score = 10;
