var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    if(n === undefined){
      return array[0];
    } else if (n > array.length && typeof n === 'number' ) {
      return array;
    } else if (n !== undefined && typeof n === 'number' ) {
      return array.splice(0, n);
    } else{
      return "Second Argument must be a number";
    }

  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    if(n === undefined){
      return array[array.length-1];
    } else if (n > array.length && typeof n === 'number' ) {
      return array;
    } else if (n === 0 && typeof n === 'number' ) {
      return array.splice(0,array.length);
    } else if (n !== undefined && typeof n === 'number' ) {
      return array.slice(n-1);
    } else{
      return "Second Argument must be a number";
    }

  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    var uniqArr = [];
    for (var i = 0; i < array.length; i++) {
      if(uniqArr.indexOf(array[i]) === -1){
        uniqArr.push(array[i]);
      }
    }
    return uniqArr;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    return array.map(function(obj){
      return obj[key];
    });
  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
    return array.indexOf(target) !== -1 ? true : false;
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {
    newArr = [];
    array.forEach(function(i){
      if(Array.isArray(i)){
        newArr = newArr.concat(myFunctions.flatten(i));
      } else {
        newArr.push(i);
      }
    });
    return newArr;
  }
};
module.exports = myFunctions;
