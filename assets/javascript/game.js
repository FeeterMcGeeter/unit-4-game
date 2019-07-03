// ==================== PSEUDOCODING ==================== 

// I want to play the opening song when page is refreshed
// I want a random number chosen (between 19-120) at the start of every game 
// I want the buttons to start every game with a random number (between 1-12) that is hidden
// I want the user score to start at zero and increase with every button click
// I want the Wins/Losses box to display the updated win or loss total and display "You Won!" or "You Lost" 
// I want the winning or losing song to play when the user wins or loses
// I want everything but the win/loss counter to reset after each completed game

$(document).ready(function() {                  // This will run once the document is ready

    // ========== SETTING UP THE VARIABLES ==========

    var wins = 0;                               // Win counter 
    var losses = 0;                             // Loss counter
    var ranNumChosen = "";                      // Random number chosen for the user to reach 
    var userScore = 0;                          // User's total score

    // ===== RANDOM NUMBER GENERATES BETWEEN MIN AND MAX SET =====

    function numberGenerated(min, max) {
        return Math.floor(Math.random() * (max-min+1) + min);
    }

    // ===== ASSIGNING THE RANDOM NUMBER CHOSEN FOR THE GAME =====

    function gamePlay() {
        ranNumChosen = numberGenerated(19, 120);
        userScore = 0;
        var crystalArray = [$("#ltamethyst"), $("#emerald"), $("#ruby"), $("#zircon")];
    
        // ===== ASSIGNING A RANDOM NUMBER TO EACH CRYSTAL BUTTON

        for (var i = 0; i < crystalArray.length; i++) {
            crystalArray[i].attr("data-image-src", numberGenerated(1, 12));
        };

        // ===== DOM MANIPULATION =====

        $("#random-number").html(ranNumChosen); // Displays the random number for the user to target
        $("#wins").html("Wins: " + wins);       // Displays the win total 
        $("#losses").html("Losses: " + losses); // Displays the loss total
        $("#user-score").html(userScore);       // Displays the user's current score
    }

    gamePlay();                                 // Starts the game

    $(".image").on("click", function() {        // Creates the button click function
        userScore += parseInt($(this).attr("data-image-src"));
        $("#user-score").html(userScore);

        // ===== AUDIO FOR THE BUTTON CLICKS =====

        var purpleSound = new Audio("assets/audio/btnclick.wav");
        var emeraldSound = new Audio("assets/audio/btnclick2.mp3");
        var rubySound = new Audio("assets/audio/btnclick3.wav");
        var blueSound = new Audio("assets/audio/btnclick4.wav");

        $("#ltamethyst").click(e => purpleSound.play());
        $("#emerald").click(e => emeraldSound.play());
        $("#ruby").click(e => rubySound.play());
        $("#zircon").click(e => blueSound.play());

        // ===== IF/ELSE IF STATEMENT TO DETERMINE WHETHER THE USER WINS OR LOSES =====
        
        if(userScore === ranNumChosen) {
            
            wins++;
            gamePlay();
        } else if (userScore > ranNumChosen) {
            losses++;

            gamePlay();
        }
    })
}) 





