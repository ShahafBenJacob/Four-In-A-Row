class Player{
  constructor(){
    this.color = null;
    this.numberOfWins = 0;
  }

  init(color, wins){
    this.color = color;
    this.numberOfWins = wins;
  }

}

module.exports = Player;


