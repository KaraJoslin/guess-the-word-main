const guessedLetters = document.querySelector(`.guessed-letters`);
const guessButton = document.querySelector(`.guess`);
const letterInput = document.querySelector(`.letter`);
const wordInProgress = document.querySelector(`.word-in-progress`);
const remainingGuesses = document.querySelector(`.remaining`);
const message = document.querySelector(`.message`);
const playAgainButton = document.querySelector(`.play-again`);
//console.log(playAgainButton);

const word = `magnolia`; //Default word until words are fetched


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
 const guess = letterInput.value;
 console.log(guess);
 letterInput.value = "";
});