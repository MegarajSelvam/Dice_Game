'use strict';

const btnNewGame = document.querySelector('.btn--new');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const diceImage = document.querySelectorAll('.dice');

const player0 = document.querySelector('.player--0');
const totalscore0 = document.querySelector('#score--0');
const currentScore0 = document.querySelector('#current--0');

const player1 = document.querySelector('.player--1');
const totalscore1 = document.querySelector('#score--1');
const currentScore1 = document.querySelector('#current--1');

const isPlayer0Active = () => player0.classList.contains('player--active');

const currentScoreEntry = function (num) {
  if (isPlayer0Active()) {
    currentScore0.textContent = Number(currentScore0.textContent) + num;
  } else {
    currentScore1.textContent = Number(currentScore1.textContent) + num;
  }
};

const totalScoreEntry = function () {
  if (isPlayer0Active()) {
    totalscore0.textContent =
      Number(currentScore0.textContent) + Number(totalscore0.textContent);
  } else {
    totalscore1.textContent =
      Number(currentScore1.textContent) + Number(totalscore1.textContent);
  }
};

const resetCurrentScore = function () {
  if (isPlayer0Active()) {
    currentScore0.textContent = 0;
  } else {
    currentScore1.textContent = 0;
  }
};

const resetScore = function () {
  if (isPlayer0Active()) {
    totalscore0.textContent = 0;
  } else {
    totalscore1.textContent = 0;
  }
};

const switchActiveUser = function () {
  if (isPlayer0Active()) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
};

const resetGame = function () {
  currentScore0.textContent = currentScore1.textContent = 0;
  totalscore0.textContent = totalscore1.textContent = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

const holdGame = function () {
  totalScoreEntry();
  resetCurrentScore();
  switchActiveUser();
};

const rollingDice = function () {
  const rolledNumber = Math.trunc(Math.random() * 6) + 1;
  console.log(rolledNumber);
  diceChangeLogic(rolledNumber);

  if (rolledNumber === 1) {
    resetCurrentScore();
    switchActiveUser();
  } else {
    currentScoreEntry(rolledNumber);
  }
};

const diceChangeLogic = function (num) {
  switch (num) {
    case 1:
      diceImage[0].classList.remove('hidden');
      diceImage[1].classList.add('hidden');
      diceImage[2].classList.add('hidden');
      diceImage[3].classList.add('hidden');
      diceImage[4].classList.add('hidden');
      diceImage[5].classList.add('hidden');
      break;
    case 2:
      diceImage[0].classList.add('hidden');
      diceImage[1].classList.remove('hidden');
      diceImage[2].classList.add('hidden');
      diceImage[3].classList.add('hidden');
      diceImage[4].classList.add('hidden');
      diceImage[5].classList.add('hidden');
      break;
    case 3:
      diceImage[0].classList.add('hidden');
      diceImage[1].classList.add('hidden');
      diceImage[2].classList.remove('hidden');
      diceImage[3].classList.add('hidden');
      diceImage[4].classList.add('hidden');
      diceImage[5].classList.add('hidden');
      break;
    case 4:
      diceImage[0].classList.add('hidden');
      diceImage[1].classList.add('hidden');
      diceImage[2].classList.add('hidden');
      diceImage[3].classList.remove('hidden');
      diceImage[4].classList.add('hidden');
      diceImage[5].classList.add('hidden');
      break;
    case 5:
      diceImage[0].classList.add('hidden');
      diceImage[1].classList.add('hidden');
      diceImage[2].classList.add('hidden');
      diceImage[3].classList.add('hidden');
      diceImage[4].classList.remove('hidden');
      diceImage[5].classList.add('hidden');
      break;
    case 6:
      diceImage[0].classList.add('hidden');
      diceImage[1].classList.add('hidden');
      diceImage[2].classList.add('hidden');
      diceImage[3].classList.add('hidden');
      diceImage[4].classList.add('hidden');
      diceImage[5].classList.remove('hidden');
      break;
  }
};

const diceHiddenLogic = function (num) {
  for (let i = 0; i < diceImage.length; i++) {
    if (i === num && !diceImage[i].classList.contains('hidden')) {
      diceImage[i].classList.add('hidden');
    } else if (diceImage[i].classList.contains('hidden')) {
      diceImage[i].classList.remove('hidden');
    }
  }
};

btnNewGame.addEventListener('click', resetGame);
btnHold.addEventListener('click', holdGame);
btnRollDice.addEventListener('click', rollingDice);

resetGame();
