var waterObImage = new Image;
waterObImage.src = "images/Graphics_game/Water_obstacle.png";

var waterObImage2 = new Image;
waterObImage2.src = "images/Graphics_game/Water_obstacle_level2.png"



function Water(width, height, image, x, y) {
  this.width = width,
  this.height = height,
  this.x = x,
  this.y = y,
  this.ctx = ctx,
  this.image = image;
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
  var newWater = new Water(70,50,waterObImage,canvas.width,450);
  waterObstacles.push(newWater);
  if (randomNumber !== 0) addBlockGroup(blockImage);
  }



  function testSpaceWater() {
    var test = true
    for (var i = 0; i < waterObstacles.length; i++) {
      if (waterObstacles[i].x > (canvas.width-70)) {
            test = false;
          }
    }
    return test;
  }

  function createWaterLevel2() {
    if (testSpaceWater()) {
    var newWater = new Water(70,50,waterObImage2,canvas.width,450);
    waterObstacles.push(newWater)}
  }
