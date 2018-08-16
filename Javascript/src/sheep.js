var sheepSprite = new Image;
sheepSprite.src = "images/Graphics_game/sheep_sprite.png";



function Sheep(width, height, x, y) {
  this.width = width,
  this.height = height,
  this.x = x,
  this.y = y,
  this.ctx = ctx,
  this.clipX = 0
  this.collected = false;
  this.draw = function () {
    if (this.collected === false)
    this.ctx.drawImage(sheepSprite,this.clipX, 0, 40, 40, this.x, this.y, this.width, this.height);
    else if (this.collected) {
      ctx.save();
      ctx.globalAlpha -= 0.1
      this.ctx.drawImage(sheepSprite,this.clipX, 0, 40, 40, this.x, this.y, this.width, this.height);
      ctx.restore();
    }

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
  if (level === 1) {
    if (block.y >= 280) {
      var randomNumber = Math.floor(Math.random()*2);
       if (randomNumber === 0) {
          var newSheep = new Sheep(40,40,block.x+10,block.y-50)
          sheepToken.push(newSheep)
        }
    }
  else if (block.y <= 200) {
    var randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber)
    if (randomNumber > 0) {
      var newSheep = new Sheep(40,40,block.x+10,block.y-50)
      sheepToken.push(newSheep)
     }
   }
  }
  else if (level === 2) {
    var randomNumber = Math.floor(Math.random()*2)
    if (randomNumber === 0) {
      var newSheep = new Sheep(40,40,block.x+110,block.y-150)
      sheepToken.push(newSheep)
    }
  }

}


function testSpace() {
  var test = true
  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].x > (canvas.width-80) &&
        (blocks[i].x < (canvas.width+80))) {
          test = false;
        }
  }
  return test;
}

function addRandomSheep() {
  var randomNumber = Math.floor(Math.random()*3)
  if(testSpace()) {
    if (randomNumber === 0) {
      var newSheep = new Sheep(40,40,canvas.width,280)
      sheepToken.push(newSheep);
    }
    else if(randomNumber === 1) {
      var newSheep2 = new Sheep(40,40,canvas.width,280)
      var newSheep3 = new Sheep(40,40,canvas.width,230)
      sheepToken.push(newSheep2,newSheep3);
    }
  }
}