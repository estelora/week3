// Create RangeEnumerable(fromX, toY) which takes two arguments, and produces a range of integers from fromX to toY, inclusive
// For example, given the following line:

// var enumerable = RangeEnumerable(1, 5);
// If one were to enumerate through "enumerable", one would get 1, 2, 3, 4, 5

//create a constrtuctor to build an object and return it

function RangeEnumerable(fromX, toY) {
  var cancelled = false;
  var options  = {
    cancel: function () {
      cancelled = true;
    }
  };
  //all logic for this is here
  var range = {
    enumerate: function(callback) {
      for(var x = fromX; x<= toY; x++ ) {
        if(cancelled) {
          break;
        }
        callback(x, options);
      }
    }
  };

  return range;
}

var testEnum = RangeEnumerable(1, 10);
testEnum.enumerate(function(item, loop) {
  console.log(item);
  if(item > 40){
    loop.cancel();
  }
});
var testEnum1 = RangeEnumerable(9, 20);
testEnum1.enumerate(function(item, loop) {
  console.log(item);
  if(item > 40){
    loop.cancel();
  }
});
var testEnum2 = RangeEnumerable(3, 7);
testEnum2.enumerate(function(item, loop) {
  console.log(item);
  if(item > 40){
    loop.cancel();
  }
});

var testEnum3 = RangeEnumerable(3, 49);
testEnum3.enumerate(function(item, loop) {
  console.log(item);
  if(item >= 40){
    loop.cancel();
  }
});


Do a string enumerable

Do an array enumerable

function LinqEnumerable(enumerable) {
  return {

  };
}






var users = UsersEnum();



// { fullName : 'Chris Davies', email: 'h@eample.com'}

users.map(function(user)) {
  return{ name: user.fullName};
}

//The ultimate goal

// var usersToDisplay = users
// .skip(50)
// .take(10)
// .map(function(user) {
//   return { name: user.fullName };
// })
// .toArray();
//
// console.log(
//   LinqEnumerable(RangeEnumerable(2, 10000))
//     .skip(10)
//     .filter(isEven)
//     .take(5)
//     .map(String)
//     .toArray());
