// TODO: Write up a snazzy article on scope


//function is called instantly, everything is scoped to that function.
(function () {
  var y = 6000;


function foo() {
  var x = 400;

  function sayX() {
    alert(x);
  }
  return sayX();
}

var fn = foo();
fn();

})();//corresponds to line 5.
