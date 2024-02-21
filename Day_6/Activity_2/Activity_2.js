
NumberGuesser = () => {
const randomNumber = Math.floor(Math.random() * 10) + 1;


let userGuess = prompt("Guess the number between 1 and 10:");


if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    alert("Please enter a valid number between 1 and 10.");
} else {
   
    if (parseInt(userGuess) === randomNumber) {
        alert("Congratulations! You guessed the correct number.");
    } else {
        alert(`Sorry, the correct number was ${randomNumber}.`);
    }
}
}



  