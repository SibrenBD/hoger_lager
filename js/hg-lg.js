
const dobbelp1 = document.querySelector(".dobbel1");
// computer score aanpassen naar autoselector

let cpRoll = "niks"
let plRoll = "niks"
let plBet
let score = 10

document.querySelector(".score").innerHTML = "score: " + score


// image



// start van de site

let ronde;

document.querySelector(".cpRoll").innerHTML += cpRoll;
document.querySelector(".plRoll").innerHTML = "player roll: " + plRoll;
document.querySelector(".turn").innerHTML = "Druk op 'start game' om het spel te starten"




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
