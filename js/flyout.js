/*link to stop propagation so events don't travel to the whole DOM
* https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation
* STOP PROPOGATION CONCEPT
*/

/* When we click the button, menu is shown
 * When you click the button, the menu should hide
 * When you click the menu or the page, the menu should hide
 */

var menuList = document.querySelector('.menu-list');
var buttonAction = document.querySelector('.menu-action');

/*If we click anywhere on the page, hide the menu if it is showing
 *Changed from .onclick to .addEventListener so we can run > 1 function
 * addEventListener is POWER!!!!!!!!!!!! BAMMMMM!!!
 */
document.body.addEventListener('click', function() {
  //If menu is already showing, call hideMenu();
  if (menuList.classList.contains("show")) {
    hideMenu();
  }
});






//Changed from .onclick to .addEventListener so we can run > 1 function
buttonAction.addEventListener('click', function(event) {
  /*link to stop propagation so events don't travel to the whole DOM
  * https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation
  * STOP PROPOGATION CONCEPT
  * If button is clicked, we don't want the click event to propogate up to the entire document
  * We don't want a child event to go all the way to the parents
  */
  event.stopPropagation();
  //If menu is already showing, call hideMenu();
  if (menuList.classList.contains("show")) {
    hideMenu();
  //Otherwise, menu is not showing, call showMenu();
  } else {
    showMenu();
  }
});

/* Onclick, add .show class
 * Every dom element has 'classList'
 */
function showMenu() {
  menuList.classList.add("show");
}

//On click take away .show class from menuList's 'classList'
function hideMenu() {
  menuList.classList.remove("show");
}
