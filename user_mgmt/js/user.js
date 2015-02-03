// User constructs a new user object. For more details, see
// https://github.com/tiy-durham-fe-2015/curriculum/tree/master/assignments/user_mgmt
function User(spec) {
  var self = {
    firstName: spec.firstName,
    lastName: spec.lastName,
    email: spec.email,

    equal: function (otherUser) {
      return self.email === otherUser.email;
    }
  };
  //If we don't have a firstName, throw an error.
  if(!spec.firstName || spec.firstName === " ") {
    throw new Error("firstName is required");
  } else if (!spec.lastName || spec.lastName === " ") {
    throw new Error("lastName is required");
  } else if (!spec.email || spec.email === " ") {
    throw new Error("email is required");
  }
  return self;
}
