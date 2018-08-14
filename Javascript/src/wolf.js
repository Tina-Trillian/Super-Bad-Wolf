var canvas = document.getElementById("game-area");
var ctx = canvas.getContext("2d");

function Component(width, height, color, x, y) {
  this.width = width,
  this.height = height,
  this.x = x,
  this.y = y,
  this.ctx = ctx,
  this.ctx.fillStyle = color,
  this.dy = 2,
  this.dx = 0;
  this.jumping = false;
  this.ducking = false;
  this.dead = false;
  this.floorY = 450;

  this.draw = function () {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  },
  this.newPos = function () {
     this.dy += 0.05;
     this.y += this.dy;
     this.x += this.dx;

     if (this.x < 0) {
       this.x = 0;
     }

    if (this.x < 100 && this.jumping === false) {
      this.x += 0.5;
    }
  
     if (this.y > (this.floorY-this.height)) {
        this.dy = 0;
       this.jumping = false;
       this.y = this.floorY-this.height}
  },
   this.jump = function () {
     if (this.jumping === false && this.ducking === false) {
     this.dy = -4.5;
     this.jumping = true}
   }
   this.duck = function () {
     if (this.jumping === false && this.ducking === false) {
     this.height = 55
     this.y = this.floorY-this.height;
     this.ducking = true}
     }
    this.death = function () {
     this.height = 20
     this.y = canvas.height-50-this.height;
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
    this.crashWith = function(obstacle) {
      return !(
        this.bottom() <= obstacle.top() ||
        this.top() >= obstacle.bottom() ||
        this.right() <= obstacle.left() ||
        this.left() >= obstacle.right()
      );
    }
    this.jumpOn = function(block) {
      return ! (
        this.bottom() > block.top() ||
        this.top() > block.bottom() ||
        this.right() < block.left() ||
        this.left() > block.right()
      )
    }
    this.jumpAgainst = function(block) {
      return ! (
        this.bottom() < block.top() &&
        this.top() > block.bottom()
      )
    }
    this.jumpAtBottom = function(block) {
      return (
        this.right() > block.left() &&
        this.left() < block.right()
      )
    }
    
}



 function createWater() {
   var newWater = new Component(70,50,"blue",canvas.width,450);
   waterObstacles.push(newWater);
   }

  function createJaeger() {
    var newJaeger = new Component(50,90,"yellow",canvas.width,360);
    jaegerObstacles.push(newJaeger);
  }

  function createBlock() {
      var newBlock = new Component(50,50,"green",canvas.width, 280);
      blocks.push(newBlock);
  }


var myGameArea = {
  frames: 0,
  stop: function () {
    console.log("stop");
  }
}

var interval;
var wolf;
var floor;
var waterObstacles = [];
var jaegerObstacles = [];
var bulletObstacles = [];
var blocks = [];

function startGame() {
  wolf = new Component(50,75,"grey", 100, 375);
  wolf.draw();

   floor = new Component(700, 50, "green",0, 450);
   floor.draw();

  interval = setInterval(updateCanvas, 1000/70);
}

function updateCanvas() {
  myGameArea.frames++;

  for (var i = 0; i < jaegerObstacles.length; i++) {
    if (jaegerObstacles[i].x < 0-jaegerObstacles[i].width) {
      jaegerObstacles.splice(i,1);
    }
  }

  for (var i = 0; i < waterObstacles.length; i++) {
    if (waterObstacles[i].x < 0-waterObstacles[i].width) {
      waterObstacles.splice(i,1);
    }
  }

  for (var i = 0; i < blocks.length; i++) {
    if (blocks[i].x < 0-blocks[i].width) {
      blocks.splice(i,1);
    }
  }

  ctx.clearRect(0,0,canvas.width, canvas.height);
   if (myGameArea.frames % 300 === 0) {
     var randomNumber = Math.floor(Math.random()*2)
     switch (randomNumber) {
       case 0:
        createWater();
         break;
      case 1:
        createJaeger();
        break;
       default:
         break;
     }
     }
  wolf.newPos();
  wolf.draw();
  floor.draw();
  
   for (var i = 0; i < waterObstacles.length; i++) {
     waterObstacles[i].x--;
     waterObstacles[i].draw();
   }

   for (var i = 0; i < blocks.length; i++) {
    blocks[i].x--;
    blocks[i].draw();
  }

   for (var i = 0; i < jaegerObstacles.length; i++) {
    jaegerObstacles[i].x--;
    jaegerObstacles[i].draw();
  }

  if (myGameArea.frames % 200 === 0) {
    for (var j = 0; j < jaegerObstacles.length; j++) {
      var newBullet = new Component(10,10,"red",jaegerObstacles[j].x,375)
      bulletObstacles.push(newBullet);
    }
  }
    for (var i = 0; i < bulletObstacles.length; i++) {
     bulletObstacles[i].x -= 5;
      bulletObstacles[i].draw();
    }
  
    for (var i = 0; i < jaegerObstacles.length; i++) {
      if (wolf.crashWith(jaegerObstacles[i]) && jaegerObstacles[i].dead === false) {
        console.log("death")
        if (Math.floor(wolf.bottom()) >= jaegerObstacles[i].top()) {

          jaegerObstacles[i].death();
          jaegerObstacles[i].dead = true;
        }
        else { myGameArea.stop() }
        }}

   for (var i = 0; i < bulletObstacles.length; i++) {
     if(wolf.crashWith(bulletObstacles[i])) {
       myGameArea.stop();
     }
   }

   for (var i = 0; i < blocks.length; i++) {
    if(wolf.jumpOn(blocks[i])) {
      wolf.floorY = blocks[i].y;
    }
    else if (wolf.x > (blocks[i].x+blocks[i].width) && wolf.floorY < 450) {
      wolf.floorY++;
    }
    else if (wolf.jumpAgainst(blocks[i])) {
      if (wolf.right() === blocks[i].left()) {

      wolf.x -= 1;
       }
     }
    if (wolf.jumpAtBottom(blocks[i])) {
      if (wolf.top() < blocks[i].bottom() && wolf.jumping === true) {
        wolf.dy = 1;
        // wolf.jumping === false;
      }
    }
}

   for (var i = 0; i < waterObstacles.length; i++) {
    if(wolf.crashWith(waterObstacles[i])) {
      myGameArea.stop();
    }
  }
}

window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);

document.onkeyup = function(e) {
  if (wolf.jumping === false) {
  switch (e.keyCode) {
    case 40:
    wolf.height = 75
    wolf.y = wolf.floorY-wolf.height;
    wolf.ducking = false;
      break;
  }
  }
}

 document.onkeydown = function(e) {
   console.log(e.keyCode);
   switch (e.keyCode) {
     case 38:
      wolf.jump();
       break;
     case 40:
      wolf.duck();
      break;
     case 74:
     createJaeger();
     break; 
     case 87:
     createWater();
     case 66:
     createBlock();
   }
 };

