'use strict';

// //Event listener  - wait for a certain event to happen and then react
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  // when there is no input
  if (guess <= -1) {
    //condition part gets evaluated and returns a boolean value in this case it returns a false value so "0" is returned, if user has no input value
    displayMessage('⛔ Please enter a number');
  }

  //when player wins
  else if (guess === secretNumber) {
    displayMessage('WOAH Correct Number 🎉');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Number is too High!! 📈'
          : 'Number is too Low!! 📉'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You loose 🥲');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing ....');
  document.querySelector('.score').textContent = score;
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  console.log(score);
});

//reptitive code
