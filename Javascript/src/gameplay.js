var canvas = document.getElementById("game-area");
var ctx = canvas.getContext("2d");

var interval,wolf,floor;
var waterObstacles = [];
var jaegerObstacles = [];
var bulletObstacles = [];
var blocks = [];

var myGameArea = {
  frames: 0,
  stop: function () {
    console.log("stop")
  }
}

function startGame() {
  wolf = new Wolf(50,75,"grey", 100, 375);
  wolf.draw();

  floor = new Floor(700, 50, "green",0, 450);
  floor.draw();

  interval = setInterval(updateCanvas, 1000/70);
}


function createWater() {
   var newWater = new Water(70,50,"blue",canvas.width,450);
   waterObstacles.push(newWater);
   }

function createJaeger() {
    var newJaeger = new Jaeger(50,90,"yellow",canvas.width,360);
    jaegerObstacles.push(newJaeger);
  }

function createBlock() {
      var newBlock = new Block(50,50,"green",canvas.width, 280);
      blocks.push(newBlock);
  }


function updateArray(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].x < 0-array[i].width) {
      array.splice(i,1);
    }
  }
}


function updateCanvas() {
  myGameArea.frames++;

  updateArray(jaegerObstacles);
  updateArray(bulletObstacles);
  updateArray(blocks);
  updateArray(waterObstacles);
  

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
      var newBullet = new Bullet(10,10,"red",jaegerObstacles[j].x,375)
      bulletObstacles.push(newBullet);
    }
  }
    for (var i = 0; i < bulletObstacles.length; i++) {
     bulletObstacles[i].x -= 5;
      bulletObstacles[i].draw();
    }
  
    for (var i = 0; i < jaegerObstacles.length; i++) {
      if (wolf.crashWith(jaegerObstacles[i]) && jaegerObstacles[i].dead === false) {
        // if (Math.floor(wolf.bottom()) >= jaegerObstacles[i].top()) {
         if (wolf.bottom() < jaegerObstacles[i].top()+3 &&
             wolf.bottom() > jaegerObstacles[i].top()-3) {

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
      wolf.floorY = 450;
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
     break;
     case 66:
     createBlock();
     break;
   }
 };

