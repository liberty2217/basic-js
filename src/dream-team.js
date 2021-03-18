const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    
  //checking that passed argument is always array data type;
  if (!Array.isArray(members)) {
    return false;
  }

  //since the passed array includes all data types - save in variable only string 
  let nameOfdreamTeam = [];
  for (elem of members) {
    if (typeof elem !='string') {
      continue;
    } else {
    nameOfdreamTeam.push(elem);
    }
  }
  
  //configure obtained array of string by alphabetical sort and leaving only first letters
  let resultArray = nameOfdreamTeam.map(takeFirstLetter).sort(alphabeticalSort)

  return resultArray.join('');
}

function takeFirstLetter(name) {
  //since string data type can include space as a first symbol - remove all spaces in names
  let removedSpace = name.replace(/\s/g,'');
  return removedSpace[0].toUpperCase();
}

function alphabeticalSort(curName, nextName) {
    if (curName < nextName) { return -1; }
    if (curName > nextName) { return 1; }
    return 0;
}