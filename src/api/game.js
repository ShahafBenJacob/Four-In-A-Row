const colors = require("./variabels");
const board = require("./board");
const player = require("./player");

class Game {
  constructor() {
    this.board = null;
    this.player1 = new player();
    this.player2 = new player();
    this.currentPlayer = this.player1;
    this.game_status = { winner: false, fullBoard: false, correctMove: false };
  }

  reset_game(rows, columns, numOfPlayers) {
    this.setBoard(rows, columns)
    this.player1 = new player();
    this.player2 = new player();
    this.setPlayers(numOfPlayers)
    this.currentPlayer = this.player1;
    this.game_status = { winner: false, fullBoard: false, correctMove: false };
  }

  getCurrentPlayer = () => {
    return this.currentPlayer;
  };

  setBoard = (rows, columns) => {
    this.board = new board();
    this.board.init(parseInt(rows), parseInt(columns));
  };

  resetGameStatus = () => {
    this.game_status = { winner: false, fullBoard: false, correctMove: false };
  }

  setPlayers = numOfPlayers => {
    if (numOfPlayers === "1") {
      this.player1.init(colors.yellow, this.player1.numberOfWins, "Player 1");
      this.player2.init(colors.red, this.player2.numberOfWins, "Computer");
      this.currentPlayer = this.player1;
    } else {
      this.player1.init(colors.yellow, this.player1.numberOfWins, "Player 1");
      this.player2.init(colors.red, this.player2.numberOfWins, "Player 2");
    }
  };

  move = numOfCol => {
    this.game_status.correctMove = this.board.correctMove(numOfCol, this.currentPlayer.color);
    if (this.game_status.correctMove) {
      if (this.board.checkWin()) {
        this.currentPlayer.numberOfWins++;
        this.game_status.winner = true;
      } else if (this.board.checkFullBoard()) {
        this.game_status.fullBoard = true;
      } else{
        this.switchUser();
      }
    }
  };

  reverseMove() {
    if (this.board.capacity.countFullCells < 1 || this.game_status.fullBoard){
      return false;
    }
    this.board.reverseMove();
    this.switchUser();
    return true;
  }

  computerMove() {
    const numOfCol =
      Math.floor(Math.random() * this.board.matrix.numberOfColumns) + 1;
    if (!this.move(numOfCol)) {
      this.computerMove();
    }
  }

  switchUser = () => {
    if (this.currentPlayer.id === this.player1.id) {
      this.currentPlayer = this.player2;
    } else {
      this.currentPlayer = this.player1;
    }

    if (this.currentPlayer.id === "Computer") {
      this.computerMove();
    }
    return this.currentPlayer;
  };
}

module.exports = Game;
