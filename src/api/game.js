 const colors = require('./variabels');
const board = require("./board");
const player = require("./player");
const color = colors.colors;


class Game {
  constructor() {
    this.board = null;
    this.player1 = new player();
    this.player2 = new player();
    this.currentPlayer = this.player1;
  }

  getCurrentPlayer = () => {
    return this.currentPlayer;
  }

  setBoard = (rows, columns) => {
    this.board = new board();
    this.board.init(parseInt(rows), parseInt(columns));
  }

  setPlayers = (numOfPlayers) => {
    if (numOfPlayers === "1") {
      this.player1.init(color.yellow, this.player1.numberOfWins, "Player 1");
      this.player2.init(color.red, this.player2.numberOfWins, "Computer");
      this.currentPlayer = this.player1;
    } else {
      this.player1.init(color.yellow, this.player1.numberOfWins, "Player 1");
      this.player2.init(color.red, this.player2.numberOfWins, "Player 2");
    }
  }

  move = (numOfCol) => {
    if (this.board.correctMove(numOfCol, this.currentPlayer.color)) {
      if (this.board.checkWin()){
        this.currentPlayer.numberOfWins++;
        return this.currentPlayer;
      } else if (this.board.checkFullBoard()){
        return "game-over";
      }
      this.switchUser();
      return true;

    }
    return false;
  }
  
  computerMove(){
    const numOfCol = Math.floor(Math.random() * this.board.matrix.numberOfColumns) + 1;
    if(!this.move(numOfCol)){
      this.computerMove()
    }
  }

  switchUser = () => {
    if (this.currentPlayer.id === this.player1.id) {
      this.currentPlayer = this.player2;
      if(this.currentPlayer.id === "Computer"){
       this.computerMove()
      }
    } else {
      this.currentPlayer = this.player1;
    }
    return this.currentPlayer;
  }
}

module.exports = Game;
