

function showX() {
  var x = 400;

  function sayX() {
    alert(x);
  }
  sayX();
}

showX();






// function Dice(sides) {
//   if(!sides) {
//     sides = 6;
//   }
//       var NewDice = {
//         value: 1,
//       }
//
//       roll: function() {
//         newDice.value = Math.floor(Math.random() * sides) + 1;
//       }
//     };
//
//     newDice.roll();
//
//     return newDice;
// }
//
// var sixSided = Dice();
// var tenSided = Dice(10);
//
//
// console.log(tenSided.value);
// tenSided.roll();
// console.log(tenSided.value);
// tenSided.roll();
// console.log(tenSided.value);
// tenSided.roll();
