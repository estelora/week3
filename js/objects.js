// Objects
//
// Objects, in JavaScript can be thought of simply as
// collections of key/value pairs. They are a bit more
// complex than that, but that'll get the ball rolling.

// The {} notation creates an empty object:
var twitterMessage = {};

// You can add key/value pairs to any object:
twitterMessage.handle = 'DHH';
twitterMessage.text = 'Rails is teh bombz.';

// Now, you can access those values. The following line
// will log 'Rails is teh bombz.' out to the console:
console.log(twitterMessage.text);

// The object is stored in a variable called twitterMessage.
//
// The object has two *properties*: handle and text

// Now, what if we wanted to make several tweets
// and store them in an array? We *could* write the
// above code over and over:
//
// var twitterMessage1 = {};
// var twitterMessage2 = {};
//
// But there's a better way. Whenever you see duplicated
// code, always think: "I should write a function."

function TwitterMessage(handle, text) {
  var twitterMessage = {};

  twitterMessage.handle = handle;
  twitterMessage.text = text;

  return twitterMessage;
}

// Let's break that down. First, you'll notice that
// I capitalized the name of the function TwitterMessage.
//
// That's because TwitterMessage is a constructor function.
// That is, it is a function whose only purpose is to
// construct and return an object.
//
// It is standard practice in JavaScript to capitalize
// constructor function names.
//
// Now, we can make our array of tweets like this:

var tweets = [
  TwitterMessage('dhh', 'I love Rails'),
  TwitterMessage('cdavies', 'I love C#'),
  TwitterMessage('clinton', 'I love Clojure')
];

console.log(tweets[0].text); //logs
/* EXERCISE TIME!
 * https://github.com/tiy-durham-fe-2015/curriculum/blob/master/lectures/week3/1-monday-3.md
 */

// So far so good? If you're lost come talk to me, and I'll
// help you out.

// Now, we could have written the TwitterMessage function
// in several different ways, and all are roughly equivalent.
// Here's another fairly common approach that you will see:

// I've called it TwitterMessage2, just so I don't get a
// name collision, but normally, you wouldn't name a function
// TwitterMessage2!!

//OBJECT LITERAL Syntax Example

function TwitterMessage2(handle, text) {
  return {
    handle: handle,
    text: text
  };
}
var someOtherMessage = TwitterMessage2('cdavies', 'Wassup!');


// What you've just seen is called object literal notation.
//
// You can just create a new object, complete with properties
// and values:
//
// var instructor = {
//    name: 'Chris',
//    age: 34
// };
//
// Pretty nifty.

function Car(make, model, color, tireSize, trim) {
  return {
    make: make,
    model: model,
    color: color,
    tireSize: tireSize,
    trim: trim
  };
}

var mySubaru = Car('Forester', 'Subaru', undefined, undefined, 'ls');
//kind of annoying to use 'undefined' when adding stuff

Use spec method instead
spec is an object
spec method allows for flexible changing

function Car2(spec) {
  //set default with 0 as an option value
  if(!spec.tireSize === undefined) {
    spec.tireSize = 12;
  }

  return {
    make: spec.make,
    model: spec.model,
    color: spec.color || 'grey',  // another way to set a default value (on the right with ||)
    tireSize: spec.tireSize || 12, //cannot set 0 as an option value here, see lines 116-118
    trim: spec.trim,
    plate: spec.plate
  };
}

// Objects as dictionaries/hash-tables
//
// Alright, so far, we've talked about objects, and they
// appear fairly similar to objects in other languages.
//
// But in JavaScript, objects can really be treated as
// simple key/value collections, as I mentioned. And the
// keys can be strings. Let me demonstrate by writing
// the TwitterMessage function two more times:

function TwitterMessage3(handle, text) {
  var twitterMessage = {};

//This is hard to change for the future
// Use spec. as solution ; use an object to make an object
//Now order does not matter

  twitterMessage['handle'] = spec.handle;
  twitterMessage['text'] = spec.text;
  twitterMessage['email'] = spec.email;
  twitterMessage['userImg'] = spec.userImg;

  return TwitterMessage3;
}

Twittermessage3({'dhh,' 'Says hi', undefined});
//Now order does not matter
Twittermessage3({ handle: 'dhh' text: 'Says hi', favorites: 33 })


//this is how we can 'check to see if the spec' is working
function TwitterMessage3(spec) {
  if(!spec.retweets) {
    //if it's not defined, defines it as zero so there's not 'undefined'
    spec.retweets < 0;
  }
  return {
    email: spec.email,
    handle: spec.handle,
    text: spec.text,
    email: spec.email,
    userImg: specUserImg
  };
}

function TwitterMessage4(handle, text) {
  return {
    'handle': handle,
    'text': text
  };
}

// This produces the same result as
// console.log(twitterMesage.text);
console.log(TwitterMessage['text']);

fucntion twitterUser (handle, img) {
  var user = {};

  user.handle = handle;
  user.profilePic = img;

  return user;
}

function MyTwitterMessage(handle, profilePic, text, retweets, favorites, timeStamp, date, comments) {
  var tweet = {};
  var user {};


  tweet.user = twitterUser(handle, profilePic);
  tweet.text = text;
  tweet.retweets = retweets;
  tweet.favorites = favorites;
  tweet.timeStamp = timeStamp;
  tweet.comments = comments;

  return tweet;
  return user;
}

function MyGmailMessage(userAddress, recipients, forward, reply, bcc, ccc, time, date, message,
  signature, attachments, hyperlinks) {

  var MyGmailMessage{};

  MyGmailMessage.userAddress = userAddress;
  MyGmailMessage.recipients = recipients;
  MyGmailMessage.forward = forward;
  MyGmailMessage.reply = reply;
  MyGmailMessage.bcc = bcc;
  MyGmailMessage.ccc = ccc;
  MyGmailMessage.time = time;
  MyGmailMessage.date = date;
  MyGmailMessage.message = message;
  MyGmailMessage.signature = signature;
  MyGmailMessage.attachents = attachments;
  MyGmailMessage.hyperlinks = hyperlinks;

  return MyGmailMessage;
}

// What you see here is that properties can be
// set and accessed via [] notation. Generally, you wouldn't
// want to do this. It is harder for the browser to
// optimize code that accesses properties via []. But,
// there *are* times when this is really handy.
//
// This also means that you can have properties with
// spaces in their names:
//
// `twitterMessage`['retweet count'] = 23;
//
// That line of code would actually work. But it's pretty
// bad practice. And furthermore, you wouldn't be able
// to access the 'retweet count' property using dot notation:
//
// twitterMesage.retweet count
//
// That's invalid code.

function TwitterMessage5(handle, text) {
  var tweet = {
    handle: handle,
    text: text,
    toString: function () {
      return tweet.handle + ' says ' + tweet.text;
    }
  };

  return tweet;
}

var myTweet = TwitterMessage5('chris', 'Hello');

 * Logs: 'chris says Hello'
console.log(myTweet.toString());

var yourTweet = TwitterMessage5('jane', 'Goodbye');

// Logs: 'jane says Goodbye'
console.log(yourTweet.toString());

/* Handy, eh?
 *
 * Objects can have functions. In this case, those functions
 * are generally called methods. You've already used
 * methods before.
 *
 * Remember doing this?
 *
 * Math.round(34.5);
 *
 * Round is a method on a global object called Math.
 *
 * The Math object might look like this:
 *
 * var Math = {
 *    round: function (number) {
 *        * Do rounding logic here and return it...
 *    }
 * };


 * One last point about objects. You'll often see them
 * written in a way I haven't shown yet. Let me show you
 * now...
 */

function TwitterMessage6(handle, text) {
  return {
    handle: handle,
    text: text,
    toString: function () {
      return this.handle + ' says ' + this.text;
    }
  };
}

/* Woah. What's this?
 *
 * this is a keyword in JavaScript. It means: "get the current
 * context or owner of the executing code".
 *
 * So, in the case of toString, the this keyword refers to the
 * owner of the toString method. And the owner of that method
 * is? The object to which it belongs.
 *
 * Cool, eh? Well, only sort of.
 *
 * The problem is, you can change the ownership of a method
 */ pretty easily, and often accidentally.

var tweet6 = TwitterMessage6('chris', 'Hello');

// chris says Hello
console.log(tweet6.toString());

var toStringFunction = tweet6.toString;

// undefined says undefined
console.log(toStringFunction());

// When we assigned tweet6's toString function to a variable,
// and then called it that way, it stopped working! That's
// because "this" no longer refers to the object tweet6, but
// now refers to the global "window" object. And the global
// "window" object doesn't have a "handle" or "text" property.
//
// Confused?
//
// Yeah. Well, it *is* confusing.




// Let's try the same exercise, but this time using
// TwitterMessage5, which did not use the "this" keyword.


var tweet5 = TwitterMessage5('dhh', 'Hello');

// dhh says Hello
console.log(tweet5.toString());

var tweet5ToString = tweet5.toString;

// dhh says Hello
console.log(tweet5ToString());


/*****HASHING STUFFS *****/
var my { }; 
  my[‘name’] = ‘Chris’;
 my[‘favorite-color’] = ‘red’; 
  console.log(my[‘name’]); my[‘name’] = ‘joe’; 

// ... So, when would you access an object's properties
// using [] notation?
//
// There are really quite a few scenarios. Let's take one.
// Let's write a function that takes an array and returns
// a new array containing distinct values from the original
// array:


/*Distinct takes an array and returns
 * an array with the de-duplicated values
 * from the initial array
 */

function distinct(array) {
  var distinctValues = {};

  array.forEach(function (item) {
    if (!distinctValues[item]) {}
      distinctValues[item] = true;
      result.push(item);
  });

  return result;
  // return Object.keys(distinctValues);
}

console.log(distinct(['hello', 'world', 'hello', 'everyone', 'here']));

//like a hash search
function distinct(arr) {
  var result = [];


  /* Imageine arr has millions of items
   * Filter will iterate once through array (1,000,000 operations)
  */
  arr.filter(function (currentValue) {
    /* result.indexOf iterates thru the result array
     * if result arr is .5mill items long,
     * we are stanning .5millx every time we use this function
     * INEFFICIENT!!!!!
     */
    if result.indexOf(currentValue === -1) {
      result.push(item);
    }
  });
}

/* Woah! You're blowing my mind.
 *
 * OK. Well, let's break it down.
 *
 * distinct takes an array as a parameter.
 *
 * Next, it creates an empty object called distinctValues.
 *
 * Then, it loops through the array, and for each value
 * in the array, it assigns a property on distinctValues.
 *
 * Objects never can have more than one property with the
 * same name. In other words:
 *
 * var me = {
 *    email: 'foo@bar.com',
 *    email: 'bar@baz.com'
 * }
 *
 * console.log(me.email);
 *
 * That will log: 'bar@baz.com'. Duplicate properties
 * are not allowed. The last one overwrites the first.
 *
 * Lastly, you see this line:
 *
 * return Object.keys(distinctValues);
 *
 * Looks cray cray, but here's what's up.
 *
 * Object.keys is a function that takes an object as
 * a parameter. It returns an array containing each
 * of that object's keys.
 *
 * So:
 *
 * var me = {
 *   email: 'cd@example.com',
 *   name: 'Chris'
 * };
 *
 * var myKeys = Object.keys(me);
 *
 * myKeys would be: ['email', 'name']


 * Alright, so sometimes it's OK to use [] notation to
 * dynamically get/set properties on an object.
 *
 * Fine. Let's move along.
 *
 * What values can an object's property contain?
 *
 * Any value. Any value that a variable can contain, a property
 * can contain. This means that a property can be a
 * string:
 *
 * {
 *    email: 'chris@davies.com'
 * }
 *
 * Or it can be a number:
 *
 * {
 *    age: 34.5
 * }
 *
 * Or it can be another object!!
 *
 * var me = {
 *    name: 'Chris',
 *    address: {
 *      street: 'Somewhere in Durham St',
 *      city: 'Durham',
 *      state: 'NC'
 *    }
 * };
 *
 * In this case, you'd access my state like so:
 *
 * console.log(me.address.state);
 *
 * ... Or a property could be an array of values:
 *
 * var me = {
 *   name: 'Chris',
 *   recentTweets: [
 *     { message: 'I write JS' },
 *     { message: 'I write HTML' },
 *     { message: 'I like CSS' }
 *   ]
 * };
 *
 * console.log(me.recentTweets[0].message);
 *
 * Etc, etc, etc.
 *
 * Properties are just a name that can point to any value,
 * exactly like variables in that sense.
 *
 * They can even point to functions. In fact, they very often
 * do! Let's do that right now.
 */

function distinct(array) {
  var distinctValues = {};

  array.forEach(function(item) {
    distinctValues[item] = null;
  });
  return O
}
// Much better, eh?
//
// JavaScript developers don't all agree on this one, but
// my opinion, and the opinion of a *very* prominent
// JavaScript expert (http://douglascrockford.com/) is
// that you should just avoid using "this" at all.



// Well, there's one other concept I haven't covered:
// prototypal inheritance. We'll cover that later (maybe
// much later). I dislike it for reasons similar to my
// dislike of the "this" keyword. And I think you can be a great
// JavaScript developer without ever explicily using it!



// Aight. I think that's good enough for now.
// You've reached the end of JavaScript objects 101!
//
// Look at an lol cat. You've earned it.
// http://www.lolcats.com/
