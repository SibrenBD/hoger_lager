



const dobbelp1 = document.querySelector(".dobbel1");
// computer score aanpassen naar autoselector

let cpRoll
let plRoll

let plBet

let score = 0
document.querySelector(".score").innerHTML += score



// image



// start van de site

let ronde = false;


cpRoll = Math.floor(Math.random() * 6) + 1;




document.querySelector(".cpRoll").innerHTML += cpRoll;
document.querySelector(".plRoll").innerHTML = "player roll: " + plRoll;


document.querySelector(".turn").innerHTML = "Druk op gooien om het spel te starten"


function hoger() {
  plBet = "hoger";
  document.querySelector(".plBet").innerHTML = "player bet: " + plBet;

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

function lager() {
  plBet = "lager";
  document.querySelector(".plBet").innerHTML = "player bet: " + plBet;

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






  












// overlay
function on() {
  document.querySelector(".overlay").style.display = "block";
}

function off() {
  document.querySelector(".overlay").style.display = "none";
}
