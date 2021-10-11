const startBtn = document.querySelector(".start-game");
const visible = document.querySelector(".home");
const heroContent = document.querySelector(".hero-content");
const healthInfoPlayerOne = document.querySelector(".health-one");
const healthInfoPlayerTwo = document.querySelector(".health-two");
const result = document.querySelector(".result");
const currentRound = document.querySelector(".current-round");
const playerOneScore = document.querySelector(".playerOne-score");
const playerTwoScore = document.querySelector(".playerTwo-score");
const attackPlayerOne = document.querySelector(".attack-playerOne");
const attackPlayerTwo = document.querySelector(".attack-playerTwo");
const terminateBtn = document.querySelector(".terminate-btn");

const refershPage = () => window.location.reload();
terminateBtn.addEventListener("click", refershPage);

let playerOne = 100; //health
let playerTwo = 100;
let playerOneDefaultScore = 0; // round won
let playerTwoDefaultScore = 0;

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
    playerOneDefaultScore++;
    playerOneScore.innerHTML = playerOneDefaultScore;
  } else {
    playerTwoDefaultScore++;
    playerTwoScore.innerHTML = playerTwoDefaultScore;
  }
};

const Result = () => {
  if (playerOneDefaultScore > playerTwoDefaultScore) {
    result.innerHTML = "Player 1 won";
  } else {
    result.innerHTML = "Player 2 won";
  }
};
console.log(round);

const toggleVisible = () => {
  heroContent.classList.add("visible");
  visible.classList.remove("visible");
};
startBtn.addEventListener("click", toggleVisible);
