const game = require('./game')

class Manager{
  constructor(){
    this.game = new game;
  }
}

module.exports = Manager;