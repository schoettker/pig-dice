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
Player.prototype.gameOver = function () {
  if (this.score >= 100){

    $(".output").append("<p id='game-over'>GAME OVER! " + this.name + " won!");
  }
};
// user interface logic
$(document).ready(function(){
  $("#play").click(function(){
    var name = prompt("Enter a name for Player 1");
    var player1 = new Player(name, 0, 0);
    name = prompt("Enter a name for Player 2");
    var player2 = new Player(name, 0, 0);
    var currentPlayer = player1;
    $("#play").hide();
    $(".ingame-content").fadeIn();
    currentPlayer.information();
    $("#roll").click(function(){
      $("#roll-info").hide();
      var result = rollDice();
      if (result === 1){
        currentPlayer.turnTotal = 0;
        if (currentPlayer === player1){
          currentPlayer = player2;
        } else { currentPlayer = player1;}
      } else {
        currentPlayer.turnTotal += result;
      }
      $("#roll-info").fadeIn(1200);
      $("#roll-result").text(result);
      currentPlayer.information();
    });
    $("#hold").click(function(){
      $("#roll-info").hide();
      currentPlayer.score += currentPlayer.turnTotal;
      currentPlayer.turnTotal = 0;
      currentPlayer.gameOver();
      if (currentPlayer === player1){
        currentPlayer = player2;
      } else { currentPlayer = player1;}
      currentPlayer.information();
      $("#roll-result").text("");
    });
  });
});
