module.exports.newArray = function(a,b,c,d){
  var namesArray = new Array();
  namesArray.push(a);
  namesArray.push(b);
  namesArray.push(c);
  namesArray.push(d);
  return namesArray;
};

module.exports.firstAndLast = function(a){
  var lastElementIndex = a.length - 1;
  var newArray = new Array();
  newArray.push(a[0]);
  newArray.push(a[lastElementIndex]);
  return newArray;
};


