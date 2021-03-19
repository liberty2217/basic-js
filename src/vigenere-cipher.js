const CustomError = require("../extensions/custom-error");
const letter = ['A','B','C','D','E','F','G','H','I','J','K','L','M',
                'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
console.log(letter.length)
class VigenereCipheringMachine {
  constructor(direct = true) {this.direction = direct;}
  
  encrypt(message, key) {

    if (arguments.length <= 1) throw new Error("Incorrect arguments");
    message = message.toUpperCase().split(''); 
    key = key.toUpperCase();
    let arrMess = [], arrKey = [], arrEncr = [];
    const keyLength = key.length;

    let count = 0;
    for (let i=0; i<message.length; i++) {
      arrKey.push(letter.indexOf(key[count]));
      if (letter.indexOf(message[i]) === -1) {
        arrKey.push(letter.indexOf(key[count])); 
        i++; 
      }
      count++;
      if (count===keyLength) count=0;
    }

    for (let i=0; i<message.length; i++) {
      arrMess.push(letter.indexOf(message[i]));
      if (arrMess[i] !== -1) {
        arrEncr.push(arrMess[i] + arrKey[i]);
        if (arrEncr[i]>25) {arrEncr[i] -= 26;}
        arrEncr[i] = letter[arrEncr[i]];
      }
      else arrEncr.push(message[i]);
    }
    if(!this.direction) arrEncr.reverse();
    return arrEncr.join('');
  }   

  decrypt(message, key) {

    if (arguments.length <= 1) throw new Error("Incorrect arguments");
    message = message.toUpperCase().split(''); 
    key = key.toUpperCase();
    let arrMess = [], arrKey = [], arrEncr = [];
    const keyLength = key.length;

    let count = 0;
    for (let i=0; i<message.length; i++) {
      arrKey.push(letter.indexOf(key[count]));
      if (letter.indexOf(message[i]) === -1) {
        arrKey.push(letter.indexOf(key[count])); 
        i++; 
      }
      count++;
      if (count===keyLength) count=0;
    }
    
    for (let i=0; i<message.length; i++) {
      arrMess.push(letter.indexOf(message[i]));
      if (arrMess[i] !== -1) {
        arrEncr.push(arrMess[i] - arrKey[i]);
        if (arrEncr[i]<0 ) {arrEncr[i] += 26;}
        arrEncr[i] = letter[arrEncr[i]];
      }
      else arrEncr.push(message[i]);
    }
    if(!this.direction) arrEncr.reverse();
    return arrEncr.join('');
  }
}
module.exports = VigenereCipheringMachine;