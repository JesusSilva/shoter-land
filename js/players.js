function Player(speed, x, y) {
  this.speed = speed;
  this.posX = x;
  this.posY = y;
  this.health = 3;
  this.element = $("<div>")
    .addClass("player")
    .css({ left: this.posX, bottom: this.posY });
  $(".game").append(this.element);
}

//funcion para mover el Player
Player.prototype.move = function(direction) {
  console.log(this.posX);
  this.posX += this.speed * direction;
  // this.posX += this.posX + 20;
};

Player.prototype.jump = function(direction) {
  console.log(this.posY);
  this.posY += this.speed * direction;
};

// funcion para parar el Player
Player.prototype.stop = function() {
  //this.speed;
};

//funcion para renderizar el Player y que se vea fluido
Player.prototype.render = function() {
  // this.posX += this.speed / 60;
  // this.posY += this.speed / 60;
  this.element.css({left: this.posX, bottom: this.posY});
};
