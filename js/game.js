function Game (){
    console.log("Dentro de la funcion game")
    this.obstacles = new Obstacle(150, 30, "calc(50% - 15px)", 233, "central");
    console.log(Obstacle)
}

