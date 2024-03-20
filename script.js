'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '😃 Correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log((document.querySelector('.guess').value = 23));

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //   console.log(guess, typeof guess);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage('⛔️ NO number');
  }
  // When Player wins
  else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Hurray😃You Won';
    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    Number((document.querySelector('.highscore').value = score));
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  }

  //When input is higher
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈 Too High';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }

//When input is lower
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📉 Too Low';
//       score--;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 2) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
