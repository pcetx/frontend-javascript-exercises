module.exports.sumNumbers = function(array){
  var count = 0;
  var length = array.length - 1;
  if(array === []){
    return 0;
  } else {
    for (i = 0; i <= length; i++) {
      count += array[i];
    }
  }
  return count;
};

module.exports.splitAndLowerCaseString = function(inputString){
  var array = new Array();
  var lowerString = inputString.toLowerCase();
  var newArray = lowerString.split(",");
  for (var i = 0; i < newArray.length; i++) {
    array.push(newArray[i]);
  }
  return array;
};

module.exports.addIndex = function(array){
  var newArray = [];
  var indexPosition = 0;
  for (var i = 0; i < array.length; i++) {
      newArray.push(indexPosition + " is " + array[i]);
      indexPosition += 1;
  }
  return newArray;
};

 

