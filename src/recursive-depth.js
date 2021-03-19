const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)){
    	return 0;
    }
    // we do need counter since if we obtain array - we always return at least 1
    // the total number of nested arrays will be calculated in num var
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
};