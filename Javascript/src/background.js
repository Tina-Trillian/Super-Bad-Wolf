var treeImage = new Image;
treeImage.src = "../../images/Graphics_game/Endlos_base_Bäume_einzeln.png";



function Background(image, type, x, speed) {
  this.type = type;
  this.x = x;
  this.image =  image;
}

Background.prototype.draw = function() {
  ctx.drawImage(this.image, this.x, 0);
  ctx.drawImage(this.image,this.x + this.image.width,0)
 
}

Background.prototype.update = function() {
  switch (this.type) {
    case "cloud":
      this.x -= 0.5;
      break;
    case "tree":
      this.x += -0.4;
      if (this.x < -1*this.image.width) {this.x = 0}
      break;
    case "floor":
      this.x -= 5;
      break;
  }
}

