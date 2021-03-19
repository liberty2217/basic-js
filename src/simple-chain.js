const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.arr[position-1] === undefined) {
      this.arr = [];
      throw "Error";
    }
    this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    //join all parenthesis by ~~ sign
    let resArr = this.arr.join("~~");
    this.arr = [];
    return resArr;
  }
};

module.exports = chainMaker;