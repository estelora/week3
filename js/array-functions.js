// In this file, we are going to implement a bunch
// of functions that are now part of the JavaScript
// standard:
//
// The descriptive comments of each function are
// provided by MDN
//
/////////////////////////////////////////////////////


// The indexOf() method returns the first index
// at which a given element can be found in the
// array, or -1 if it is not present.
//
// arr - the array to be searched
//
// searchElement -
//    Element to locate in the array.
//
// fromIndex -
//    The index to start the search at. If the
//    index is greater than or equal to the array's
//     length, -1 is returned, which means the
//     array will not be searched. If the provided
//     index value is a negative number, it is
//     taken as the offset from the end of the
//     array. Note: if the provided index is
//     negative, the array is still searched
//     from front to back. If the calculated
//     index is less than 0, then the whole array
//     will be searched. Default: 0 (entire array
//     is searched).
function indexOf(arr, searchElement) {
  for (var i = 0; i < arr.length; ++i) {
    var currentItem = arr[i];

    if (currentItem === searchElement) {
      return i;
    }
  }

  return -1;
}

// Returns an array of indices containing
// all of the indices where searchElement
// exists in arr
function indexesOf(arr, searchElement) {
  var result = [];

  for (var i = 0; i < arr.length; ++i) {
    var currentItem = arr[i];

    if (currentItem === searchElement) {
      result.push(i);
    }
  }

  return result;
}

// indexesOf(['a', 'b', 'c', 'a'], 'a');
// // should return [0, 3]
//
// var ages = [34, 25, 22, 25];
// var index = indexOf(ages, 22); // 2
// var index3 = ages.indexOf(22);
//
// var index2= indexOf(['a', 'b', 'c'], 'd'); // -1
// console.log(index);

// TODO: indexesOf

// The join() method joins all elements of an array into a string.
//
// arr
//    The array whose items will be joined into a string
//
// separator
//    Optional. Specifies a string to separate each element of
//    the array. The separator is converted to a string if
//    necessary. If omitted, the array elements are separated
//    with a comma.
function join(arr, separator) {

}

// The reverse() method reverses an array in place.
// The first array element becomes the last and the
// last becomes the first.
//
// arr is the array to be reversed. arr will be
// modified by this method.
function reverse(arr) {

}

// The filter() method creates a new array with all elements
// that pass the test implemented by the provided function.
//
// arr
//    The array to be filtered
//
// callback
//    Function to test each element of the array. Return true
//    to keep the element, false otherwise. callback is called
//    with three arguments:
//    currentValue
//      The current element being processed in the array.
//    index
//      The index of the current element being processed in the array.
//    array
//      The array every was called upon.
function filter(arr, passesTest) {
  var result = [];

  for (var i = 0; i < arr.length; i += 1) {
    var currentValue = arr[i];

    if (passesTest(currentValue)) {
      result.push(currentValue);
    }
  }

  return result;
}

// var users = ['chris', 'jane', 'carlos', 'tom', 'tim'];
// var usersWithC = filter(users, function (userName) {
//   var firstChar = userName[0];
//   var doesUserNameStartWithC = (firstChar === 'c');
//   return doesUserNameStartWithC;
// });
//
// var usersWithT = users.filter(function (userName) {
//   return userName[0] === 't';
// });
//
// var userNameLengths = users.map(function (userName) {
//   return userName.length;
// });



// usersWithC will be: ['chris', 'carlos'];


// The find() method returns a value in the array, if an element
// in the array satisfies the provided testing function. Otherwise
// undefined is returned.
//
// arr
//    The array to be searched
//
// callback
//    Function to execute on each value in the array, taking three
//    arguments:
//    element
//      The current element being processed in the array.
//    index
//      The index of the current element being processed in the array.
//    array
//      The array find was called upon.
function find(arr, callback) {

}

// The every() method tests whether all elements
// in the array pass the test implemented by the
// provided function.
//
// The every method executes the provided callback
// function once for each element present in the
// array until it finds one where callback
// returns a falsy value. If none are falsy, every
// returns true. Otherwise, every returns false.
//
// arr is the array to test
//
// callback - function to test for each element,
// taking three arguments:
//    currentValue
//      The current element being processed in the array.
//    index
//      The index of the current element being processed in the array.
//    array
//      The array every was called upon.
function every(arr, callback) {

}

// The some() function tests whether some element in
// the array passes the test implemented by the
// provided function.
//
// Parameters are the same as in other functions
// of this signature.
//
// some executes the callback function once for
// each element present in the array until it
// finds one where callback returns a true value.
function some(arr, callback) {

}

// The map() method creates a new array with the results
// of calling a provided function on every element in this array.
//
// arr is the array to be mapped
//
// callback
//    Function that produces an element of the new Array,
//    taking three arguments:
//    currentValue
//      The current element being processed in the array.
//    index
//      The index of the current element being processed in the array.
//    array
//      The array map was called upon.
function map(arr, callback) {

}

// The forEach() method executes a provided
// function once per array element.
//
// arr is an array
//
// callback is the method to call for each item
// in arr
//
// callback will be passed:
// currentValue - The current element being processed in the array.
// index - The index of the current element being processed in the array.
// array - The array forEach was called upon.
function forEach(arr, callback) {

}
