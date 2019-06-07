# word-guess-game

### Link to Live Game: https://emily-brown.github.io/word-guess-game/

## Game Objective:
Guess the correct word to gain points.

### Game Instructions:
1. Begin the game by pressing any letter to guess the word - note that only letters will be recongnized as guesses, all other symbols/characters will be ignored
2. When you guess a letter correctly, the letter(s) will appear in the blanks of the word. 
3. If you guess incorrectly, the incorrect letter will be added to the "Wrong Letters" section and your "Number of Guesses Left" will decrease. You have 10 guesses. 
4. If you guess the correct letter within the 10 guesses you have, you earn a point. If you guess incorrectly all 10 guesses, you lose a point. 
  #### Tips:
  If you get stuck, hit the "Help!" button and a hint will appear. 
  
## Tools/Languages Used:
```
  -- HTML/CSS
  -- Javascript
  -- Bootstrap
  -- Google Fonts 
```

## Game Features 

##### Main Game Container
```
Functionality:
  - Randomly generated word from the word bank will be chosen and appear as blanks on the screen for the player to guess.
  - Player begins guessing by hitting any letter to guess the word (only letters will be recongized as guesses).
  - If player gets stuck, they can click the "Help!" button in the corner of main game frame and a corresponding word hint will appear.
```
##### Guessed Container 
```
Functionality:
  - Any wrong letters guessed will be captured in the "Wrong Guess" section and "Number of Guesses Left" will decrease.
  - Player has 10 guesses. 
```
##### Scoreboard Container 
```
Functionality:
  - If the player guesses the word correctly within their 10 guesses, they win a point and the point is captured in the "Wins" section fo the scorboard.
  - If the player runs out of all 10 guesses, they lose a point and is captured in the "Losses" section of the scoreboard.
```
##### Either win or lose 
```
  - Once either a win or lose point is captured, the game resets to choose new word from word bank, hint is cleared and guesses remaining is refreshed.
  - Game will continue to circulate through the words as long as player likes. 
```
  


