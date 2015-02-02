(function () {

  var theBody = document.querySelector('body');

  theBody.onclick = function () {
    alert('Body was clicked!!!!');
  };

  var theDiv = document.querySelector('.button-container');

  theDiv.onclick = function (e) {
    alert('DIVVVVVVVVVVV');
  };

  var toggleHelp = document.querySelector('button');

  // function oneTimeEvent (e) {
  //   alert('BUTTON was clicked');
  //
  //   theButton.removeEventListener('click', oneTimeEvent);
  // }
  //
  // theButton.addEventListener('click', oneTimeEvent);

  function toggleClass(element, className) {
    var currentClasses = element.className;

    if (currentClasses.indexOf(className) >= 0) {
      element.className = currentClasses.replace(className, '').trim();
    } else {
      element.className += ' ' + className;
    }
  }


  toggleHelp.addEventListener('click', function (e) {
    e.stopPropagation();
    //theButton.parentNode.classList.toggle('show-help');
    toggleClass(toggleHelp.parentNode, 'show-help');

    toggleHelp.setAttribute('disabled', '');
    toggleHelp.removeAttribute('disabled');
  });

  // This is the same as the above handler
  // theButton.addEventListener('click', function (e) {
  //
  //   alert('BUTTON was clicked');
  // });

  // theButton.addEventListener('click', function (e) {
  //   e.stopPropagation();
  //
  //   alert('SECOND HANDLER');
  // });

  /// onclick="alert('hello')"

  var myElements = document.querySelectorAll('.page-text');

  for (var i = 0; i < myElements.length; ++i) {
    if (i !== 2) {
      var element = myElements[i];
      element.innerHTML = '<span style="color: blue">Shweet!</span>';
    }
  }



})();

// var firstP = document.querySelector('.page-text');
// firstP.innerHTML = '<span style="color: red">Shweet!</span>';
