// business logic
function Player(name,turnTotal,score){
  this.name = name;
  this.turnTotal = turnTotal;
  this.score = score;
}
var rollDice = function () {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
};
Player.prototype.information = function () {
  $("#name").text(this.name);
  $("#score").text(this.score);
  $("#turn-total").text(this.turnTotal);
};
function changePlayer(activePlayer){
  if (activePlayer === player1){
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
};
var player1;
var player2;
// user interface logic
$(document).ready(function(){
  $("#play").click(function(){
    var name = prompt("Enter a name for Player 1");
    player1 = new Player(name, 0, 0);
    name = prompt("Enter a name for Player 2");
    player2 = new Player(name, 0, 0);
    var currentPlayer = player1;
    $("#play").slideUp();
    currentPlayer.information();
    $("#roll").click(function(){
      var result = rollDice();
      if (result === 1){
        currentPlayer.turnTotal = 0;
        currentPlayer = player2;
      } else {
        currentPlayer.turnTotal += result;
      }
      $("#roll-result").text(result);
      currentPlayer.information();
    });
  });
});
