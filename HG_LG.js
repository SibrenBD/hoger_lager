





let nummer1 = Math.round(Math.random() * 6) + 1;
let nummer2 = Math.round(Math.random() * 6) + 1;
 
const dobbel_p_1 = document.querySelector(".dobbel_1")



console.log(nummer1);
console.log(nummer2)






function gooi() {
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
}
// overlay
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}




