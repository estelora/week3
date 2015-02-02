(function () {
  //1:07

  //Get a textarea with a maxlength attribute
  var textarea = document.querySelector('textarea[maxlength]');
  /* grab things, then store them in some variable
   * then we can manipulate them
   */
   //1:09
     //Get the status associated with that textarea
     //everything is relevant to our textarea, we can isolate components in js
  var status = textarea.parentNode.querySelector('.maxlength-status')
  var maxlength = Number(textarea.getAttribute('maxlength'));

  status.textContent = String(charsRemaining) + 'characters remaining';
  function updateCharsRemaining() {
      var charsRemaining = maxLength - textarea.value.length;
      status.textContent = charsRemaining + ' characters remaining';
  }

  textarea.addEventListener('keyup', updateCharsRemaining);

  updateCharsRemaining();

})();
