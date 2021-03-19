const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //the base of recursion if we obtain not array
    if (!Array.isArray(arr)){
    	return 0;
    }

    // the step of recursion - we iterate over the each array inside of array calling this method for them over and over again

    //since we obtain array our counter is 1. and then we count whether we have arrays in this main arrays
    let counter = 1;

    for (let el of arr) {
      let num = 0;
      if (Array.isArray(el)) {
        num = this.calculateDepth(el) + 1;
        counter = Math.max(counter, num);
      }
    }
    return counter;
  }