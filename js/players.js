var fps = 60;

function Player (name, positionX, positionY){
    this.namePlayer = name;
    this.health = 3;
    this.speed = 0;
    this.jump = 0;
    this.positionX = positionX;
    this.positionY = positionY;
}



Player.prototype.createPlayer = function (){
    var element = $('<div/>', { 'class': 'player' });
    element.css({left:this.positionX, bottom:this.positionY});
    $(".game").append(element); 
}

Player.prototype.remainingLife = function (value){

};
var  checkKey = document.onkeydown;
Player.prototype.move = function (value){
    this.speed = this.maxSpeed * direction;
};

Player.prototype.jump = function (value){

};

Player.prototype.checkCollision = function (value){

};

Player.prototype.getPosition = function(value){

}


var fps = 60;

//funcion constructora
function Cubo(maxSpeed,x,y){
    this.maxSpeed = maxSpeed;
    this.pos = {X:x, Y:y}
    this.speedX = 0;
    this.speedY = 0;
    this.el = $('<div>').addClass('cubo');
    $('body').append(this.el);
}

//funcion para mover el cubo
Cubo.prototype.move = function(direction){
   this.speedX = this.maxSpeed * direction;
}

Cubo.prototype.jump = function(direction){
   this.speedY = this.maxSpeed * direction;
   this.pos.Y += this.speedY/fps;
}

// funcion para parar el cubo
Cubo.prototype.stop = function(){
    this.speedX = 0;
    this.speedY = 0;
}

//funcion para renderizar el cubo y que se vea fluido
Cubo.prototype.render = function(){  
    this.pos.X += this.speedX/fps;
    this.pos.Y += this.speedY/fps;
    this.el.css({top:this.pos.Y,left:this.pos.X});
}



var cubo = new Cubo(100,100,100)

setInterval(function(){
  cubo.render();
}, 1000/fps);
 
$("body").keydown(function(value){
  switch(value.keyCode){
      case 37: // izquierda
        cubo.move(-1);
      break;
      case 39: // derecha
        cubo.move(1);
      break;
      case 38: // arriba
        cubo.jump(-1);
      break;
      case 40: // abajo
        cubo.jump(1);
      break;
  }
});

$("body").keyup(function(value){
  cubo.stop();
});