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

// Create hint funtion 

helpMe.addEventListener("click", function(){

    // Create hint bank
    let hintBank = ["Sea animal with 8 arms", "Mythical half human sea creature", "This creature's scientifc name is Hippocampus", "Mammals of the sea", "These creatures have an entire week dedicated to them"];

    // Match the correct hint with the corresponding random word
    showHint.innerHTML = "Hint: " + hintBank[wordBank.indexOf(randomWord)];

    console.log("showHint");
});


// Create Game Reset Function
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

// Create audio function for winning 


// Create function for the scoreboard - checking/comparing wins against losses 
function scoreboard() {
    if (wordLetters.toString() == blanksCorrect.toString()) {
        wins++;
        gameReset()
        document.getElementById("trackwins").innerHTML = "  " + wins;
    }
    
    else if (remainingGuesses === 0) {
        losses++;
        gameReset()
        document.getElementById("tracklosses").innerHTML = "  " + losses;
    }

    document.getElementById("wordGuess").innerHTML = "  " + blanksCorrect.join("  ");
    document.getElementById("guesses").innerHTML = "  " + remainingGuesses;

    console.log("wins:" + wins + " | losses:" + losses + "| Letters Guessed:" + remainingGuesses)
}

// Create event to check and store player letter guess 
document.onkeyup = function (event) {
    let guesses = String.fromCharCode(event.keyCode).toLowerCase();
    compareLetters(guesses);
    scoreboard();
    document.getElementById("lettersGuessed").innerHTML = "  " + wrongGuess.join("  ");
    console.log(guesses);
}

// Start Game
gameStart()