var whaleImage = new Image;
whaleImage.src = "../../images/Graphics_game/Wal.png"

function Whale(width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.image = whaleImage;
  this.ctx = ctx;

  this.draw = function() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}