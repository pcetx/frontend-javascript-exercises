module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){
    var course = new Object();
    course.title = courseTitle;
    course.duration = courseDuration;
    course.students = courseStudents;
    return course;
};

module.exports.addProperty = function(object, newProp, newValue){
    if(object[newProp] === undefined){
      object[newProp] = newValue;
      return object;
    } else {
      return object;
    }
};

module.exports.formLetter = function(letter){
    return "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely,\n" + letter.sender; 
};

module.exports.canIGet = function(item, money){

    /*
    var applestore = {
        MacBook Air: 999,
        MacBook Pro: 1299,
        Mac Pro: 2499,
        Apple Sticker: 1
    };
    */

    if ((item === 'Apple Sticker') && (money >= 1)) {
      return true;
    } else if ((item === 'Mac Pro') && (money >= 2499)) {
      return true;
    } else if ((item === 'MacBook Air') && (money >= 999)) {
      return true;
    } else if ((item === 'MacBook Pro') && (money >= 1299)) {
      return true;
    } else {
      return false;
    }
};


/*

Complete the canIGet function. This function should:

Take two arguments:
item: represents what the user wants to buy
money: represents how many dollars a user has
return true if a user can afford a given item according to the price chart below, and false otherwise:
'MacBook Air' - $999
MacBook Pro' - $1299
'Mac Pro' - $2499
'Apple Sticker' - $1
Return false if the item is not in the above list of Apple products
Do this with 0 'if' conditions! (Hint: Place the above price table in an object).
For example:

canIGet('MacBook Air', 100) // returns false
canIGet('MacBook Air', 1000) // returns true
*/