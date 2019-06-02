// Word Bank
let wordBank = ["octopus", "mermaid", "seahorse", "whale", "shark"]

// Create the empty variables
let randomWord = "";
let lettersInWord = [];
let blanks = 0;
let blanksCorrect = [];
let wrongGuess =[];

// Create game start funtion 
function gameStart () {
    // Choose random word from word bank
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
}