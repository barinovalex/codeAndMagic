'use strict';
(function () {
  var ENTER_KEY = 'Enter';
  var ESCAPE_KEY = 'Escape';

  var getRandomArrElement = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  var isEscapeEvent = function (key, action) {
    if (key === ESCAPE_KEY) {
      action();
    }
  };

  var isEnterEvent = function (key, action) {
    if (key === ENTER_KEY) {
      action();
    }
  };
  window.util = {
    getRandomArrElement: getRandomArrElement,
    isEscapeEvent: isEscapeEvent,
    isEnterEvent: isEnterEvent
  };
})();
