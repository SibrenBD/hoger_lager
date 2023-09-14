
let nummer1
let nummer2
 
const dobbel_p_1 = document.querySelector(".dobbel_1");
const dobbel_p_2 = document.querySelector(".dobbel_2");
// computer score aanpassen naar autoselector

let cp_score = 5;
let Pl_score = 5;


// start van de site

let ronde = false;

document.querySelector(".cp_score").innerHTML = "computer: " + cp_score;
document.querySelector(".PL_score").innerHTML = "player: " + Pl_score;

nummer1 = Math.round(Math.random() * 6) + 1;
nummer2 = Math.round(Math.random() * 6) + 1;
switch (nummer1) {
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
switch (nummer2) {
  case 1:
    dobbel_p_2.src = "/images/Dobbelsteen1.png"
    break
  case 2:
    dobbel_p_2.src = "/images/Dobbelsteen2.png"
    break
  case 3:
    dobbel_p_2.src = "/images/Dobbelsteen3.png"
    break
  case 4:
    dobbel_p_2.src = "/images/Dobbelsteen4.png"
    break
  case 5:
    dobbel_p_2.src = "/images/Dobbelsteen5.png"
    break
  case 6:
    dobbel_p_2.src = "/images/Dobbelsteen6.png"
}




function gooi() {

ronde = true

  document.querySelector(".cp_score").innerHTML = "computer: " + cp_score;
  document.querySelector(".PL_score").innerHTML = "player: " + Pl_score;

  nummer1 = Math.round(Math.random() * 6) + 1;
  nummer2 = Math.round(Math.random() * 6) + 1;
  switch (nummer1) {
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
  switch (nummer2) {
    case 1:
      dobbel_p_2.src = "/images/Dobbelsteen1.png"
      break
    case 2:
      dobbel_p_2.src = "/images/Dobbelsteen2.png"
      break
    case 3:
      dobbel_p_2.src = "/images/Dobbelsteen3.png"
      break
    case 4:
      dobbel_p_2.src = "/images/Dobbelsteen4.png"
      break
    case 5:
      dobbel_p_2.src = "/images/Dobbelsteen5.png"
      break
    case 6:
      dobbel_p_2.src = "/images/Dobbelsteen6.png"
  }
}

// overlay
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}




