document.addEventListener("DOMContentLoaded", function() {
    
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // Code to diplay the random number
    console.log("Random Number:", randomNumber);

    const numberInput = document.getElementById("number");
    const guessButton = document.getElementById("makeguess");
    const resultSpan = document.getElementById("result");
    const guessesList = document.getElementById("guesses");

    function handleGuess() {
        const guess = parseInt(numberInput.value);

        const guessItem = document.createElement("li");
        guessItem.textContent = guess;
        guessesList.appendChild(guessItem);

        if (guess < randomNumber) {
            resultSpan.textContent = "Too small!";
            guessItem.classList.add("low");
        } else if (guess > randomNumber) {
            resultSpan.textContent = "Too big!";
            guessItem.classList.add("high");
        } else {
            resultSpan.textContent = "correct - You got it right - You are a winner!";
            guessButton.disabled = true;
        }
    }
    guessButton.addEventListener("click", handleGuess);
});
