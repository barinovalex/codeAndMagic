'use strict';

(function () {
  var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#e6e848', '#e848d5', '#5ce6c0', '#30a8ee', '#ee4830'];

  var generateData = function (count) {
    var wizards = [];
    for (var i = 0; i < count; i++) {
      wizards.push(
        {
          name: window.util.getRandomArrElement(names) + ' ' + window.util.getRandomArrElement(surnames),
          coatColor: window.util.getRandomArrElement(coatColors),
          eyesColor: window.util.getRandomArrElement(eyesColors)
        }
      );
    }
    return wizards;
  };

  window.data = {
    names: names,
    surnames: surnames,
    coatColors: coatColors,
    eyesColors: eyesColors,
    fireballColors: fireballColors,
    generate: generateData
  };
})();
