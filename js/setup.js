'use strict';

(function () {
  var setupSubmit = document.querySelector('.setup-submit');
  var setupPlayer = document.querySelector('.setup-player');
  var playerCoat = setupPlayer.querySelector('.wizard-coat');
  var playerEyes = setupPlayer.querySelector('.wizard-eyes');
  var playerFireball = document.querySelector('.setup-fireball-wrap');
  var playerCoatColor = '';
  var playerEyesColor = '';

  var updateWizards = function () {
    var wizards = window.similarWizards.wizards();

    var getRank = function (wizard) {
      var rank = 0;
      if (wizard.colorCoat === playerCoatColor) {
        rank += 2;
      }
      if (wizard.colorEyes === playerEyesColor) {
        rank += 1;
      }
      return rank;
    };

    var compareNames = function (first, second) {
      if (first > second) {
        return 1;
      } else if (second > first) {
        return -1;
      } else {
        return 0;
      }
    };

    wizards.sort(function (second, first) {
      var compare = getRank(first) - getRank(second);
      if (compare === 0) {
        compare = compareNames(first.name, second.name);
      }
      return compare;
    });
    window.similarWizards.renderWizards(wizards);
  };

  playerCoat.addEventListener('click', function () {
    playerCoatColor = window.util.getRandomArrElement(window.data.coatColors);
    playerCoat.style.fill = playerCoatColor;
    setupPlayer.querySelector('input[name = coat-color]').value = playerCoatColor;
    window.debounce(updateWizards);
  });
  playerEyes.addEventListener('click', function () {
    playerEyesColor = window.util.getRandomArrElement(window.data.eyesColors);
    playerEyes.style.fill = playerEyesColor;
    setupPlayer.querySelector('input[name = eyes-color]').value = playerEyesColor;
    window.debounce(function () {
      updateWizards();
    });
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
  var onLoad = function (response) {
    document.querySelector('.setup').classList.add('hidden');
  };
  var onError = function (message) {
    var elementErorr = document.createElement('div');
    elementErorr.textContent = message;
    elementErorr.style.textAlign = 'center';
    document.querySelector('.setup-footer').insertBefore(elementErorr, setupSubmit);
  };

  var form = document.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(form), onLoad, onError);
  });

  window.setup = {
    updateWizards: updateWizards
  };
})();

