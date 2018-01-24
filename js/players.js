var fps = 60;
  
function Player (maxSpeed, x, y){
  this.maxSpeed = maxSpeed;
  this.pos = {X:x, Y:y}
  this.namePlayer = name;
  this.health = 3;
  this.speed = 0;
  this.jump = 0;
  this.speedX = 0;
  this.speedY = 0;
  this.element = $('<div>').addClass('player');
  $('game').append(this.element);
}

Player.prototype.createPlayer = function (){
    var element = $('<div/>', { 'class': 'player' });
    element.css({left:this.pos.X, bottom:this.pos.Y});
    $(".game").append(element); 
}

//funcion para mover el Player
Player.prototype.move = function(direction){
   this.speedX = this.maxSpeed * direction;
}

Player.prototype.jump = function(direction){
   this.speedY = this.maxSpeed * direction;
}

// funcion para parar el Player
Player.prototype.stop = function(){
    this.speedX = 0;
    this.speedY = 0;
}

//funcion para renderizar el Player y que se vea fluido
Player.prototype.render = function(){  
    this.pos.X += this.speedX/fps;
    this.pos.Y += this.speedY/fps;
    this.element.css({top:this.pos.Y,left:this.pos.X});
}