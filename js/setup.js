'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#e6e848', '#e848d5', '#5ce6c0', '#30a8ee', '#ee4830'];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomArrElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var generateData = function (count) {
  var wizards = [];
  for (var i = 0; i < count; i++) {
    wizards.push(
      {
        name: getRandomArrElement(names) + ' ' + getRandomArrElement(surnames),
        coatColor: getRandomArrElement(coatColors),
        eyesColor: getRandomArrElement(eyesColors)
      }
    );
  }
  return wizards;
};

var renderWizard = function (wizard){
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
var wizards = generateData(4);

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open-icon');
var setupOverlay = document.querySelector('.setup');
var setupClose = setupOverlay.querySelector('.setup-close');
var setupPlayer = document.querySelector('.setup-player');
var playerCoat = setupPlayer.querySelector('.wizard-coat');
var playerEyes = setupPlayer.querySelector('.wizard-eyes');
var playerFireball = document.querySelector('.setup-fireball-wrap');

var openPopup = function () {
  setupOverlay.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
};

var closePopup = function () {
  setupOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
};

var onPopupEscKeydown = function (evt) {
  if (evt.key === 'Escape') {
    closePopup();
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});
setupClose.addEventListener('click', function () {
  closePopup();
});
setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});
playerCoat.addEventListener('click', function () {
  playerCoat.style.fill = getRandomArrElement(coatColors);
  setupPlayer.querySelector('input[name = coat-color]').value = playerCoat.style.fill;
});
playerEyes.addEventListener('click', function () {
  playerEyes.style.fill = getRandomArrElement(eyesColors);
  setupPlayer.querySelector('input[name = eyes-color]').value = playerEyes.style.fill;
});
var k = 0;
playerFireball.addEventListener('click', function () {
  if (k >= fireballColors.length) {
    k = 0;
  }
  playerFireball.style.backgroundColor = fireballColors[k];
  playerFireball.querySelector('input[name = fireball-color]').value = fireballColors[k];
  k++;
});
