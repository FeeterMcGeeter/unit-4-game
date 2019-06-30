// ==================== PSEUDOCODING ==================== 

// I want to play the opening song when page is refreshed
// I want a random number chosen (between 19-120) at the start of every game 
// I want the buttons to start every game with a random number (between 1-12) that is hidden
// I want the user score to start at zero and increase with every button click
// I want the Wins/Losses box to display the updated win or loss total and display "You Won!" or "You Lost" 
// I want the winning or losing song to play when the user wins or loses
// I want everything but the win/loss counter to reset after each completed game

// ========== SETTING UP THE GLOBAL VARIABLES ==========

var wins = 0;                       // Win counter 
var losses = 0;                     // Loss counter

var ranNumChosen = "";              // Random number chosen for the user to reach 
var userScore = 0;                  // User's total score

var amethyst = "";                  // These crystals will update the user's score every time a "crystal" button is pressed
var emerald = "";                   // and also play a sound effect
var ruby = "";
var blueZircon = "";