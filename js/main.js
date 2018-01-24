var game;
$(document).ready(function() {
  console.log("entro!");
  game = new Game();

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        game.player1.move(-1);
        break;
      case 39:
        game.player1.move(1);
        break;
      case 38:
        game.player1.jump(1);
        break;
      case 40:
        game.player1.jump(-1);
        break;
    }
  };
  
  document.onkeyup = function(e) {
    switch (e.keyCode) {
      case 37:
      case 39:
      case 38:
      case 40:
        game.player1.stop();
        break;
    }
  };

});

function update() {
  game.player1.render();
}

setInterval(update, 1000 / 60);

