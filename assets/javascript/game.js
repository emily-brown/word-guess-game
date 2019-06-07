// Create Word Bank
let wordBank = ["octopus", "mermaid", "seahorse", "whale", "shark"]

// Create Scorboard variables
let wins = 0;
let losses = 0;
let remainingGuesses = 10;

// Create the empty variables
let randomWord = "";
let wordLetters = [];
let blanks = 0;
let blanksCorrect = [];
let wrongGuess = [];

// Get hint variables
let helpMe = document.getElementById("hint");
let answer = document.getElementById("showHint");

// Create hint bank
let hintBank = ["Sea animal with 8 arms", "Mythical half human sea creature", "This creature's scientifc name is Hippocampus", "Mammals of the sea", "These creatures have an entire week dedicated to them"];

// Create game start funtion 
function gameStart() {
    
    // Automatically choose random word from word bank
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // Split letters of word up for player to guess each letter in word
    wordLetters = randomWord.split("");

    // Break the length of the word up into the blanks 
    blanks = wordLetters.length;

    // Push each letter from the newly created random word split array by using a loop to push the underscore blank spot to match length of word 
    for (let i = 0; i < blanks; i++) {
        blanksCorrect.push("_");
    }

    // Get the blanks to push through to the html document 
    document.getElementById("wordGuess").innerHTML = "  " + blanksCorrect.join("  ");
    
    console.log("randomWord");
    console.log("wordLetters");
    console.log("blanks");
    console.log("blanksCorrect");
    console.log("wrongGuess");
}

// Create hint function
helpMe.addEventListener("click", function(){

    // Match the correct hint with the corresponding random word
    showHint.innerHTML = "Hint: " + hintBank[wordBank.indexOf(randomWord)];

    console.log("showHint");
});


// Create Game Reset Function - resettting guesses back to 10, refresh letters guess, refresh blanks and refresh hint to match with newly generated word
function gameReset() {
    remainingGuesses = 10;
    wrongGuess = [];
    blanksCorrect = [];
    document.getElementById("showHint").innerHTML = "Hint:  ";
    gameStart();
}

// Create comparison for letters entered by player against the actual word generated from wordbank 

// Create comparison function 
function compareLetters(guessLetter) {
    let letterOfWord = false;
    for (let i = 0; i < blanks; i++) {
        if (randomWord[i] == guessLetter) {
            letterOfWord = true;
        }
    }

    if (letterOfWord) {
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == guessLetter) {
                blanksCorrect[i] = guessLetter;
            }
        }
    }

    else {
        wrongGuess.push(guessLetter);
        remainingGuesses--;

    }

    console.log(blanksCorrect);
}

// Create function for the scoreboard - checking/comparing wins against losses 
function scoreboard() {
    // Letters guessed are correct (found in the word) - player wins point
    if (wordLetters.toString() == blanksCorrect.toString()) {
        wins++;
        gameReset()
        document.getElementById("trackwins").innerHTML = "  " + wins;
    }
    // Player ran out of guesses and did not guess word correct - player gets a point against them
    else if (remainingGuesses === 0) {
        losses++;
        gameReset()
        document.getElementById("tracklosses").innerHTML = "  " + losses;
    }
    document.getElementById("wordGuess").innerHTML = "  " + blanksCorrect.join("  ");
    document.getElementById("guesses").innerHTML = "  " + remainingGuesses;

    console.log("wins:" + wins + " | losses:" + losses + "| Letters Guessed:" + remainingGuesses)
}

// Create alphabet array 
let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Create event function to check and store player letter guess 
document.onkeyup = function (event) {
    let guesses = String.fromCharCode(event.keyCode).toLowerCase();
    // allow guesses to only count if a letter is pressed from keyboard, nothing else
    if (alpha.indexOf(guesses) >-1) {
    compareLetters(guesses);
    scoreboard();
    document.getElementById("lettersGuessed").innerHTML = "  " + wrongGuess.join("  ");
    console.log(guesses);
    }
}

// Execute Game
gameStart()