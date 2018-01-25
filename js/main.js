var game;
$(document).ready(function() {
  console.log("entro!");
  game = new Game();

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        game.player1.moveX(-1);
        break;
      case 39:
        game.player1.moveX(1);
        break;
      case 38:
        game.player1.moveY(1);
        break;
    }
  };

  document.onkeyup = function(e) {
    switch (e.keyCode) {
      case 37:
        game.player1.moveX(0);
        break;
      case 39:
        game.player1.moveX(0);
        break;
      case 38:
        game.player1.moveY(0);
        break;
      case 40:
        game.player1.moveY(0);
        break;
    }
    };

    setInterval(function(){
      game.player1.render();
    }, 1000/fps);
});
