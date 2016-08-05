// business logic
function Player(name,turnTotal,score){
  this.name = name;
  this.turnTotal = turnTotal;
  this.score = score;
}
Player.prototype.rollDice = function () {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
};
