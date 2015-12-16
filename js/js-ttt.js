
/*var gameBoard=[[0,0,0],[0,0,0],[0,0,0]];





function CreateGameBoard(newBoard) {
  for [i=0; i<=2; i++] {
    for [j=0; j<=2; j++] {
      newBoard [i][j] = 0;
    }
  }
  return newBoard;
}

function checkWin(board, playerID) {
  board [0][1] = playerID;
  var win = {
    .h0 = ( (board[0][0]===playerID) && (board[0][1]===playerID) && (board[0][2]===playerID) )
    .h1 =

functionHorizontalWin (board, playerID) {
  var win;
  for [i=0; i<=2; i++] {
      win = (board[i][0]===playerID) && (board[i][1]===playerID) && (board[i][2]===playerID);
      if (win) break;
  }
}

  do {

    while }
  }

while !(win)

var "H" "V" "D"




1
2
3
4
5
6
7
8
9*/
var a = function(){ console.log("this is function: a") }
var b = function(){ console.log("this is function: b") }
var c = function(){ console.log("this is function: c") }

var foo = [a,b,c];

while (foo.length){
    foo.shift().call();
}

for (i=0; i<=foo.length; i++) {
  console.log ("Element number: ",i);
}
