const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  //since we can obtain not array - throw Error on any other data type
  if (!(arr instanceof Array)) throw "Error";

  // since we cannot change passed array - we create own one 
  let transformedArr = [];

  //we have to use flag in case we have '--discard-next', then there is a number, and after this number there is '--double next' that has to duplicate previous number which we skipped because of '--discard-next'
  //если мы получаем в итерации discard-next, после которого идет простой элемент (не управляющая последовательность), а после этого простого элемента, идет например, --double-prev, то, чтобы такой double-prev не сработал (ведь мы пропустили предыдущий элемент с помощью discard-next), мы используем флаги true false
  let isAffected = false;

  // as a 'default' case we just push elem to our array variable
  for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-next':
          //we need to check if the current i is the last one in the passed array - if it is dont push it ('--discard-smth) to our own array, just break and skip
          if (i !== arr.length - 1) {
            //if it is discard case we simply skip next element in our passed
            i++;
            //change flag - explanation in rus and eng is above
            isAffected = true;
          }
          break;
        case '--discard-prev':
          if (i !== 0 && !isAffected) {
            transformedArr.pop();
          }
          break;
        case '--double-next':
          if (i !== arr.length - 1) {
            transformedArr.push(arr[i+1])
          }
          break;
        case '--double-prev':
          if (i !== 0 && !isAffected) {
            transformedArr.push(arr[i-1]);
          }
          break;
        default:
          transformedArr.push(arr[i]);
          isAffected = false;
    }
  }
  return transformedArr;
};
