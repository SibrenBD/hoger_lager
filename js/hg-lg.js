
const dobbelp1 = document.querySelector(".dobbel1");
// computer score aanpassen naar autoselector

let cpRoll = "niks";
let plRoll = "niks";
let plBet;
let score = 10;

let time;


// image



// start van de site

let ronde;

document.querySelector(".cpRoll").innerHTML += cpRoll;
document.querySelector(".plRoll").innerHTML = "player roll: " + plRoll;
document.querySelector(".turn").innerHTML = "Druk op 'start game' om het spel te starten"
document.querySelector(".score").innerHTML = "score: " + score

// ronde wisseling

function turnSwitch() {

  if (ronde == false) {

    cpRoll = Math.floor(Math.random() * 6) + 1;

    switch (cpRoll) {
      case 1:
        dobbelp1.src = "/images/1.png"
        break
      case 2:
        dobbelp1.src = "/images/2.png"
        break
      case 3:
        dobbelp1.src = "/images/3.png"
        break
      case 4:
        dobbelp1.src = "/images/4.png"
        break
      case 5:
        dobbelp1.src = "/images/5.png"
        break
      case 6:
        dobbelp1.src = "/images/6.png"
    }

    document.querySelector(".cpRoll").innerHTML = "computer roll: " + cpRoll;
    
    document.querySelector(".turn").innerHTML = "beurt: computer"

    ronde = true

  }
  else if (ronde == true) {
    

    plRoll = Math.floor(Math.random() * 6) + 1;

    if (plRoll > cpRoll) {
      score += 1;
    }
    else if (plRoll < cpRoll){
      score -= 1;
    }
    
    document.querySelector(".score").innerHTML = "score: " + score

    switch (plRoll) {
      case 1:
        dobbelp1.src = "/images/1.png"
        break
      case 2:
        dobbelp1.src = "/images/2.png"
        break
      case 3:
        dobbelp1.src = "/images/3.png"
        break
      case 4:
        dobbelp1.src = "/images/4.png"
        break
      case 5:
        dobbelp1.src = "/images/5.png"
        break
      case 6:
        dobbelp1.src = "/images/6.png"
    }

    document.querySelector(".plRoll").innerHTML = "player roll: " + plRoll;

    document.querySelector(".turn").innerHTML = "beurt: player"

    
    ronde = false

  }
}

// knoppen hoger en lager

function hoger() {
  hogerBtn.setAttribute("disabled", "disabled");
  if (ronde != undefined) {
    plBet = "hoger";

    turnSwitch()
  }

}

function lager() {
  
  if (ronde != undefined) {
    plBet = "lager";
    
    turnSwitch()
  }

}

<<<<<<< HEAD
=======

>>>>>>> 104eb7dfbc489694ea6efdcdb17abf8de76492a8
function startGame() {
  document.querySelector(".btn-start").remove();
  ronde = false

  turnSwitch()
}

// overlay
function on() {
  document.querySelector(".overlay").style.display = "block";
}

function off() {
  document.querySelector(".overlay").style.display = "none";
}
