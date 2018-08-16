var whaleImage = new Image;
whaleImage.src = "images/Graphics_game/Wal.png"

var whaleWaterImage = new Image;
whaleWaterImage.src = "../../images/Graphics_game/whaleWater.png"

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

function WhaleWater(width,height,x,y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.image = whaleWaterImage;
  this.ctx = ctx;
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

  this.draw = function() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

function createWhale(block) {
  var randomNumber = Math.floor(Math.random()*3)
  if (randomNumber < 2) {
  var newWhale = new Whale(100,60,block.x+70,420);
  whaleObstacles.push(newWhale);}
}


function createWhaleWater(array) {

  for (var j = 0; j < array.length; j++) {
      var newWater = new WhaleWater(50,40,array[j].x+10,array[i].y-20);
      whaleWaterObstacles.push(newWater);
      splashSound.play();
    }
  }

