// Word Bank
let wordBank = ["octopus", "mermaid", "seahorse", "whale", "shark"]

// Create the empty variables
let randomWord = "";
let wordLetters = [];
let blanks = 0;
let blanksCorrect = [];
let wrongGuess =[];

// Create game start funtion 
function gameStart () {
    // Choose random word from word bank
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];

    // Split letters of word up for player to guess each letter in new array
    wordLetters = randomWord.split("");

    // Break the length of the word up into the blanks 
    blanks = wordLetters.length;

    // Push each letter from the newly created random word split array by using a loop to push the underscore blank spot
    for (let i = 0, i < blanks, i++){
        blanksCorrect.push("_");
    }

    // Get the blanks to push through to the html document 
    document.getElementById("wordGuess").innerHTML = "  " + blanksCorrect.join("  ")
}