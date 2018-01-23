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

Player.prototype.move = function (value){

};
Player.prototype.jump = function (value){

};
Player.prototype.checkCollision = function (value){

};

Player.prototype.getPosition = function(value){

}