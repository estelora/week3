(function () {

  var menuAction = document.querySelector('.menu-action');

  menuAction.addEventListener('click', function () {
    toggleClass(menuAction.parentNode, 'menu-show');
  });

  // Turns a class on or off on an element
  function toggleClass(element, className) {
    var currentClasses = element.className;

    if (currentClasses.indexOf(className) >= 0) {
      element.className = currentClasses.replace(className, '').trim();
    } else {
      element.className += ' ' + className;
    }
  }

})();
