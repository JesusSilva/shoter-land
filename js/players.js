function Player(speed, x, y, size) {
  this.speed = speed;
  this.posX = x;
  this.posY = y;
  this.size = size;
  this.direction = [false, false, false, false];
  this.health = 3;
  this.element = $("<div>")
    .addClass("player")
    .css({ left: this.posX, bottom: this.posY });
  $(".game").append(this.element);
}

//funcion para mover el Player
Player.prototype.move = function(direction) {
  console.log("muevo al jugador");
  var newX = this.posX + this.speed * direction;
  if (newX >= 0 && newX <= this.size.width - 62) {
    console.log(this.posX);
    this.posX += this.speed * direction;
    console.log(this.speed);
  }
};

Player.prototype.jump = function(direction) {
  var newY = this.posY + this.speed * direction;
  if (newY >= 0 && newY <= this.size.height - 70) {
    console.log(this.posY);
    this.posY += this.speed * direction;
  }
};

// funcion para parar el Player
Player.prototype.stop = function() {};

//funcion para renderizar el Player y que se vea fluido
Player.prototype.render = function() {
  this.element.css({ left: this.posX, bottom: this.posY });
};
