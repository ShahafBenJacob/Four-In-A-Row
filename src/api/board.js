class Board{
  constructor(){
    this.matrix = {numberOfRows: null , numberOfColumns:null , matrixArray: []}
    this.capacity = {countFullCells: 0 , emptyCellsArray: []}
    this.lastMove = null;
  }
  
  init(rows, columns){
    if (rows < 4 || columns < 4){
      return false;
    }
    this.matrix.numberOfRows = rows;
    this.matrix.numberOfColumns = columns;
    for (let i = 0 ; i < rows ; i++){
      this.matrix.matrixArray.push([])
      for (let j=0 ; j < columns ; j++){
        this.matrix.matrixArray[i].push("empty")
      }
    }
    this.setCapacityArray()
    return true;
  }


  setCapacityArray(){
    for (let i = 0 ; i < this.matrix.numberOfColumns ; i++){
      this.capacity.emptyCellsArray.push(this.matrix.numberOfRows)
    }
    return this.capacity.emptyCellsArray;
  }

  move(numOfCol, color){ 
    if (numOfCol > this.matrix.numberOfColumns){
      return false
    }
    const colIndex = numOfCol - 1;
    const emptyPlaces = this.capacity.emptyCellsArray[colIndex];
    if (emptyPlaces === 0){
      return false
    }
    const rowIndex = emptyPlaces - 1;
    this.matrix.matrixArray[rowIndex][colIndex] = color;
    this.lastMove = {rowIndex, colIndex};
    console.log(this.lastMove)
    this.capacity.emptyCellsArray[colIndex]--;
    this.capacity.countFullCells++;
    console.log(this.matrix.matrixArray)
    return true
  }

  checkEndGame(){
    if (this.capacity.countFullCells < 7){
      return false
    }
  
    if(this.checkWin() || this.checkFullBoard()){
      return true
    }
    return false
  }

  checkWin(){  
    return checkRow()|| checkCol()
  }

  checkRow(){
    const {rowIndex} = this.lastMove;
    const {colIndex} = this.lastMove;
    const {matrixArray} = this.matrix;
    for (let i = 3; i >= 0 ; i--){
      if (matrixArray[rowIndex][colIndex-i] && matrixArray[rowIndex][colIndex-i] !== "empty"){
        console.log(`current: ${matrixArray[rowIndex][colIndex-i]}`)
        console.log(`next: ${matrixArray[rowIndex][colIndex-i+1]}`)
        console.log(`next: ${matrixArray[rowIndex][colIndex-i+2]}`)
        console.log(`next: ${matrixArray[rowIndex][colIndex-i+3]}`)

        if(matrixArray[rowIndex][colIndex-i] === matrixArray[rowIndex][colIndex -i +1] &&
          matrixArray[rowIndex][colIndex -i +1] === matrixArray[rowIndex][colIndex -i +2] &&
          matrixArray[rowIndex][colIndex -i +2] === matrixArray[rowIndex][colIndex -i +3]
          ){
            return true
          }
      }
    }
    return false
  }

  checkCol(){
    const {rowIndex} = this.lastMove;
    const {colIndex} = this.lastMove;
    const {matrixArray} = this.matrix;
    for (let i = 3; i >= 0 ; i--){
      if(rowIndex-i >=0){
      // if (matrixArray[rowIndex-i][colIndex]){
        // if( && matrixArray[rowIndex-i][colIndex] !== "empty")
        console.log(`current: ${matrixArray[rowIndex-i][colIndex]}`)

      //   console.log(`next: ${matrixArray[rowIndex-i+1][colIndex]}`)
      //   console.log(`next: ${matrixArray[rowIndex-i+2][colIndex]}`)
      //   console.log(`next: ${matrixArray[rowIndex-i+3][colIndex]}`)

      //   if(matrixArray[rowIndex -i][colIndex] === matrixArray[rowIndex -i +1][colIndex] &&
      //     matrixArray[rowIndex -i +1][colIndex] === matrixArray[rowIndex -i +2][colIndex] &&
      //     matrixArray[rowIndex -i +2][colIndex] === matrixArray[rowIndex -i +3][colIndex]
      //     ){
      //       return true
      //     }
      }
    }
    // return false
  }
  
  checkFullBoard(){
    if (this.capacity.emptyCellsArray.every(numEmptyCells => numEmptyCells === 0)){
      return true
    }
    return false
  }

}

module.exports = Board;


// const newBoard = new Board()
// newBoard.init(4,5)
// console.log(newBoard.move(1, "red"))
// console.log(newBoard.checkRow())
// console.log(newBoard.move(2, "red"))
// console.log(newBoard.checkRow())
// console.log(newBoard.move(3, "red"))
// console.log(newBoard.checkRow())
// console.log(newBoard.move(4, "red"))
// console.log(newBoard.checkRow())
// console.log(newBoard.move(5, "red"))
// console.log(newBoard.checkRow())
// console.log(newBoard.move(5, "red"))
// console.log(newBoard.checkCol())
// console.log(newBoard.move(5, "red"))
// console.log(newBoard.checkCol())
// console.log(newBoard.move(5, "red"))
// console.log(newBoard.checkCol())
// console.log(newBoard.move(5, "red"))
// console.log(newBoard.checkCol())





















// checkVertical(board) {
//   // Check only if row is 3 or greater
//   for (let r = 3; r < 6; r++) {
//     for (let c = 0; c < 7; c++) {
//       if (board[r][c]) {
//         if (board[r][c] === board[r - 1][c] &&
//             board[r][c] === board[r - 2][c] &&
//             board[r][c] === board[r - 3][c]) {
//           return board[r][c];    
//         }
//       }
//     }
//   }
// }

// checkHorizontal(board) {
//   // Check only if column is 3 or less
//   for (let r = 0; r < 6; r++) {
//     for (let c = 0; c < 4; c++) {
//       if (board[r][c]) {
//         if (board[r][c] === board[r][c + 1] &&
//             board[r][c] === board[r][c + 2] &&
//             board[r][c] === board[r][c + 3]) {
//           return board[r][c];
//         }
//       }
//     }
//   }
// }

// checkDiagonalRight(board) {
//   // Check only if row is 3 or greater AND column is 3 or less
//   for (let r = 3; r < 6; r++) {
//     for (let c = 0; c < 4; c++) {
//       if (board[r][c]) {
//         if (board[r][c] === board[r - 1][c + 1] &&
//             board[r][c] === board[r - 2][c + 2] &&
//             board[r][c] === board[r - 3][c + 3]) {
//           return board[r][c];
//         }
//       }
//     }
//   }
// }

// checkDiagonalLeft(board) {
//   // Check only if row is 3 or greater AND column is 3 or greater
//   for (let r = 3; r < 6; r++) {
//     for (let c = 3; c < 7; c++) {
//       if (board[r][c]) {
//         if (board[r][c] === board[r - 1][c - 1] &&
//             board[r][c] === board[r - 2][c - 2] &&
//             board[r][c] === board[r - 3][c - 3]) {
//           return board[r][c];
//         }
//       }
//     }
//   }
// }
