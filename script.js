let player = {
  Name: "Gudumba",
  Chips: 145,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": $" + player.Chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13 + 1);
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = cards[0] + cards[1];
  renderGame();
}
function renderGame() {
  cardsEl.textContent = `Card: `;
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = "Do you want to draw a new card";
    isAlive = true;
  } else if (sum === 21) {
    message = " You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = " You are out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card1 = getRandomCard();
    sum += card1;
    cards.push(card1);
    renderGame();
  }
}
