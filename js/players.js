function Player (name, health, speed, jump, positionX, positionY){
    this.namePlayer = name;
    this.health = health;
    this.speed = speed;
    this.jump = jump;
    this.positionX = positionX;
    this.positionY = positionY;
    this.bottom = bottom;
    this.left = left;
}

Player.prototype.createPlayer = function (){
    var element = $('<div/>', { 'class': 'player' });
    element.css({bottom:this.positionY, left:this.positionX, height: this.height, width: this.width});
    $(".game").append(element); 
}

Player.prototype.remainingLife = function (value){

};

Player.prototype.move = function (value){

};
Player.prototype.jump = function (value){

};
Player.prototype.checkCollision = function (value){

};

Player.prototype.getPosition = function(value){

}