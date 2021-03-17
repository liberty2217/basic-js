const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ){
  
  let count = 0;
  // outer loop is only for elem (arrays) of main array that holds them
  for (let i = 0; i < matrix.length; i++) {

    // inner loop is for each element of current elem (array) of main array
    for (let j = 0; j < matrix[i].length; j++) {
      
      //notice how we apply to the current elem inside of array 
      // that inside of another array ->(matrix[i][j])
      if (matrix[i][j] === '^^') {
        count++;
      } 
    }
  }
  return count;

}

