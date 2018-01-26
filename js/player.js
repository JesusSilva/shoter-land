var fps = 60;

function Player(maxSpeed, x, y, size, width, height) {
  this.maxSpeed = maxSpeed;
  this.posX = x;
  this.posY = y;
  this.size = size;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.element = $("<div>")
    .addClass("player")
    .css({ left: this.posX, bottom: this.posY, width: this.width, height: this.height});
  $(".game").append(this.element);
}

//Funcion para mover el cubo
Player.prototype.moveX = function(direction) {
  if (direction == -1){
    "background-image", "url(../img/mario-reverse.png)"
    $(".player").css("background-image", "url(./img/mario-reverse.png)")
    this.speedX = this.maxSpeed * direction;
  }else {
    this.speedX = this.maxSpeed * direction;
    $(".player").css("background-image", "url(./img/mario.png)")
  }
};

Player.prototype.moveY = function(direction) {
  this.speedY = this.maxSpeed * direction;
};

Player.prototype.collisionLateral = function () {
  console.log("chocaste");
  this.speedX= 0;
}

Player.prototype.collisionDown = function () {
  console.log("chocaste desde abajo");
  this.speedY= 0;
}

Player.prototype.collisionUp = function () {
  console.log("chocaste desde arriba");
  this.speedY = 0;
  
}

Player.prototype.collisionDown = function () {
  this.speedY = 0;
}

Player.prototype.winner = function() {
  if (this.posX > this.size.width - 80 && this.posY == 500){
    alert("¡¡ENHORABUENA, TE HAS PASADO EL JUEGO!!");
  }
} 

//Funcion para renderizar el Player y que se vea fluido
Player.prototype.render = function() {
  var newX = this.posX + this.speedX;
  if (newX >= 0 && newX <= this.size.width - 62) {
    this.posX = newX;
  }

  var newY = this.posY + this.speedY - 5;
  if (newY >= 0 && newY <= this.size.height - 70) {
    this.posY = newY;
  }
  this.element.css({ bottom: this.posY, left: this.posX });
};