'use strict';
(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };
  var onLoad = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };
  var onError = function (message) {
    var elementErorr = document.createElement('div');
    var setupSubmit = document.querySelector('.setup-submit');
    elementErorr.textContent = 'Похожие волшебники не загрузились ' + message;
    elementErorr.style.textAlign = 'center';
    document.querySelector('.setup-footer').insertBefore(elementErorr, setupSubmit);
  };

  window.similarWizards = {
    load: function () {
      window.backend.load(onLoad, onError);
    }
  };
})();
