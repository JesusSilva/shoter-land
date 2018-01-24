var game;
$(document).ready(function() {
  
  console.log("entro!");
  game = new Game();

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        console.log("onekeydown movimiento izq");
        game.player1.direction[0] = true;
        console.log(game.player1.direction[0]);
        move();
        break;
      case 39:
        console.log("onkeydown movimiento dch");
        game.player1.direction[1] = true;
        console.log(game.player1.direction[1]);
        move();
        break;
      case 38:
        game.player1.direction[2] = true;
        jump();
        break;
      case 40:
        game.player1.direction[3] = true;
        jump();
        break;
    }
  };
  
  document.onkeyup = function(e) {
    switch (e.keyCode) {
      case 37:
        console.log("onkeyup movimiento izq")
        game.player1.direction[0] = false;
        console.log(game.player1.direction[0]);
        break;
      case 39:
        console.log("onkeyup movimiento dch");
        game.player1.direction[1] = false;
        console.log(game.player1.direction[1]);
        break;
      case 38:

        game.player1.direction[2] = false;
        break;
      case 40:
        game.player1.direction[3] = false;
        break;
    }
  };

  function move() {
    if (game.player1.direction[0] == true) {
      console.log("Left")
      game.player1.move(-1);
    } else if (game.player1.direction[1] == true) {
      console.log("Right")
      game.player1.move(1);
    }
  }
  
  function jump() {
    if (game.player1.direction[2] == true) {
      console.log("Up");
      game.player1.jump(1);
    } else if (game.player1.direction[3] == true) {
      console.log("Down");
      game.player1.jump(-1);
    }
  }
  function update() {
    game.player1.move();
    game.player1.jump();
    game.player1.render();
  }
  
  
  setInterval(update, 1);
});




