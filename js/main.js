$( document ).ready(function() {
    console.log('entro!')
    var game = new Game();
    game.obstacle1.createObstacle()
    game.obstacle2.createObstacle()
    game.obstacle3.createObstacle()
    game.obstacle4.createObstacle()
    game.player1.createPlayer()
});