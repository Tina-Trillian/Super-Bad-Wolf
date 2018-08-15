function Water(width, height, x, y) {
  this.width = width,
  this.height = height,
  this.x = x,
  this.y = y,
  this.ctx = ctx,
  this.image = new Image;
  this.image.src = "images/Graphics_game/Water_obstacle.png";
  this.draw = function () {
    this.ctx.drawImage(this.image,this.x,this.y);
  }
  this.left = function() {
    return this.x;
  }; 
  this.right = function() {
    return this.x + this.width;
  };
  this.top = function() {
    return this.y;
  };
  this.bottom = function() {
    return this.y + this.height;
  };
}

function createWater() {
  var randomNumber = Math.floor(Math.random()*3)
  var newWater = new Water(70,50,canvas.width,450);
  waterObstacles.push(newWater);
  if (randomNumber !== 0) addBlockGroup();
  }
