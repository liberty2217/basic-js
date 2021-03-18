
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members)){
    return false;
  }

  let nameOfdreamTeam = [];

  for(elem of members){
    if (typeof elem !='string') {
      continue;
    } else {
    nameOfdreamTeam.push(elem);
    }
  }

  let cut = nameOfdreamTeam.map(function(name) {
    return name[0];
  }).sort(function(a, b) {
    a.localeCompare(b);
  })
  return console.log(cut);



}
//     let temp = firstLetterOfName(elem);
//     dreamTeam+=temp==-1 ? '' : temp;
//   }
  
//   return dreamTeam.split('').sort().join('');
// };

// function firstLetterOfName(elem){
//   elem=elem.replace(/\s/g,''); //get rid of whitespases
//   return elem.length>0 ? elem[0].toUpperCase() : -1;
// }