const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let resStr = str;
  let addStr;

  // if additionRepeatTimes is given we work with addStr var...
  if (options.additionRepeatTimes) {
    //firsly (in the first parenthesis) we evaulate we addition string and the separtor for it (if it is undefined in given object - false then return '|')
    //then repeat it -1 times since we dont want to add separator at the end
    addStr = (options.addition + (options.additionSeparator || '|')).repeat(options.additionRepeatTimes - 1) + options.addition;
  }
  else {
    addStr = options.addition || '';
  }
  // if option.repeatTimes is given we work with resStr variable...
  if (options.repeatTimes) {
    // we use options.repeatTimes - 1 since we dont want to have separator at the end
    resStr = ((resStr + addStr) + (options.separator || '+')).repeat(options.repeatTimes - 1) + (resStr + addStr);
  }
  else {
    resStr += addStr;
  }
  return resStr;
};
