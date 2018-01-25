function Game (){
    var size = {width:1100,height:570};
    console.log("Dentro de la funcion game")
    this.obstacles = ([new Obstacle(30, 120, 200, 160, "1")],
                      [new Obstacle(30, 120, 400, 260, "2")],
                      [new Obstacle(30, 120, 600, 360, "3")],
                      [new Obstacle(30, 300, 800, 460, "4")]);
    this.player1   = new Player(10, 10, 0, size);
}

