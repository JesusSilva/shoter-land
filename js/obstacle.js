function Obstacle (height, width, positionX, positionY, name){
    this.height = height;
    this.width = width;
    this.positionX = positionX;
    this.positionY = positionY;
    this.name = name;

}

Obstacle.prototype.createObstacle = function () {
    var element = $('<div/>', { 'class': 'obstacle' });
    element.css({bottom:this.positionY, left:this.positionX, height: this.height, width: this.width});
    $(".game").append(element);    
}