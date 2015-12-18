
//Declare Global Variables
var gameBoard;
var gameStats = {
  gamesPlayed: 0,
  player1Wins: 0,
  player2Wins: 0,
}
var color = {
  player1: "orange",
  player2: "purple",
  winner: "yellow",
  cellHover: "lightBlue",
}
var playerTurn;
var playerStart;

function newBoard() {
//resets game board
  gameBoard=[[0,0,0],[0,0,0],[0,0,0]]
}

function consoleLogBoard () {
//prints game board to console log
  for (i=0; i<=2; i++) {
    for (j=0; j<=2; j++) {
      console.log(gameBoard[i][j]);
    }
  }
}

var x=1;
//gameBoard = [[1,1,1],[0,0,0],[0,0,0]];
gameBoard = [[1,0,0],[1,0,0],[1,0,0]];
//gameBoard = [[1,1,1],[0,0,0],[0,0,0]];

var winTest = [
  function() {return (gameBoard[0][0]===x) && (gameBoard[0][1]===x) && (gameBoard[0][2]===x)},
  function() {return (gameBoard[1][0]===x) && (gameBoard[1][1]===x) && (gameBoard[1][2]===x)},
  function() {return (gameBoard[2][0]===x) && (gameBoard[2][1]===x) && (gameBoard[2][2]===x)},
  function() {return (gameBoard[0][0]===x) && (gameBoard[1][0]===x) && (gameBoard[2][0]===x)},
  function() {return (gameBoard[0][1]===x) && (gameBoard[1][1]===x) && (gameBoard[2][1]===x)},
  function() {return (gameBoard[0][2]===x) && (gameBoard[1][2]===x) && (gameBoard[2][2]===x)},
  function() {return (gameBoard[0][0]===x) && (gameBoard[1][1]===x) && (gameBoard[2][2]===x)},
  function() {return (gameBoard[2][0]===x) && (gameBoard[1][1]===x) && (gameBoard[0][2]===x)},
];

function findWin(num) {
//find if number has won
  console.log("findWin");
  i=0;
  win=false;
  do {
    win = winTest[i].call();
    console.log("win value: ", win);
    i +=1;
  } while (!win);
  return win;
}

// function findWin2(num) {
//   win = winTest.some.call()
// }
// console.log(findWin(x));


function setPlayerColor() {
  $('pLabel1').css("background-color":"color.player1");
  $('pLabel2').css("background-color":color.player2);
  $('player-label').css("color":"white" );
}

function newGame() {
  gameStats.gamesPlayed += 1;
  console.log("new Game");
  newBoard();
}

function newMatch() {
  setPlayerColor();
  newGame();
}



$(document).ready(function(){


  $('#start-button').on('click', function(){
    if (gameStats.gamesPlayed=0)
      newMatch()
    } else {
      newGame();
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
