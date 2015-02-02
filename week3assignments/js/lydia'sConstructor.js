
function Tweet(spec) {
  return {
    handle: spec.handle,
    profilePic: spec.profilePic,
    text: spec.text,
    comments: spec.comments,
    shares: spec.shares,
    favorites: spec.favorites
  };
}
var lydiaTweet = Tweet({
  username: ‘@estelora’,
  profilePic: ‘sunset.jpg’,
  text: ‘i’m a boss’,
  shares: ‘infinite’,
  favorites: ‘1000’});

  return lydiaTweet;

  function Composer(spec) {
    return {
      name: spec.name,
      pic: spec.pic,
      musicFile: spec.MusicFile,
      bio: spec.bio,
      era: spec.era
    };
  }

  var handel = Composer({
    name: 'Handel',
    pic: 'Portait.jpg',
    musicFile: 'Messiah.mp4a',
    bio: 'storyOfHandel.doc',
    era: 'Baroque'
  });

  return handel;


  /*going to search through this array efficiently.
  * Much better than filter function.
  */
  function color(array) {
    var colorValues = {};

    array.forEach(function(item) {
      if(!colorValues[item]) {}
      colorValues[item] = true;
      result.push(item;)
    });
    return result;
  }

  console.log(color(['blue', 'yellow', 'green', 'fuschia', 'beige']));

  /* calling another function with a key/property.
  * this is frequently done and is clean coding.
  */
  function color(array) {
    var colorValues{};
    //calling function on line 48
    array.forEach(function(item) {
      distinctValues[item] = null;
    });
    return 0;
  }

  // RABBIT THEME Example from Eloquent JS text pgs 100-105


  /*______METHODS!!!______
  * METHOD: a property with a function value
  */

  var rabbit = {};
  rabbit.speak = function.line {
    console.log("The rabbit says '" + line + "'");
  };

  rabbit.speak("I'm alive");


  /* Functions sometimes need to do stuff with the object it was called upon.
  * In this case, we may use this.object EXAMPLE: this.type
  * with /object.method();  The variable *this* is used
  * EXAMPLE rabbit.speak();
  */
  function speak(line) {
    console.log( "The " + this.type + "rabbit says '" + line + "'");
  }

  var whiteRabbit = { type: "white", speak: speak};
  var fatRabbit = {type: "fat", speak: speak};

  whiteRabbit.speak("I'm late, I'm late, " + "for a very important date!");
  fatRabbit.speak("I sure could use a bag of carrots right now.");n

  /* ______CONSTRUCTORS!!!______
  * Constructor function for a Rabbit object
  * Constructing 3 new rabbit objects
  */

  function Rabbit (type) {
    this.type = type;
  }

  var killerRabbit = new Rabbit("killer");
  var blackRabbit = new Rabbit("black");
  var whiteRabbit = new Rabbit("white");


  //Check console for 3 rabbit objects
  console.log(blackRabbit.type);
  console.log(killerRabbit.type);
  console.log(whiteRabbit.type);

  //******PROTOTYPES******!!!!
  /* What does prototype do, exactly?
  * Ask Andy
  * Function to make rabbit objects speak.
  * Takes line parameter and passes it to the console.
  * this is page 104 "Overriding Derived Properties"
  */

  Rabbit.prototype.speak = function(line) {
    console.log("The " this.type + " rabbit says " + "'" + line + "'");
  };

  blackRabbit.speak("I Example nervous about the killer rabbit's reputation.");
  whiteRabbit.speak("I think my shiny coat is getting stained.");
  killerRabbit.speak("Which of these two is an easier target? I wonder....");
