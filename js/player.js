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
    $(".player").css("background-image", "url(./img/mario-reverse.png)")
    this.speedX = this.maxSpeed * direction;
  }else {
    this.speedX = this.maxSpeed * direction;
    $(".player").css("background-image", "url(./img/mario.png)")
  }
};

Player.prototype.moveY = function(direction, flag) {
  this.speedY = (this.maxSpeed+30) * direction;
};

Player.prototype.collisionUp = function (position) {
  this.posY = position + 35;
}

Player.prototype.collisionDown = function () {
  this.speedY = 0;
}

Player.prototype.winner = function() {
  if (this.posX == 1030 && this.posY > 460){
    alert("¡¡ENHORABUENA, TE HAS PASADO EL JUEGO!!");
  }
} 

//Funcion para renderizar el Player y que se vea fluido
Player.prototype.render = function() {
  console.log('La posicion en X es: ' + this.posX + ' y la posicion en Y es: ' + this.posY);
  console.log('this.size.width es: ' + this.size.width);
  var newX = this.posX + this.speedX;
  if (newX >= 0 && newX <= this.size.width - 62) {
    this.posX = newX;
  }

  var newY = this.posY + this.speedY - 9;
  if (newY >= 0 && newY <= this.size.height - 70) {
    this.posY = newY;
  }
  this.element.css({ bottom: this.posY, left: this.posX });
};