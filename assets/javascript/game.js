// Word Bank
let wordBank = ["octopus", "mermaid", "seahorse", "whale", "shark"]

// Create the empty variables
let randomWord = "";
let wordLetters = [];
let blanks = 0;
let blanksCorrect = [];
let wrongGuess =[];

// Create Scorboard variables
let wins = 0;
let losses = 0;
let remainingGuesses = 10;

// Create game start funtion 
function gameStart() {
    // Choose random word from word bank
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // Split letters of word up for player to guess each letter in new array
    wordLetters = randomWord.split("");

    // Break the length of the word up into the blanks 
    blanks = wordLetters.length;

    // Push each letter from the newly created random word split array by using a loop to push the underscore blank spot
    for (let i = 0; i < blanks; i++){
        blanksCorrect.push("_");
    }

    // Get the blanks to push through to the html document 
    document.getElementById("wordGuess").innerHTML = "  " + blanksCorrect.join("  ")
}

// Create Game Reset Function
function gameReset() {
    remainingGuesses= 10;
    wrongGuess = [];
    blanksCorrect = [];
    gameStart()
}

// Create comparison for letters entered by player against the actual word generated from wordbank 

// Create comparison function 
function compareLetters(letter) {
    let letterOfWord = false;
    for (let i = 0; i < blanks; i++) {
        if (randomWord[i] == letter) {
            letterOfWord = true;
        }
    }

    if (letterOfWord){
        for (var i = 0; i < blanks; i++) {
            if (randomWord[i] == letter) {
                blanksCorrect[i] = letter;
            }
        }
    }

    else{
        wrongGuess.push(letter);
        remainingGuesses--;

    }
}

// Create function for the scoreboard - checking/comparing wins against losses 
function scoreboard() {
    if (wordLetters.toString() == blanksCorrect.toString()){
        wins++;
        gameReset()
        document.getElementById("wins").innerHTML = " " + wins;
    }
    
    else if (remainingGuesses === 0) {
        losses++;
        gameReset()
        document.getElementById("loss").innerHTML = " " + losses;
    }
}

// Create event to check and store player letter guess 
document.onkeyup = function (event) {
    let guess = String.fromCharCode(event.keyCode).toLowerCase();
    compareLetters(guesses);
    scoreboard();
    document.getElementById("lettersGuessed").innerHTML = " " + wrongGuess.join(" ");
}

// Start Game
gameStart();