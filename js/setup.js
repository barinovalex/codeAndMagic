'use strict';

(function () {
  var setupPlayer = document.querySelector('.setup-player');
  var playerCoat = setupPlayer.querySelector('.wizard-coat');
  var playerEyes = setupPlayer.querySelector('.wizard-eyes');
  var playerFireball = document.querySelector('.setup-fireball-wrap');
  playerCoat.addEventListener('click', function () {
    playerCoat.style.fill = window.util.getRandomArrElement(window.data.coatColors);
    setupPlayer.querySelector('input[name = coat-color]').value = playerCoat.style.fill;
  });
  playerEyes.addEventListener('click', function () {
    playerEyes.style.fill = window.util.getRandomArrElement(window.data.eyesColors);
    setupPlayer.querySelector('input[name = eyes-color]').value = playerEyes.style.fill;
  });
  var k = 0;
  playerFireball.addEventListener('click', function () {
    if (k >= window.data.fireballColors.length) {
      k = 0;
    }
    playerFireball.style.backgroundColor = window.data.fireballColors[k];
    playerFireball.querySelector('input[name = fireball-color]').value = window.data.fireballColors[k];
    k++;
  });
})();

