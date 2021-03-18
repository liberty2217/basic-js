const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //if passed null data type instead of real Date object - return 'Unable...'
  if (date == null) {
    return 'Unable to determine the time of year!'
  } else if (date.getYear() == undefined) {
  //according to test.js we have some cases when date object is a fake. I'm not sure but it is because Date object in this case is presented as a string with manually implemented methods (except our .getYear())
    return "TROWN"
  }


  let m = date.getMonth();
  return (m === 0) ? 'winter' :
         (m === 1) ? 'winter' :
         (m === 2) ? 'spring' :
         (m === 3) ? 'spring' :
         (m === 4) ? 'spring' :
         (m === 5) ? 'summer' :
         (m === 6) ? 'summer' :
         (m === 7) ? 'summer' :
         (m === 8) ? 'autumn' :
         (m === 9) ? 'autumn' :
         (m === 10) ? 'autumn' :
         (m === 11) ? 'winter' : false;
};
