'use strict';
(function () {
  var setupOpen = document.querySelector('.setup-open-icon');
  var setupOverlay = document.querySelector('.setup');
  var setupClose = setupOverlay.querySelector('.setup-close');


  var openPopup = function () {
    setupOverlay.style.left = '';
    setupOverlay.style.top = '';
    setupOverlay.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscKeydown);
  };

  var closePopup = function () {
    setupOverlay.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscKeydown);
  };

  var onPopupEscKeydown = function (evt) {
    window.util.isEscapeEvent(evt.key, closePopup);
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt.key, openPopup);
  });
  setupClose.addEventListener('click', function () {
    closePopup();
  });
  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt.key, closePopup);
  });
})();
