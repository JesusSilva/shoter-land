$(document).ready(function() {
  console.log("entro!");
  var game = new Game();
  game.obstacle1.createObstacle();
  game.obstacle2.createObstacle();
  game.obstacle3.createObstacle();
  game.obstacle4.createObstacle();
  game.player1.createPlayer();
});

var player = new Player(500, 100, 100);

setInterval(function() {
  player.render();
}, 1000 / fps);

$(document).keydown(function(value) {
  switch (value.keyCode) {
    case 37: // izquierda
      Player.move(-1);
      break;
    case 39: // derecha
      Player.move(1);
      break;
    case 38: // arriba
      Player.jump(-1);
      break;
    case 40: // abajo
      Player.jump(1);
      break;
  }
});

$("body").keyup(function(value) {
  Player.stop();
});
