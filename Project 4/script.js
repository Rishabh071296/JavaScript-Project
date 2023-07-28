const randomNumber = parseInt(math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const GuessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultparas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if (guess<1){
    alert('Please enter a number more than 1')
  }else if (guess){
    alert('Please enter a number less than 100')
  }else{
    prevGuess.push(guess)
    if(numGuess===11){
        displayGuess(guess)
        displayMessage(`Game Over..Random number was ${randomNumber}`)
        endGame()
    }else {
        displayGuess(guess)
        checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  //
}
function displayGuess(guess) {
  //
}
function newGame() {
  //
}
function endGame() {
  //
}
