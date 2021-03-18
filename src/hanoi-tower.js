const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //diskNumber is number of disk given
  //turnsSpeed is speed of moving of discs (turns per hour)

  //minimum number of turns can be calculated as the number two squared by the number of disks minus one
  const turns = Math.pow(2, disksNumber) - 1;

  //minimum number of seconds can calculated as 3600 divide turnsSpeed and multiplicated by minimal number of turns (turns variable)
  const seconds = Math.floor((3600 / turnsSpeed) * turns);
  return { turns, seconds };
};