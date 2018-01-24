function Obstacle (height, width, positionX, positionY, name){
    this.height = height;
    this.width = width;
    this.positionX = positionX;
    this.positionY = positionY;
    this.name = name;
    this.element = $('<div/>', { 'class': 'obstacle' }).css({bottom:this.positionY, left:this.positionX, height: this.height, width: this.width});
    $(".game").append(this.element);    
}