module.exports.stream = function(conditionalFn, actionFn){
  while(conditionalFn()){
    actionFn();
  }
};

module.exports.sumNumbers = function(arrayOfNumbers){
  var total = 0;
  while (arrayOfNumbers !== []) {
    if (arrayOfNumbers === []) {
      return 0;
    } else {
      for (var i = 0; i < arrayOfNumbers.length; i++) {
        total =  total + arrayOfNumbers[i];
      }
      return total;
    }
  }
};



/*

Complete the sumNumbers function. This function should:

take an array of numbers as an argument.
return the sum of the numbers.
this function should use a while loop.
For example:

sumNumbers([]); // should return 0.

sumNumbers([1,2,3,4]); // should return 10.
*/