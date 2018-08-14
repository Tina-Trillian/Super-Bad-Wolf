function Water(width, height, color, x, y) {
  this.width = width,
  this.height = height,
  this.x = x,
  this.y = y,
  this.ctx = ctx,
  this.ctx.fillStyle = color,
  this.draw = function () {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
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
  var newWater = new Water(70,50,"blue",canvas.width,450);
  waterObstacles.push(newWater);
  }
