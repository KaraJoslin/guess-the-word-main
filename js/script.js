const guessedLettersElement = document.querySelector(`.guessed-letters`);
const guessButton = document.querySelector(`.guess`);
const letterInput = document.querySelector(`.letter`);
const wordInProgress = document.querySelector(`.word-in-progress`);
const remainingGuesses = document.querySelector(`.remaining`);
const message = document.querySelector(`.message`);
const playAgainButton = document.querySelector(`.play-again`);
//console.log(playAgainButton);

const word = `magnolia`; //Default word until words are fetched
const guessedLetters = [];

const placeHolder = function (word) {
    const placeHolderSymbols = [];
    for (const letter of word) {
    console.log(letter);
    placeHolderSymbols.push("●");
}
    wordInProgress.innerText = placeHolderSymbols.join("");
};

placeHolder(word);

guessButton.addEventListener("click", function (e) {
 e.preventDefault();
 message.innerText = "";
 const guess = letterInput.value;
 //console.log(guess);
 const goodGuess = validateInput(guess);
 //console.log(goodGuess);
 
 if (goodGuess) {
    makeGuess(guess);
 }
 letterInput.value = "";
});

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
   if (input.length === 0) {
    message.innerText = "Please enter a letter!"; 
    } else if (input.length > 1) {
        message.innerText = "Please enter a single letter!";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z!";
    } else {
        return input;
    }
   };

   const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
      message.innerText = "You already guessed that letter! Try again!"; 
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
   };