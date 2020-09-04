'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var OUTER_GAP = 20;
var TEXT_GAP = 5;
var FONT_SIZE = 16;
var COLUMN_GAP = 50;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 140;


var renderCloud = function (ctx, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (maxElement < arr[i]) {
      maxElement = arr[i];
    }
  }
  return maxElement;
}
var renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 'rgba(0, 0, 0, 0.7)', CLOUD_X + GAP, CLOUD_Y + GAP);
  renderCloud(ctx, '#fff', CLOUD_X, CLOUD_Y);
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'top';
  ctx.font = FONT_SIZE + 'px PT Mono';
  ctx.fillText('Ура вы победили', CLOUD_X + OUTER_GAP, CLOUD_Y + OUTER_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + OUTER_GAP, CLOUD_Y + FONT_SIZE + OUTER_GAP + TEXT_GAP);

  for (var i = 0; i < players.length; i++) {
    var playerScore = Math.ceil(times[i]);
    var maxScore = getMaxElement(times);
    var columnHeight = (COLUMN_HEIGHT * playerScore) / maxScore;
    var nameY = CLOUD_Y + CLOUD_HEIGHT - FONT_SIZE - OUTER_GAP;
    var columnY = CLOUD_Y + CLOUD_HEIGHT - FONT_SIZE - OUTER_GAP - TEXT_GAP - columnHeight - FONT_SIZE - TEXT_GAP;
    var scoreY = CLOUD_Y + CLOUD_HEIGHT - FONT_SIZE - OUTER_GAP - TEXT_GAP - columnHeight;
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, nameY);
    ctx.fillText(playerScore, CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, columnY);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + (Math.random() * 100) + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + COLUMN_GAP + (COLUMN_GAP + COLUMN_WIDTH) * i, scoreY, COLUMN_WIDTH, columnHeight);
  }
}
