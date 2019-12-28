class Player{
  constructor(){
    this.color = null;
    this.numberOfWins = 0;
    this.id = "";
  }

  init(color, wins, id){
    this.color = color;
    this.numberOfWins = wins;
    this.id = id;
  }

}


module.exports = Player;
