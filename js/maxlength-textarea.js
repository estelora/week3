(function () {

  // Get a textarea element that has a maxlength attribute
  var textareas = document.querySelectorAll('textarea[maxlength]');

  for (var i = 0; i < textareas.length; ++i) {
    maxLengthTextarea(textareas[i]);
  }

  function maxLengthTextarea(textarea) {
    // Get the status element associated with that textarea
    var status = textarea.parentNode.querySelector('.maxlength-status');

    // Grab the value of the maxlength attribute, and make sure
    // it is a number!!!
    var maxLength = Number(textarea.getAttribute('maxlength'));

    function updateCharsRemaining(e) {
      console.log(e);

      // Compute how many characters are remaining:
      // (maxLength - length of textarea text)
      var charsRemaining = maxLength - textarea.value.length;

      // Display the number of characters remaining in the
      // status element...
      status.textContent = charsRemaining + ' characters remaining';
    }

    textarea.addEventListener('keyup', updateCharsRemaining);

    // If you wanted to stop the user from typing, you would do something
    // like this:
    //
    // textarea.addEventListener('keydown', function (e) {
    //   var length = textarea.value.length;
    //   var deleteKey = 46;
    //   var backSpace = 8;
    //
    //   if (length >= 20 && e.keyCode !== deleteKey && e.keyCode !== backSpace) {
    //     e.preventDefault();
    //   }
    // });


    updateCharsRemaining();
  }

})();
