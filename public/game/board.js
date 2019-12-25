class Matrix{
  constructor(){

  }
  
  buildTheBoard(numberOfRows, numberOfColumns){
    const matrix = []
    if (numberOfRows < 4 || numberOfColumns < 4){
      return false;
    }
    for (let i = 0 ; i < numberOfRows ; i++){
      matrix.push([])
      for (let j=0 ; j < numberOfColumns ; j++){
          matrix[i].push("empty")
      }
    }
    return matrix;
  }
}
