const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = (reverse === false);
  }

  encrypt(message, key) {
    if (!message || !key || !typeof message === 'string' || !typeof key === 'string')
      throw new Error('Empty argument not allowed');

    let localMessage = Array.from(message.toUpperCase());
    let localKey = Array.from(key.toUpperCase());

    let result = '';

    while (localKey.length < localMessage.length) {
      localKey = localKey.concat(localKey);
    }

    let charBase = 'A'.charCodeAt(0);

    while (localMessage.length > 0) {
      if (' ' === localMessage[0]) {
        result += localMessage.shift();
        continue;
      }

      let keyChar = localKey.shift();
      let currentChar = localMessage.shift();
      let keyCharCode = keyChar.charCodeAt(0) - charBase;
      let currentCharCode = currentChar.charCodeAt(0) >= charBase && currentChar.charCodeAt(0) < charBase + 26
       ? currentChar.charCodeAt(0) - charBase : currentChar.charCodeAt(0)

      result += currentChar.charCodeAt(0) >= charBase && currentChar.charCodeAt(0) < charBase + 26
        ? String.fromCharCode(charBase + (currentCharCode + keyCharCode) % 26)
        : currentChar;
    }

    return this.reverse ? result.split('').reverse().join('') : result;
  }

  decrypt(encryptedMessage, key) {

    if (!encryptedMessage || !key || !typeof encryptedMessage === 'string' || !typeof key === 'string')
      throw new Error('Empty argument not allowed');

    let localMessage = Array.from(encryptedMessage.toUpperCase());
    let localKey = Array.from(key.toUpperCase());

    let result = '';

    while (localKey.length < localMessage.length) {
      localKey = localKey.concat(localKey);
    }

    let charBase = 'A'.charCodeAt(0);

    while (localMessage.length > 0) {
      if (' ' === localMessage[0]) {
        result += localMessage.shift();
        continue;
      }

      let keyChar = localKey.shift();
      let currentChar = localMessage.shift();

      let keyCharCode = keyChar.charCodeAt(0) - charBase;
      let currentCharCode = currentChar.charCodeAt(0) >= charBase && currentChar.charCodeAt(0) < charBase + 26
        ? currentChar.charCodeAt(0) - charBase
        : currentChar.charCodeAt(0)

      let decodedCharCode = currentCharCode < keyCharCode ? currentCharCode + 26 - keyCharCode : currentCharCode - keyCharCode;

      result += currentChar.charCodeAt(0) >= charBase && currentChar.charCodeAt(0) < charBase + 26
        ? String.fromCharCode(charBase + decodedCharCode)
        : currentChar;
    }

    return this.reverse ? result.split('').reverse().join('') : result;
  }
}

module.exports = VigenereCipheringMachine;
