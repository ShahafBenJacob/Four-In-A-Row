class Player{
  constructor(){
    this.color = null;
    this.numberOfWins = 0;
  }

  init(color){
    this.color = color;
    return this.color
  }

}

module.exports = Player;

// const newPlayer = new Player()
// newPlayer.init("red")
// console.log(newPlayer)
