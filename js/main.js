var game;
$(document).ready(function() {
  game = new Game();

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        game.player.moveX(-1);
        break;
      case 39:
        game.player.moveX(1);
        break;
      case 38:
        game.player.moveY(1);
        break;
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
      case 38:
        game.player.moveY(0);
        break;
    }
  };

  function checkCollisions(obstacle) {
    var marioWidth = game.player.width;
    var marioHeight = game.player.height;
    var marioX = game.player.posX;
    var marioY = game.player.posY;
    var obstacleWidth = game.obstacles.width;
    var obstacleHeight = game.obstacles.height;
    var obstacleX = game.obstacles.positionX;
    var obstacleY = game.obstacles.positionY;
    
    console.log(marioWidth);
    console.log(marioHeight);
    console.log(marioX);
    console.log(marioY);
    console.log(obstacleWidth);
    console.log(obstacleHeight);
    console.log(obstacleX);
    console.log(obstacleY);
    
    
    
    if (marioX < obstacleX + pelota.width &&
      marioX + jugador.width > obstacleX &&
      jugador.y < pelota.y + pelota.height &&
      jugador.y + jugador.height > pelota.y ) {
      pelota.switchDirection();
  }
  }


  
  
  setInterval(function() {
    game.player.render();
    game.player.winner();
    checkCollisions(game.obstacle1);
  }, 1000 / fps);
});


    // var obstacle = $(".obstacle");
    // var player = $(".player");
    // var colisionMarioObstacle = obstacle.collision(player); 
    // if (colisionMarioObstacle.length > 0) {
    //   console.log(colisionMarioObstacle)
    //   console.log("chocó");
    //   console.log(game.player.posY)
    //   game.player.moveY(0)
    // }
    // console.log(game.player)
      // if (
      //   game.player.posX < obstacle.positionX + obstacle.width &&
      //   game.player.posX + 62 > obstacle.x &&
      //   game.player.posY < obstacle.positionY + obstacle.height &&
      //   game.player.posY + 70 > obstacle.positionY
      //  ) {
      //   //  console.log('hola')
      //   game.player.moveY(0)
      //  }
  