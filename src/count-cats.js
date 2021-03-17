const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ){
  
  let result = 0;

  

  for (let i = 0; i < matrix.length; i = i + 1){
    if (matrix[i] === '^^'){
    result = result + 1;
    }
  }
  return result
  
}

