// ### Option One: CrystalsCollector Game (Recommended)

// ![Crystal Collector](Images/1-CrystalCollector.jpg)

// 1. [Watch the demo](homework_demos/crystalsCollector_demo.mp4).

// 2. The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

// 3. Here's how the app works:

//    * There will be four crystals displayed as buttons on the page.

//    * The player will be shown a random number at the start of the game.

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



  var wins = 0;
  
  var losses = 0;

  var yourTotalScore = [];

  var firstCrystalNum = [];

  var secondCrystalNum = [];

  var thirdCrystalNum = [];
  
  var fourthCrystalNum = [];

  
// random number generated by each crystal every game
  // var crystalRandomNumber = [];

  $('.button').on('click', function() {
    var button = $(this);
    console.log("You clicked a button!!");

// computer to generate a random number between 19 - 120 for the player to match

    var computerRandomNumber = Math.floor(Math.random()*(120 - 19)+19);

    $('#randomComputerNumber').text(computerRandomNumber);

    // console.log(computerRandomNumber);

    function compareInputs() {
    if(yourTotalScore == computerRandomNumber);
    }


});



// message if player wins or loses 
// wins, show message "You win!"
// lose, show message "You lost!"

// $('#randomComputerNumber').text(computerRandomNumber)
// if(yourTotalScore == computerRandomNumber){
//   $('#result').text("You win!");
// } else {
//   $('#result').text("You lost!");
// }
