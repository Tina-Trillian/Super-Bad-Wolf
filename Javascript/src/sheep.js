function Sheep(width, height, x, y) {
  this.width = width,
  this.height = height,
  this.x = x,
  this.y = y,
  this.ctx = ctx,
  this.image = new Image;
  this.image.src = "../../images/Graphics_game/sheep.png";
  this.collected = false;
  this.draw = function () {
    this.ctx.drawImage(this.image,this.x, this.y);
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



function createSheep(block) {

  if (block.y === 280) {
    var randomNumber = Math.floor(Math.random()*2);
    console.log(randomNumber)
    if (randomNumber === 0) {
      console.log("sheep");
      var newSheep = new Sheep(40,40,block.x+10,block.y-50)
      sheepToken.push(newSheep)
    }
  }
  else if (block.y === 200) {
    var randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber)
    if (randomNumber > 0) {
      var newSheep = new Sheep(40,40,block.x+10,block.y-50)
      sheepToken.push(newSheep)
    }
  }
}