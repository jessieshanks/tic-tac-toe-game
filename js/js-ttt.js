
//Declare Global Variables
var gameBoard;
var onPlayer;
var playerTag;
var color = {
  player1: "#DA627D",
  player2: "#51A3A3",
  winner: "#FFBC42",
  cellHover: "#EDEEC0",
};
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
//reset game board
  gameBoard=[[0,0,0],[0,0,0],[0,0,0]];
  $(".board-cell").css("background-color","darkGray");
  $(".winner-well").css("visibility", "hidden");
  gameBoardOn();
}

function consoleLogBoard() {
//print game board to console log
  for (i=0; i<=2; i++) {
    for (j=0; j<=2; j++) {
      console.log(gameBoard[i][j]);
    }
  }
}

function winner() {
//find if number has won
  console.log("findWin");
  i=0;
  win=false;
  do {
    win = winTest[i].call();
    console.log("win value: ", win);
    i += 1;
  } while ((!win) && (i<winTest.length));
  return win;
}

function playerColor(number) {
  var player = ("player"+number);
  return color[player];
}

function setOnPlayerHeader() {
  headIdName = ("player"+onPlayer+"-head");
  document.getElementById(headIdName).style.backgroundColor = playerColor(onPlayer);
  document.getElementById(headIdName).style.color = "white";
}

function setOffPlayerHeader() {
  headIdName = ("player"+offPlayer()+"-head");
  document.getElementById(headIdName).style.backgroundColor = "white";
  document.getElementById(headIdName).style.color = playerColor(offPlayer());
}

function newTurn() {
  onPlayer=offPlayer();
  playerTag = "player"+onPlayer;
  setOnPlayerHeader();
  setOffPlayerHeader();
}

function gameBoardOff() {
    $(".board-cell").attr("disabled","disabled");
}

function gameBoardOn() {
    $(".board-cell").removeAttr("disabled");
}

function declareWinner() {
  winIdName = ("#player"+onPlayer+"-winner");
  $(winIdName).css("visibility", "visible");
  winStatsName = ("player"+onPlayer+"Wins");
  gameStats[winStatsName] += 1;
  $(".stats-well").css("visibility", "visible");
  //$(.stats-well)
  gameBoardOff();
}

function newGame() {
  gameStats.gamesPlayed += 1;
  console.log("new Game function");
  newBoard();
  consoleLogBoard();
  newTurn();
}

function newMatch() {
  console.log ("new match function");
  onPlayer=2;
  newGame();
}



$(document).ready(function(){

  onPlayer=2;
  gameBoardOff();

  $('.board-cell').on('click', function() {
    console.log ($(this).val()[0],$(this).val()[1]);
    console.log ($(this).val().charAt(0),$(this).val().charAt(1));
    console.log("player", onPlayer);
    gameBoard[$(this).val().charAt(0)][$(this).val().charAt(1)]=onPlayer;
    console.log ("what will I print?");
    consoleLogBoard();
    $(this).css("background-color", playerColor(onPlayer));
    $(this).attr("disabled","disabled");
    if (winner()) {
      declareWinner();
    } else {
      newTurn();
    }
  })

  $('#start-button').on('click', function(){
    console.log ("start button clicked");
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














// functionHorizontalWin (board, playerID) {
//   var win;
//   for [i=0; i<=2; i++] {
//       win = (board[i][0]===playerID) && (board[i][1]===playerID) && (board[i][2]===playerID);
//       if (win) break;
//   }
// }

//   do {

//     while }
//   }

// while !(win)

// var "H" "V" "D"




// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// var a = function(){ console.log("this is function: a") }
// var b = function(){ console.log("this is function: b") }
// var c = function(){ console.log("this is function: c") }

// var foo = [a,b,c];

// while (foo.length){
//     foo.shift().call();
// }

// for (i=0; i<=foo.length; i++) {
//   console.log ("Element number: ",i);
// }
// */
