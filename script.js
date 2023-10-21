let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let menssegeContainer = document.querySelector("#messege");
let messegeText = document.querySelector("#messege p");
let secondPlayer;
let twoPlayer = document.getElementById("2-players");
let playerContraIa = document.getElementById("ia-player");
let campoDeJogo = document.getElementById("container");

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

        if (secondPlayer == playerContraIa.vallue) {
          //função para executar a jogada
          computerPlay();
          player2++;
        }
      } else {
        player2++;
      }

      //verifica quem venceu
      checkWinCondition();
    }
  });
}

//evento para saber se é two players ou ia
twoPlayer.addEventListener("click", function () {
  setTimeout(() => {
    campoDeJogo.classList.remove("hide");
  }, 500);
});

playerContraIa.addEventListener("click", function () {
  setTimeout(() => {
    campoDeJogo.classList.remove("hide");
  }, 500);
});

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
function checkWinCondition() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  //horizontal
  if (
    b1.childNodes.length > 0 &&
    b2.childNodes.length > 0 &&
    b3.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if (b1Child == "x" && b2Child == "x" && b3Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b1Child == "o" && b2Child == "o" && b3Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }
  if (
    b4.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b6.childNodes.length > 0
  ) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if (b4Child == "x" && b5Child == "x" && b6Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b4Child == "o" && b5Child == "o" && b6Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }

  if (
    b7.childNodes.length > 0 &&
    b8.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b7Child == "x" && b8Child == "x" && b9Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b7Child == "o" && b8Child == "o" && b9Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }

  //vertical
  if (
    b1.childNodes.length > 0 &&
    b4.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b1Child == "x" && b4Child == "x" && b7Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b1Child == "o" && b4Child == "o" && b7Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }

  if (
    b2.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b8.childNodes.length > 0
  ) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if (b2Child == "x" && b5Child == "x" && b8Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b2Child == "o" && b5Child == "o" && b8Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b6.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b3Child == "x" && b6Child == "x" && b9Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b3Child == "o" && b6Child == "o" && b9Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }

  //diagonal
  if (
    b1.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b9.childNodes.length > 0
  ) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if (b1Child == "x" && b5Child == "x" && b9Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b1Child == "o" && b5Child == "o" && b9Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }

  if (
    b3.childNodes.length > 0 &&
    b5.childNodes.length > 0 &&
    b7.childNodes.length > 0
  ) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if (b3Child == "x" && b5Child == "x" && b7Child == "x") {
      //x venceu
      declareWinner("x");
    } else if (b3Child == "o" && b5Child == "o" && b7Child == "o") {
      //o venceu
      declareWinner("o");
    }
  }

  //deu velha
  let cont = 0;

  for (i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      cont++;
    }
  }

  if (cont == 9) {
    declareWinner("Deu Velha...");
  }
}

//limpa o jogo,declara o vencedor e atualiza o placar

function declareWinner(winner) {
  let scoreboardX = document.querySelector("#scoreboard-1");
  let scoreboardO = document.querySelector("#scoreboard-2");
  let msg = "";

  if (winner == "x") {
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
    msg = "Jogador 1 Venceu!!";
  } else if (winner == "o") {
    scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
    msg = "Jogador 2 Venceu!!";
  } else {
    msg = "Deu Velha...";
  }

  //exibir msg
  messegeText.innerHTML = msg;
  menssegeContainer.classList.remove("hide");

  //esconde msg
  setTimeout(() => {
    menssegeContainer.classList.add("hide");
  }, 3000);

  //zerar jogadas
  player1 = 0;
  player2 = 0;

  //remove x e o
  let boxesToRemove = document.querySelectorAll(".box div");

  for (let i = 0; i < boxesToRemove.length; i++) {
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }
}

//executar a logica da cpu

function computerPlay() {
  let cloneO = o.cloneNode(true);
  let cont = 0;
  let filled = 0;

  for (i = 0; i < boxes.length; i++) {
    let randNumber = Math.floor(Math.random() * 5);

    //so prenche se o filho estiver vazio
    if (boxes[i].childNodes[0] == undefined) {
      if (randNumber <= 1) {
        boxes[i].appendChild(cloneO);
        cont++;
        break;
      }
      //checa quantos estão preenchidos
    } else {
      filled++;
    }
  }

  if(cont == 0 && filled < 9){
    computerPlay();
  }
}