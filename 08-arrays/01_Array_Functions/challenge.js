module.exports.reversePlusOne = function(a){
  var newArray = new Array();
  var totalElements = a.length - 1;
  for (var i = 0; i <= totalElements; i++) {
    newArray.unshift(a[i]);
  }
  newArray.unshift(1);
  return newArray;
};

module.exports.plusesEverywhere = function (a) {
  return a.join('+');
};

module.exports.arrayQuantityPlusOne = function (a) {
  return a.length + 1;
};

