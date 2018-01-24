function Game (){
    console.log("Dentro de la funcion game")
    this.obstacles = ([new Obstacle(150, 30, "calc(50% - 15px)", 0, "central")],
                      [new Obstacle(30, 200, "calc(30% - 100px)", 190, "iquierda")]
                      [new Obstacle(30, 200, "calc(70% - 100px)", 190, "derecha")],
                      [new Obstacle(30, 200, "calc(50% - 100px)", 340, "superior")]);
    this.player1   = new Player (10, 10, 0);
}

