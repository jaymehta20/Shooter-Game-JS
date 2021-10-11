const startBtn = document.querySelector(".start-game");
const playground = document.querySelector(".playground");
const hero = document.querySelector(".hero");
const healthInfoPlayerOne = document.querySelector(".health-one");
const healthInfoPlayerTwo = document.querySelector(".health-two");
const result = document.querySelector(".result");
const currentRound = document.querySelector(".current-round");
const playerOneScore = document.querySelector(".playerOne-score");
const playerTwoScore = document.querySelector(".playerTwo-score");
const attackPlayerOne = document.querySelector(".attack-playerOne");
const attackPlayerTwo = document.querySelector(".attack-playerTwo");
const terminateBtn = document.querySelector(".terminate-btn");

const refreshPage = () => window.location.reload();
terminateBtn.addEventListener("click", refreshPage);

let playerOne = 100; //health
let playerTwo = 100;
let playerOneRoundScore = 0; // round won
let playerTwoRoundScore = 0;

let round = 1;

const attackPlayerOneResult = () => {
  playerOne = playerOne - Math.floor(Math.random() * 50);
  healthInfoPlayerOne.innerHTML = playerOne;
  if (playerOne <= 0) {
    Score();
    round++;
    currentRound.innerHTML = round;

    playerOne = 100;
  }
  if (round > 3) {
    Result();
  }
};
const attackPlayerTwoResult = () => {
  playerTwo = playerTwo - Math.floor(Math.random() * 50);
  healthInfoPlayerTwo.innerHTML = playerTwo;
  if (playerTwo <= 0) {
    Score();
    round++;
    currentRound.innerHTML = round;
    playerTwo = 100;
  }
  if (round > 3) {
    Result();
  }
};

attackPlayerOne.addEventListener("click", attackPlayerOneResult);
attackPlayerTwo.addEventListener("click", attackPlayerTwoResult);

const Score = () => {
  if (playerOne > playerTwo) {
    playerOneRoundScore++;
    playerOneScore.innerHTML = playerOneRoundScore;
  } else {
    playerTwoRoundScore++;
    playerTwoScore.innerHTML = playerTwoRoundScore;
  }
};

const Result = () => {
  if (playerOneRoundScore > playerTwoRoundScore) {
    result.innerHTML = "Player 1 won";
  }
  if (playerOneRoundScore < playerTwoRoundScore) {
    result.innerHTML = "Player 2 won";
  }
  if (playerOneRoundScore === playerTwoRoundScore) {
    result.innerHTML = "It's a tie :)";
  }
};

const toggleVisible = () => {
  hero.classList.add("visible");
  playground.classList.remove("visible");
};
startBtn.addEventListener("click", toggleVisible);
