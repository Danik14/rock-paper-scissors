function computerPlay() {
  const hands = ["rock", "paper", "scissors"];
  const hand = hands[Math.floor(Math.random() * hands.length)];
  return hand;
}

function playerSelect() {
  let hand = prompt("Choose your fighter (rock, paper, scissors)");
  hand = hand.toLowerCase();
  return hand;
}

function versus() {
  const computer = computerPlay();
  const player = playerSelect();

  if (computer == player) {
    return 0;
  } else if (player == "scissors" && computer == "rock") {
    return -1;
  } else if (player == "scissors" && computer == "paper") {
    return 1;
  } else if (player == "rock" && computer == "scissors") {
    return 1;
  } else if (player == "rock" && computer == "paper") {
    return -1;
  } else if (player == "paper" && computer == "scissors") {
    return -1;
  } else if (player == "paper" && computer == "rock") {
    return 1;
  }
}

function game() {
  let computer = 0;
  let player = 0;

  while (player < 3 && computer < 3) {
    let game = versus();
    if (game == 1) {
      player++;
    } else if (game == -1) {
      computer++;
    }
    alert("Player: " + player + " Computer: " + computer);
  }

  alert(
    player > computer
      ? "You won!\n" + " Player: " + player + " Computer: " + computer
      : "You lost :( \n" + " Player: " + player + " Computer: " + computer
  );
}
