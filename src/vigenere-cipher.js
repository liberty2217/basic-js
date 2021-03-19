const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = false) {
    this.direction = direction;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }
  encrypt(encrStr, key) {
    console.log(key);
    console.log(encrStr);

    if(encrStr == undefined || key == undefined) throw new Error;
    encrStr = encrStr.toUpperCase().split('');
    let res = [];
    key = key.toUpperCase().split(' ').join('').split('');
 
    
    let symbols = [];
    let symbolsPositions = [];
    
    for (let j = 0; j < encrStr.length; j++) {
      if (encrStr[j] == ' ') {
        symbols.push(encrStr[j]);
        symbolsPositions.push(j);
        encrStr.splice( j, 1 );
        j--;
      } else if (!((encrStr[j]).match(/[A-Z]/))) {
        symbols.push(encrStr[j]);
        symbolsPositions.push(j);
        encrStr.splice( j, 1 );
        j--;
      }
    }
    if (encrStr.length > key.length) {
      let iterations = encrStr.length - key.length;
      for (let i = 0; i < iterations; i++) {
        key.push(key[i]);
      }
    } else if (encrStr.length < key.length) {
      let num = key.length - encrStr.length;
      key.splice(key.length - num, num);
    }

    for (let k = 0; k < encrStr.length; k++) {
      let index = this.alphabet.indexOf(encrStr[k]) + this.alphabet.indexOf(key[k]);
      if (index >= this.alphabet.length) {
        index -= this.alphabet.length;
        res.push(this.alphabet[index]);
      } else {
        res.push(this.alphabet[index]);
      }
    }
    let correction = 0;
    
    for (let m = 0; symbols.length > m; m++) {
      res.splice((symbolsPositions[m] + correction), 0, symbols[m]);
      correction++
    }
    
    return this.direction ? res.reverse().join('') : res.join('');
  }   





  decrypt(decrStr, key) {
    console.log(key);
    console.log(decrStr);
    
    decrStr = decrStr.toUpperCase().split('');
    let res = [];
    key = key.toUpperCase().split(' ').join('').split('');
 
    
    let symbols = [];
    let symbolsPositions = [];
    
    for (let j = 0; j < decrStr.length; j++) {
      if (decrStr[j] == ' ') {
        symbols.push(decrStr[j]);
        symbolsPositions.push(j);
        decrStr.splice( j, 1 );
        j--;
      } else if (!((decrStr[j]).match(/[A-Z]/))) {
        symbols.push(decrStr[j]);
        symbolsPositions.push(j);
        decrStr.splice( j, 1 );
        j--;
      }
    }
    if (decrStr.length > key.length) {
      let iterations = decrStr.length - key.length;
      for (let i = 0; i < iterations; i++) {
        key.push(key[i]);
      }
    } else if (decrStr.length < key.length) {
      let num = key.length - decrStr.length;
      key.splice(key.length - num, num);
    }

    for (let k = 0; k < decrStr.length; k++) {
      let index = this.alphabet.indexOf(decrStr[k]) - this.alphabet.indexOf(key[k]);
      if (index < 0) {
        index += this.alphabet.length;
        res.push(this.alphabet[index]);
      } else {
        res.push(this.alphabet[index]);
      }
    }

    let correction = 0;
    for (let m = 0; symbols.length > m; m++) {
      res.splice((symbolsPositions[m] + correction), 0, symbols[m]);
      correction++
    }

    return this.direction ? res.reverse().join('') : res.join('');
  }
}

module.exports = VigenereCipheringMachine;