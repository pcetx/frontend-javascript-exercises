module.exports.formLetter = function(firstName, senderName, message) {
    return "Hello " + firstName + ",\n\n" + message + "\n\n" + "Sincerely,\n" + senderName;
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
    var firstword = bigString.substring(startA,endA);
    var secondword = bigString.substring(startB,endB);
    return firstword.concat(secondword);
};

module.exports.findFirstMatch = function(text, searchString) {
    return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
    return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
    return text.substring((text.indexOf(searchString) + searchString.length), text.lastIndexOf(searchString));
};




