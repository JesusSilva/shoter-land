var game;
var jump = true;

$(document).ready(function() {
  game = new Game();

  document.onkeydown = function(e) {
    e.preventDefault()
    switch (e.keyCode) {
      case 37:
        game.player.moveX(-1);
        break;
      case 39:
        game.player.moveX(1);
        break;
      case 32:
        if (jump){
          jump = false;
          //game.player.moveY(1);
          setTimeout(() => {game.player.moveY(1);},0);
          setTimeout(() => {game.player.moveY(0);},100);
        }
    }
  };

  document.onkeyup = function(e) {
    switch (e.keyCode) {
      case 37:
        game.player.moveX(0);
        break;
      case 39:
        game.player.moveX(0);
        break;
      case 32:
        game.player.moveY(0);
        jump = true;
        break;
    }
  };

  function checkCollisions() {
    var marioWidth = game.player.width;
    var marioHeight = game.player.height;
    var marioX = game.player.posX;
    var marioY = game.player.posY;
    var obstacleWidth = [];
    var obstacleHeight = [];
    var obstacleX = [];
    var obstacleY = [];

    game.obstacles.forEach(function(e){
      obstacleWidth.push(e.width);
      obstacleHeight.push(e.height);
      obstacleX.push(e.positionX);
      obstacleY.push(e.positionY);
    });
    
    for (i = 0; i < game.obstacles.length; i++){

      //Test when mario is above the obstacle
      if (marioY + marioHeight > obstacleY[i] + obstacleHeight[i] &&
        marioY < obstacleY[i] + obstacleHeight[i] &&
        marioX < obstacleX[i] + obstacleWidth[i] &&
        marioX + marioWidth > obstacleX[i]) {
        game.player.collisionUp(obstacleY[i]);
      }
      //Test when mario is below the obstacle
      else if (marioY < obstacleY[i] + obstacleHeight[i] &&
        marioY + marioHeight > obstacleY[i] &&
        marioX < obstacleX[i] + obstacleWidth[i] &&
        marioX + marioWidth > obstacleX[i]) {
          game.player.collisionDown();
      }
      // if (marioX < obstacleX[i] + obstacleWidth[i] &&
      //   marioX + marioWidth > obstacleX[i] &&
      //   marioY < obstacleY[i] + obstacleHeight[i] &&
      //   marioY + marioHeight > obstacleY[i]) {
      //   game.player.collisionLateral();
      // }
    }
  }

  setInterval(function() {
    game.player.render();
    game.player.winner();
    checkCollisions();
  }, 1000 / fps);
});