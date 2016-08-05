// business logic
function Player(name,turnTotal,score){
  this.name = name;
  this.turnTotal = turnTotal;
  this.score = score;
}
Player.prototype.rollDice = function () {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
};
Player.prototype.information = function () {
  $("#name").text(this.name);
  $("#score").text(this.score);
  $("#turn-total").text(this.score);
};

// user interface logic
$(document).ready(function(){
  $("#play").click(function(){
    var name = prompt("Enter a name for Player 1");
    var player1 = new Player(name, 0, 0);
    name = prompt("Enter a name for Player 2");
    var player2 = new Player(name, 0, 0);
    $("#play").slideUp();
    player1.information();
    
  });
});
