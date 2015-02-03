/* Create a form with first name, last name, and email fields
 * When the form is submitted,
 * Create a new user object with the field values
 * Add that user to the ObjectStore
 * Show all users in the ObjectStore
*/

var firstName = document.querySelector('.first-name');
var lastName = document.querySelector('.last-name');
var email = document.querySelector('.email');
var addButton = document.querySelector('.add');
var userDiv = document.querySelector('.show-users')
var userStore = ObjectStore();


//Construct user object based on the input values from html.
function addUser() {
  var newData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value
  };

  //resets input to null
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  var newUser = User(newData);
  userStore.add(newUser);
  console.log(newData);
}

addButton.onclick = function() {
  addUser();
  showUsers();
}

/* store contains the array of users
 * array has users
 * each user has firstName, lastName, and email
 */
function showUsers() {
  // get the array of users as var list
  var list = userStore.query();
  //map by each user in the array
  var userData = list.map(function(user) {
   var firstName =  user.firstName;
   var lastName = user.lastName;
   var email = user.email;

   /*return concatenated string for every user & their info
    *each user is in a separate div lydia@wearsthesexypants.com
    */
   return "<div class='user-item'>" + firstName + " " + lastName + " " + email + "</div>";
  });

  /*add all our stuffs to html via inner html, teehee
   *array.join function to get rid of commas and make a cute string!
   */
  userDiv.innerHTML = userData.join(' '); // harmless in this case
}
