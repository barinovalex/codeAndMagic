'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var dialogHandle = setup.querySelector('.upload');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var isDraggable = false;

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY,
      xStart: evt.clientX,
      yStart: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      if ((Math.abs(moveEvt.clientX - startCoords.xStart) > 5) || (Math.abs(moveEvt.clientY - startCoords.yStart) > 5)) {
        isDraggable = true;
      }


      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords.x = moveEvt.clientX;
      startCoords.y = moveEvt.clientY;

      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
      setup.style.top = (setup.offsetTop - shift.y) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      if (isDraggable) {
        var fileInput = setup.querySelector('input');
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          fileInput.removeEventListener('click', onClickPreventDefault);
        };
        fileInput.addEventListener('click', onClickPreventDefault);
      }

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();
