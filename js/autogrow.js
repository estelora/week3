(function () {

  function autogrow(textarea) {
    // After the textarea, we will insert some
    // HTML which will wrap the textarea.
    textarea.insertAdjacentHTML(
      'afterend',
      '<div class="autogrow-textarea-container">' +
      '<div></div>' +
      '</div>');

    // Next, we grab the element we just inserted
    // (.autogrow-textarea-container)
    var wrapper = textarea.nextSibling;
    var mirroredText = wrapper.querySelector('div');

    // Now, let's put our textarea inside of its
    // wrapper...
    wrapper.appendChild(textarea);

    // copyText will copy text from the textarea
    // to the wrapper's inner div, which causes
    // the wrapper to grow
    function copyText() {
      mirroredText.textContent = textarea.value;
    }

    // When the user inputs anything, copyText
    wrapper.addEventListener('input', copyText);

    // Required for older versions of IE, opera
    wrapper.addEventListener('keydown', copyText);
    wrapper.addEventListener('keyup', copyText);
  }

  // For every autogrow textarea on the page attach
  // the autogrow behavior
  utils.querySelectorArray('textarea.autogrow')
    .forEach(autogrow);

})();
