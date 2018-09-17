function Game (){
    var size = {width:1100,height:570};
    this.obstacles = ([new Obstacle(30, 120, 300, 160, "obstacle-1"),
                       new Obstacle(30, 120, 500, 260, "obstacle-2"),
                       new Obstacle(30, 120, 700, 360, "obstacle-3"),
                       new Obstacle(30, 200, 900, 460, "obstacle-4")]);
    this.player   = new Player(10, 10, 500, size , 62, 70);}