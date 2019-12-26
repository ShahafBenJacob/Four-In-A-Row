const board = require('./board')
const player = require('./player')


class Game{
  constructor(){
    this.board = new board();
    this.player1 = new player();
    this.player2 = new player();
    this.currentPlayer = this.player1;
  }

  setBoard(rows, columns){
    this.board.init(rows, columns);
  }

  setPlayers(){
    this.player1.init("#FFDC04");
    this.player2.init("#CB4335");
  }

  move(numOfCol){
    this.board.move(numOfCol, this.currentPlayer.color);
    return this.board.checkEndGame();
    // switchUser()
  }


}

const game = new Game();



console.log(game)
console.log(game.setBoard(4,5))
console.log(game.setPlayers())
// console.log(game.move(1))
// console.log(game.move(1))
// console.log(game.move(1))
// console.log(game.move(1))
// console.log(game.move(2))
// console.log(game.move(2))
// console.log(game.move(2))
// console.log(game.move(2))
// console.log(game.move(3))
// console.log(game.move(3))
// console.log(game.move(3))
// console.log(game.move(3))
// console.log(game.move(4))
// console.log(game.move(4))
// console.log(game.move(4))
// console.log(game.move(4))
// console.log(game.move(5))
// console.log(game.move(5))
// console.log(game.move(5))
// console.log(game.move(5))
// console.log(game.move(5))

console.log(game)

