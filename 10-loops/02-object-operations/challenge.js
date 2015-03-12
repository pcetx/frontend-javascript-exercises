module.exports.copy = function(object){
  var newObject = {};
  for (key in object) {
    newObject[key] = object[key];
  }
  return newObject;
};

module.exports.extend = function(dest, src){
  for (key in src) {
    dest[key] = src[key];
  }
  return dest;
};

module.exports.hasElems = function(object,arrayOfElements){
  for (var i = 0; i < arrayOfElements.length; i++) {
    if (!(object[arrayOfElements[i]])){
      return false;
    }
  }
  return true;
};

