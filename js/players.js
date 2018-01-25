var fps = 60;

function Player(maxSpeed, x, y, size) {
  this.maxSpeed = maxSpeed;
  this.posX = x;
  this.posY = y;
  this.size = size;
  this.speedX = 0;
  this.speedY = 0;
  this.element = $("<div>")
    .addClass("player")
    .css({ left: this.posX, bottom: this.posY });
  $(".game").append(this.element);
}

//funcion para mover el cubo
Player.prototype.moveX = function(direction) {
    this.speedX = this.maxSpeed * direction;
};

Player.prototype.moveY = function(direction) {
  this.speedY = this.maxSpeed * direction;
};


//funcion para renderizar el Player y que se vea fluido
Player.prototype.render = function() {
  var newX = this.posX +this.speedX;
  if (newX >= 0 && newX <= this.size.width){
    this.posX = newX;
  }
  
  var newY = this.posY + this.speedY - 8;
  if(newY >= 0 && newY <= this.size.height){
    this.posY = newY;
  }

  this.element.css({ bottom: this.posY, left: this.posX });
};


// //funcion para mover el Player
// Player.prototype.move = function(direction) {
//   console.log("muevo al jugador");
//   
//   if (newX >= 0 && newX <= this.size.width - 62) {
//     this.speedX += this.maxSpeed * direction;
//   }
// };

// Player.prototype.jump = function(direction) {
//   var newY = this.posY + this.speed * direction;
//   if (newY >= 0 && newY <= this.size.height - 70) {
//     console.log(this.posY);
//     this.speedY += this.speed * direction;
//   }
// };

// // funcion para parar el Player
// Player.prototype.stop = function() {
//   this.speedX = 0;
//   this.speedY = 0;
// };

// //funcion para renderizar el Player y que se vea fluido
// Player.prototype.render = function() {
//   this.posX += this.speedX/fps;
//   this.posY += this.speedX/fps;
//   this.element.css({ left: this.posX, bottom: this.posY });
// };
