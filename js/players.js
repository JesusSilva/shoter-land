function Player(maxSpeed, x, y) {
  this.maxSpeed = maxSpeed;
  this.pos = { X: x, Y: y };
  this.namePlayer = name;
  this.health = 3;
  this.speed = 0;
  this.jump = 0;
  this.speedX = 0;
  this.speedY = 0;
  this.element = $("<div>")
    .addClass("player")
    .css({ eft: this.pos.X, bottom: this.pos.Y });
  $(".game").append(this.element);
}

//funcion para mover el Player
Player.prototype.move = function(direction) {
  this.speedX = this.maxSpeed * direction;
};

Player.prototype.jump = function(direction) {
  this.speedY = this.maxSpeed * direction;
};

// funcion para parar el Player
Player.prototype.stop = function() {
  this.speedX = 0;
  this.speedY = 0;
};

//funcion para renderizar el Player y que se vea fluido
Player.prototype.render = function() {
  console.log("me entra");
  this.pos.X += this.speedX / 60;
  this.pos.Y += this.speedY / 60;
  this.element.css({ bottom: this.pos.Y, left: this.pos.X });
};
