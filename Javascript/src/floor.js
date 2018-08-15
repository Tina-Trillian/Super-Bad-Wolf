var plattformImage = new Image;
plattformImage.src = "images/Graphics_game/plattform.png"


function Plattform(width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.ctx = ctx;

  this.draw = function() {
    ctx.drawImage(plattformImage,this.x, this.y, this.width,this.height)
  }
}