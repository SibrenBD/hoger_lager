



const dobbel_p_1 = document.querySelector(".dobbel_1");
// computer score aanpassen naar autoselector

let cp_roll
let pl_roll


let Pl_score = 5;


let pl_bet

function hoger() {
  pl_bet = "hoger";
  document.querySelector(".pl_bet").innerHTML = "player bet: " + pl_bet;
}
function lager() {
  pl_bet = "lager";
  document.querySelector(".pl_bet").innerHTML = "player bet: " + pl_bet;
}



// start van de site

let ronde = false;

if (ronde == false) {
  cp_roll = Math.floor(Math.random() * 6) + 1;

  switch (cp_roll) {
    case 1:
      dobbel_p_1.src = "/images/Dobbelsteen1.png"
      break
    case 2:
      dobbel_p_1.src = "/images/Dobbelsteen2.png"
      break
    case 3:
      dobbel_p_1.src = "/images/Dobbelsteen3.png"
      break
    case 4:
      dobbel_p_1.src = "/images/Dobbelsteen4.png"
      break
    case 5:
      dobbel_p_1.src = "/images/Dobbelsteen5.png"
      break
    case 6:
      dobbel_p_1.src = "/images/Dobbelsteen6.png"
  }
}

document.querySelector(".cp_roll").innerHTML = "computer roll: " + cp_roll;
document.querySelector(".pl_roll").innerHTML = "player roll: " + pl_roll;








function gooi() {
  if (ronde == false) {
    
    ronde = true

    if (pl_bet != undefined) {
      pl_roll = Math.floor(Math.random() * 6) + 1;

      switch (pl_roll) {
        case 1:
          dobbel_p_1.src = "/images/Dobbelsteen1.png"
          break
        case 2:
          dobbel_p_1.src = "/images/Dobbelsteen2.png"
          break
        case 3:
          dobbel_p_1.src = "/images/Dobbelsteen3.png"
          break
        case 4:
          dobbel_p_1.src = "/images/Dobbelsteen4.png"
          break
        case 5:
          dobbel_p_1.src = "/images/Dobbelsteen5.png"
          break
        case 6:
          dobbel_p_1.src = "/images/Dobbelsteen6.png"
      }

      document.querySelector(".pl_roll").innerHTML = "player roll: " + pl_roll;
      document.querySelector(".pl_bet").innerHTML = "player bet: " + pl_bet;
    }
  






  }
  else {
    ronde = false
  }
}









// overlay
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
