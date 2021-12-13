function computerPlay() {
  const hands = ["rock", "paper", "scissors"];
  const hand = hands[Math.floor(Math.random() * hands.length)];
  return hand;
}

function versus(player) {
  const computer = computerPlay();

  if (computer == player) {
    return;
  } else if (player == "scissors" && computer == "rock") {
    game(-1);
  } else if (player == "scissors" && computer == "paper") {
    game(1);
  } else if (player == "rock" && computer == "scissors") {
    game(1);
  } else if (player == "rock" && computer == "paper") {
    game(-1);
  } else if (player == "paper" && computer == "scissors") {
    game(-1);
  } else if (player == "paper" && computer == "rock") {
    game(1);
  }
}

function game(game) {
  const player = document.getElementById("player");
  const computer = document.getElementById("computer");
  const result = document.getElementById("result");

  if (game == 1) {
    player.innerHTML = parseInt(player.innerHTML) + 1;
  } else {
    computer.innerHTML = parseInt(computer.innerHTML) + 1;
  }

  if (parseInt(player.innerHTML) == 5) {
    result.innerHTML = "You Won!";
    removeEventListeners();
    document.getElementById("btn-restart").classList.remove("hidden");
  } else if (parseInt(computer.innerHTML) == 5) {
    result.innerHTML = "You Lost :(";
    removeEventListeners();
    document.getElementById("btn-restart").classList.remove("hidden");
  }
}

function removeEventListeners() {
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");

  const rock1 = rock.cloneNode(true);
  const paper1 = paper.cloneNode(true);
  const scissors1 = scissors.cloneNode(true);

  rock.parentNode.replaceChild(rock1, rock);
  paper.parentNode.replaceChild(paper1, paper);
  scissors.parentNode.replaceChild(scissors1, scissors);
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => versus("rock"));
paper.addEventListener("click", () => versus("paper"));
scissors.addEventListener("click", () => versus("scissors"));
