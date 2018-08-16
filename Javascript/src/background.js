var treeImage = new Image;
treeImage.src = "images/Graphics_game/Endlos_base_Bäume_einzeln.png";
var floorImage = new Image;
floorImage.src = "images/Graphics_game/Endlos_base_Boden_einzeln.png";
var cloudImage = new Image;
cloudImage.src = "images/Graphics_game/Endlos_base_Wolken_einzeln.png";




function Background(image, type, x) {
  this.type = type;
  this.x = x;
  this.image =  image;
  this. width = this.image.width
}

Background.prototype.draw = function() {
  if (this.type === "floor" && framesLevel2 <= 300 || this.type === "cloud" || this.type === "tree") {
    ctx.drawImage(this.image, this.x, 0);
    ctx.drawImage(this.image,this.x + this.width,0)
  }
  else if (this.type === "floor") {
     var x = Math.abs(this.x);
     this.width = x + canvas.width - framesLevel2+250
      ctx.drawImage(this.image, 0, 0, this.width, this.image.height, this.x, 0, this.width, this.image.height);
  }
}

Background.prototype.update = function() {
  switch (this.type) {
    case "cloud":
      this.x -= 0.2;
      if (this.x < -1*this.width) {this.x = 0}
      break;
    case "tree":
      this.x += -0.4;
      if (this.x < -1*this.width) {this.x = 0}
      break;
    case "floor":
      this.x -= 1;
      if (this.x < -1*this.width) {this.x = 0}
      break;
  }
}

