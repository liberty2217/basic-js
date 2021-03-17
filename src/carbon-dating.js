const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {


  if (!sampleActivity || typeof(sampleActivity) !== String) return false;

  let logarithm = Math.log(MODERN_ACTIVITY / sampleActivity);
  let rateConstant = 0.693 / HALF_LIFE_PERIOD;
  return logarithm / rateConstant;
};
