function Game (){
    console.log("Dentro de la funcion game")
    this.obstacle1 = new Obstacle(150, 30, "calc(50% - 15px)", 233, "central");
    this.obstacle2 = new Obstacle(30, 200, "calc(30% - 100px)", 425, "iquierda");
    this.obstacle3 = new Obstacle(30, 200, "calc(70% - 100px)", 425, "derecha");
    this.obstacle4 = new Obstacle(30, 200, "calc(50% - 100px)", 575, "superior");
    this.player1 = new Player(50, 50, 0, 233, "player-dch");
}

