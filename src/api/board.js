class Board{
  constructor(){
    this.matrix = {numberOfRows: null , numberOfColumns:null , matrixArray: []};
    this.capacity = {countFullCells: 0 , emptyCellsArray: []};
    this.lastMove = null;
  }
  
  init(rows, columns){
    if (rows < 4 || columns < 4){
      return false;
    }
    this.matrix.numberOfRows = rows;
    this.matrix.numberOfColumns = columns;
    for (let i = 0 ; i < rows ; i++){
      this.matrix.matrixArray.push([]);
      for (let j=0 ; j < columns ; j++){
        this.matrix.matrixArray[i].push("empty");
      }
    }
    this.setCapacityArray();
    return true;
  }


  setCapacityArray(){
    for (let i = 0 ; i < this.matrix.numberOfColumns ; i++){
      this.capacity.emptyCellsArray.push(this.matrix.numberOfRows);
    }
    return this.capacity.emptyCellsArray;
  }

  correctMove(numOfCol, color){ 
    if (numOfCol > this.matrix.numberOfColumns){
      return false;
    }
    const colIndex = numOfCol - 1;
    const emptyPlaces = this.capacity.emptyCellsArray[colIndex];
    if (emptyPlaces === 0){
      return false;
    }
    const rowIndex = emptyPlaces - 1;
    this.matrix.matrixArray[rowIndex][colIndex] = color;
    this.lastMove = {rowIndex, colIndex};
    this.capacity.emptyCellsArray[colIndex]--;
    this.capacity.countFullCells++;
    return true;
  }

  reverseMove(){
    const {rowIndex, colIndex} = this.lastMove;
    this.matrix.matrixArray[rowIndex][colIndex] = "empty";
    this.capacity.emptyCellsArray[colIndex]++;
    this.capacity.countFullCells--;
    
  }

  checkWin(){  
    if (this.capacity.countFullCells < 7){
      return false;
    }
    return this.checkRow()|| this.checkCol() || this.checkLeftToRightDiagonal() || this.checkRightToLeftDiagonal();
  }

  checkRow(){
    const {rowIndex, colIndex} = this.lastMove;
    const {matrixArray, numberOfColumns} = this.matrix;

    const currentRow =  matrixArray[rowIndex];
    for (let i = 3; i >= 0 ; i--){
      if (colIndex-i >= 0 && currentRow[colIndex-i] !== "empty" && colIndex-i+3 < numberOfColumns ){
        
        if(currentRow[colIndex-i] === currentRow[colIndex -i +1] &&
          currentRow[colIndex -i +1] === currentRow[colIndex -i +2] &&
          currentRow[colIndex -i +2] === currentRow[colIndex -i +3]){
            return true;
        }
        
      }
    }
    return false;
  }

  checkCol(){
    const {rowIndex, colIndex} = this.lastMove;
    const {matrixArray, numberOfRows} = this.matrix;

    for (let i = 3; i >= 0 ; i--){
      if(rowIndex-i >= 0 && matrixArray[rowIndex -i][colIndex]!== "empty" && rowIndex-i+3 < numberOfRows){
        
        if(matrixArray[rowIndex -i][colIndex] === matrixArray[rowIndex -i +1][colIndex] &&
          matrixArray[rowIndex -i +1][colIndex] === matrixArray[rowIndex -i +2][colIndex] &&
          matrixArray[rowIndex -i +2][colIndex] === matrixArray[rowIndex -i +3][colIndex]){
            return true;
        }

      }
    }
    return false;
  }
  
  checkLeftToRightDiagonal(){
    const {rowIndex, colIndex} = this.lastMove;
    const {matrixArray, numberOfRows, numberOfColumns} = this.matrix;
    
    for (let i = 3; i >= 0 ; i--){
      if(rowIndex-i >= 0 && colIndex+i < numberOfColumns && matrixArray[rowIndex-i][colIndex+i] !== "empty" && rowIndex-i+3 < numberOfRows && colIndex+i-3 >=0){
        
        if(matrixArray[rowIndex -i][colIndex +i] === matrixArray[rowIndex -i +1][colIndex +i -1] &&
          matrixArray[rowIndex -i +1][colIndex +i -1] === matrixArray[rowIndex -i +2][colIndex +i -2] &&
          matrixArray[rowIndex -i +2][colIndex +i -2] === matrixArray[rowIndex -i +3][colIndex +i -3]){
            return true;
        }

      }
    }
    return false;
  }

  checkRightToLeftDiagonal(){
    const {rowIndex, colIndex} = this.lastMove;
    const {matrixArray, numberOfRows, numberOfColumns} = this.matrix;

    for (let i = 3; i >= 0 ; i--){
      if(rowIndex-i>=0 && colIndex-i >= 0 && matrixArray[rowIndex-i][colIndex-i] !== "empty" && rowIndex-i+3 < numberOfRows && colIndex-i+3 < numberOfColumns){

        if(matrixArray[rowIndex -i][colIndex -i] === matrixArray[rowIndex -i +1][colIndex -i +1] &&
          matrixArray[rowIndex -i +1][colIndex -i +1] === matrixArray[rowIndex -i +2][colIndex -i +2] &&
          matrixArray[rowIndex -i +2][colIndex -i +2] === matrixArray[rowIndex -i +3][colIndex -i +3]){
            return true;
        }

      }
    }
    return false;
  }

  checkFullBoard(){
    if (this.capacity.emptyCellsArray.every(numEmptyCells => numEmptyCells === 0)){
      return true;
    }
    return false;
  }

}


module.exports = Board;
