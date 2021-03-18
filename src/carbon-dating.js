const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity) {

  // since we work only with numbers wrapped in string we need to exclude all other data types
  // we also exclude any inadequate 'sampleActivity' which is more than 15 or less than 0
  if (!sampleActivity || sampleActivity <= 0 || sampleActivity > 15 || typeof sampleActivity !== String) return false;

  // approximate age of the sample is calculated by measuring the ratio of the modern activity of the C14 isotope to the activity of the same isotope in the sample.
  // that is why we divide MODERN_ACTIVITY and sampleActivity
  let logarithm = Math.log(MODERN_ACTIVITY / sampleActivity);
  
  // Подставляя 0.693 в уравнение, получаем выражение для периода полураспада реакции первого порядка
  //Период полураспада реакции первого порядка при заданном наборе условий реакции является постоянной величиной.
  let rateConstant = 0.693 / HALF_LIFE_PERIOD;

  return logarithm / rateConstant;
};
