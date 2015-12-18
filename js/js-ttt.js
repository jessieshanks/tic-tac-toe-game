
//Declare Global Variables
var gameBoard;
var color = {
  player1: "#DA627D",
  player2: "#51A3A3",
};
var gameStats = {
  gamesPlayed: 0,
  player1Wins: 0,
  player2Wins: 0,
};


function offPlayer() {
// identify player who is "off"
  if (onPlayer==1) { return 2 } else { return 1 }
}

function newBoard() {
// reset game board
  gameBoard=[[0,0,0],[0,0,0],[0,0,0]];
  $(".board-cell").css("background-color","darkGray");
  $(".winner-well").css("visibility", "hidden");
  gameBoardOn();
}

function resetStats() {
// reset game stats and player number
  gameStats.gamesPlayed = 0;
  gameStats.player1Wins = 0;
  gameStats.player2Wins = 0;
  $(".stats-well").css("visibility", "hidden");
  onPlayer = 2;
}

function winner() {
// find if current player has won
  var winTest = [
    function() {return (gameBoard[0][0]===onPlayer) && (gameBoard[0][1]===onPlayer) && (gameBoard[0][2]===onPlayer)},
    function() {return (gameBoard[1][0]===onPlayer) && (gameBoard[1][1]===onPlayer) && (gameBoard[1][2]===onPlayer)},
    function() {return (gameBoard[2][0]===onPlayer) && (gameBoard[2][1]===onPlayer) && (gameBoard[2][2]===onPlayer)},
    function() {return (gameBoard[0][0]===onPlayer) && (gameBoard[1][0]===onPlayer) && (gameBoard[2][0]===onPlayer)},
    function() {return (gameBoard[0][1]===onPlayer) && (gameBoard[1][1]===onPlayer) && (gameBoard[2][1]===onPlayer)},
    function() {return (gameBoard[0][2]===onPlayer) && (gameBoard[1][2]===onPlayer) && (gameBoard[2][2]===onPlayer)},
    function() {return (gameBoard[0][0]===onPlayer) && (gameBoard[1][1]===onPlayer) && (gameBoard[2][2]===onPlayer)},
    function() {return (gameBoard[2][0]===onPlayer) && (gameBoard[1][1]===onPlayer) && (gameBoard[0][2]===onPlayer)},
  ];
  var i=0;
  win=false;
  do {
    win = winTest[i].call();
    i += 1;
  } while ((!win) && (i<winTest.length));
  return win;
}

function gameBoardFull() {
// find if it's a draw - cat's game
  var count0=0;
  for (i=0; i<=2; i++) {
    for (j=0; j<=2; j++) {
      if (gameBoard[i][j]===0) { count0+=1; }
    }
  }
  return (count0===0);
}

function playerColor(number) {
// returns color number data
  var player = ("player"+number);
  return color[player];
}

function setActivePlayerHeader(playerNum) {
  var playerTag = ("player"+playerNum);
  document.getElementById(playerTag+"-head").style.backgroundColor = color[playerTag];
  document.getElementById(playerTag+"-head").style.color = "white";
}

function setInactivePlayerHeader(playerNum) {
  var playerTag = ("player"+playerNum);
  document.getElementById(playerTag+"-head").style.backgroundColor = "white";
  document.getElementById(playerTag+"-head").style.color = color[playerTag];
}

function newTurn() {
// new player's turn
  onPlayer=offPlayer();
  setActivePlayerHeader(onPlayer);
  setInactivePlayerHeader(offPlayer());
}

function gameBoardOff() {
// disable clicking on game board
    $(".board-cell").attr("disabled","disabled");
}

function gameBoardOn() {
// enable clicking on game board
    $(".board-cell").removeAttr("disabled");
}

function showStats() {
// show game statistics
  $(".stats-well").css("visibility", "visible");
  $("#player1-stats").text(gameStats.player1Wins+" / "+gameStats.gamesPlayed);
  $("#player2-stats").text(gameStats.player2Wins+" / "+gameStats.gamesPlayed);
}

function declareWinner() {
// actions taken to congratulate winner
  winIdName = ("#player"+onPlayer+"-winner");
  $(winIdName).css("visibility", "visible");
  $(".winner-well").text("WINNER");
  winStatsName = ("player"+onPlayer+"Wins");
  gameStats[winStatsName] += 1;
  showStats();
  setInactivePlayerHeader(onPlayer);
  gameBoardOff();
}

function declareDraw() {
// actions taken if game ends in draw
  $(".winner-well").css("visibility", "visible");
  $(".winner-well").text("CAT'S EYE");
  showStats();
  setInactivePlayerHeader(onPlayer);
}

function newGame() {
// start new game
  gameStats.gamesPlayed += 1;
  newBoard();
  newTurn();
}

function newMatch() {
// start new match (start over from 0 games)
  resetStats();
  newGame();
}



$(document).ready(function(){

  gameBoardOff();

  $('.board-cell').on('click', function() {
    gameBoard[$(this).val().charAt(0)][$(this).val().charAt(1)]=onPlayer;
    $(this).css("background-color", playerColor(onPlayer));
    $(this).attr("disabled","disabled");
    if (winner()) {
      declareWinner();
    } else if (gameBoardFull()) {
      declareDraw();
    } else {
      newTurn();
    }
  })

  $('#start-button').on('click', function(){
    if (gameStats.gamesPlayed===0) {
      newMatch();
    } else {
      newGame();
    }
  })

  $('#reset-button').on('click', function(){
      newMatch()
  })

})


