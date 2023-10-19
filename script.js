let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let menssegeContainer = document.querySelector("#messege");
let messegeText = document.querySelector("#messege p");
let secondPlayer;

//contador de jogadas
let player1 = 0;
let player2 = 0;

//add event click nos boxes
for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", () => {

    let el = checkEl(player1, player2);

    //verifica se ja tem x ou o no box
    if (boxes[i].childNodes.length == 0) {
      let cloneEl = el.cloneNode(true);

      boxes[i].appendChild(cloneEl);

      //computar jogada
      if (player1 == player2) {
        player1++;
      } else {
        player2++;
      }
    }
  });
}


//verifica quem vai jogar
function checkEl(player1, player2) {

  if (player1 == player2) {
    //x
    el = x;
  } else {
    //o
    el = o;
  }
  return el;
}
