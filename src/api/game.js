const board = require('./board')
const player = require('./player')

class Game{
  constructor(){
    this.board = null;
    this.player1 = new player();
    this.player2 = new player();
    this.currentPlayer = this.player1;
  }

  setBoard(rows, columns){
    this.board = new board();
    this.board.init(parseInt(rows), parseInt(columns));
  }

  setPlayers(numOfPlayers){
    this.player1.init("#FFDC04", this.player1.numberOfWins);
    this.player2.init("#CB4335", this.player2.numberOfWins);
  }

  move(numOfCol){
    if (this.board.move(numOfCol, this.currentPlayer.color)){
      if (this.board.checkEndGame()){
        this.currentPlayer.numberOfWins++;
        return(this.currentPlayer)
      }
      this.switchUser();
      return true
    }
    return false;
  }

  randomMove(){
    const randomCol = Math.floor(Math.random() * this.board.numberOfColumns) 
    return this.move(randomCol);
  }

  switchUser(){
    if (this.currentPlayer === this.player1){
      this.currentPlayer = this.player2;
    }else{
      this.currentPlayer = this.player1;
    }
    return this.currentPlayer;
  }

}


module.exports = Game;

