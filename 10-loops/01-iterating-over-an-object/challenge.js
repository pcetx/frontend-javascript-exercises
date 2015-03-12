module.exports.getKeys = function(object){
  var array = [];
  for (var key in object) {
    array.push(key);
  }
  return array;
};

module.exports.getValues = function(object){
  var array = [];
  for (var key in object) {
    array.push(object[key]);
  }
  return array;
};

module.exports.objectToArray = function(object){
  var array = [];
  for (var key in object) {
    array.push(key + " is " + object[key]);
  }
  return array;
};


/*





Complete the objectToArray function. This function should:

convert the object passed in to an array of strings
each string should be in the format of "[key] is [value]" for each key/value pair in the object
if an empty object is passed in, an empty array should be returned
For example:


objectToArray({name: "Rob", age: 101}) // should return ["name is Rob", "age is 101"]

*/