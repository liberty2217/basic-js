const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)){
    	return 0;
    }
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