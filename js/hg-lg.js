



const dobbelp1 = document.querySelector(".dobbel1");
// computer score aanpassen naar autoselector

let cpRoll
let plRoll


let plScore = 5;


let plBet

function hoger() {
  plBet = "hoger";
  document.querySelector(".plBet").innerHTML = "player bet: " + plBet;
}
function lager() {
  plBet = "lager";
  document.querySelector(".plBet").innerHTML = "player bet: " + plBet;
}



// start van de site

let ronde = false;


cpRoll = Math.floor(Math.random() * 6) + 1;




document.querySelector(".cpRoll").innerHTML += cpRoll;
document.querySelector(".plRoll").innerHTML = "player roll: " + plRoll;


  document.querySelector(".beurt").innerHTML = "Druk op gooien om het spel te starten"


  






function gooi() {

  if (ronde == false) {
    

    cpRoll = Math.floor(Math.random() * 6) + 1;

    switch (cpRoll) {
      case 1:
        dobbelp1.src = "/images/Dobbelsteen1.png"
        break
      case 2:
        dobbelp1.src = "/images/Dobbelsteen2.png"
        break
      case 3:
        dobbelp1.src = "/images/Dobbelsteen3.png"
        break
      case 4:
        dobbelp1.src = "/images/Dobbelsteen4.png"
        break
      case 5:
        dobbelp1.src = "/images/Dobbelsteen5.png"
        break
      case 6:
        dobbelp1.src = "/images/Dobbelsteen6.png"
    }

    document.querySelector(".cpRoll").innerHTML = "computer roll: " + cpRoll;
    
    document.querySelector(".beurt").innerHTML = "beurt: computer"

    ronde = true

  }


  else if (ronde == true) {
    

    plRoll = Math.floor(Math.random() * 6) + 1;

    switch (plRoll) {
      case 1:
        dobbelp1.src = "/images/Dobbelsteen1.png"
        break
      case 2:
        dobbelp1.src = "/images/Dobbelsteen2.png"
        break
      case 3:
        dobbelp1.src = "/images/Dobbelsteen3.png"
        break
      case 4:
        dobbelp1.src = "/images/Dobbelsteen4.png"
        break
      case 5:
        dobbelp1.src = "/images/Dobbelsteen5.png"
        break
      case 6:
        dobbelp1.src = "/images/Dobbelsteen6.png"
    }

    document.querySelector(".plRoll").innerHTML = "player roll: " + plRoll;

    document.querySelector(".beurt").innerHTML = "beurt: player"

    ronde = false

  }

  


}









// overlay
function on() {
  document.querySelector(".overlay").style.display = "block";
}

function off() {
  document.querySelector(".overlay").style.display = "none";
}
