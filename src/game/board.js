class Board{
  constructor(){
    this.matrix = []
    this.capacityArray = []
  }
  
  init(numberOfRows, numberOfColumns){
    if (numberOfRows < 4 || numberOfColumns < 4){
      return false;
    }
    for (let i = 0 ; i < numberOfRows ; i++){
      this.matrix.push([])
      for (let j=0 ; j < numberOfColumns ; j++){
          this.matrix[i].push("empty")
      }
    }
    return this.matrix;
  }

  setCapacityArray(numberOfRows, numberOfColumns){
    for (let i = 0 ; i < numberOfRows ; i++){
      this.capacityArray.push(numberOfColumns)
    }
    return this.capacityArray
  }
}

module.exports = Board;


// const newBoard = new Board()
// newBoard.init(5,5)
// newBoard.setCapacityArray(5,5)
// console.log(newBoard)
