function Game (){
    var size = {width:1100,height:570};
    this.obstacles = ([new Obstacle(30, 120, 200, 160, "obstacle-1"),
                       new Obstacle(30, 120, 400, 260, "obstacle-2"),
                       new Obstacle(30, 120, 600, 360, "obstacle-3"),
                       new Obstacle(30, 300, 800, 460, "obstacle-4")]);
    this.player   = new Player(10, 10, 500, size , 62, 70);}

   // new Obstacle(30, 270, 325, 260, "obstacle-2"),