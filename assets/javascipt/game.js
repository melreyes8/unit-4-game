// GLOBAL VARIABLES 

// crystals set as objects
var crystal = {
    blue: 
    {
        name: "Blue",
        value: 0
    },

    green: 
    {
        name: "Green",
        value: 0
    },

    purple: 
    {
        name: "Purple",
        value: 0
    },

    orange: 
    {
        name: "Orange",
        value: 0
    }
};

var randomComputerNumber = 0;
var playerTotalScore = 0;
var wins = 0;
var losses = 0;

// FUNCTIONS 

// this variable function serves as template to get the random numbers for both the randomComputerNumber and crystals values
var getRandom = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// starts and resets the game
var startGame = function(){

// resets the player's current score
  playerTotalScore = 0;

// sets a new random number between 19 and 120 to be matched by the player
  randomComputerNumber = getRandom(19, 120);

// sets different counts for each of the crytals between 1 and 12
  crystal.blue.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);
  crystal.purple.value = getRandom(1, 12);
  crystal.orange.value = getRandom(1, 12);
    
// updates the HTML with below functions
$('#computerNumber').text(randomComputerNumber);
$('#yourScore').text(playerTotalScore);

// console log to test above
  console.log("Target score: " + randomComputerNumber)
  console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Purple: " + crystal.purple.value + " | Orange: " + crystal.orange.value);

}

// results for clicking the crystals and passing the values of the crystals when starting the game 
var addValues = function(crystal){
  playerTotalScore = playerTotalScore + crystal.value;

  $('#yourScore').text(playerTotalScore);

  // after the add values function is run, call the checkWin function  
  checkWin();

  console.log("Your total score: " + playerTotalScore);
  
}

// checks player for Wins or Losses, and resets the game
var checkWin = function(){

  // check if the playerTotalScore is greater than the randomComputerNumber
  if (playerTotalScore === randomComputerNumber){
    $('#result').text("You won!");
    // console.log("You won!");
    wins++;
    $('#winCounter').text(wins);
    $('#winCounter').attr('style', 'color: green');
    $('#result').attr('style', 'color: green; text-align: center');

    // starts the next game
    startGame();
  } 
  else if (playerTotalScore > randomComputerNumber){
    $('#result').text("You lost!");
    // console.log("You lost!");
    losses++;
    $('#lossCounter').text(losses);
    $('#lossCounter').attr('style', 'color: red');
    $('#result').attr('style', 'color: red; text-align: center');

    // starts the next game
    startGame();
  }
  
}

// MAIN PROCESS

// starts the game
startGame();

$('#blue').on('click', function(){
  addValues(crystal.blue);
});

$('#green').on('click', function(){
  addValues(crystal.green);
});

$('#purple').on('click', function(){
  addValues(crystal.purple);
});

$('#orange').on('click', function(){
  addValues(crystal.orange);
});
