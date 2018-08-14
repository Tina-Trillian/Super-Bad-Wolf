var canvas = document.getElementById("game-area");
var ctx = canvas.getContext("2d");

var interval,wolf,floor,deathInterval, waterObstacles,jaegerObstacles,bulletObstacles, blocks, sheepToken;


var myGameArea = {
  frames: 0,
  score: 0000,
  stop: function () {
    clearInterval(interval)
    deathInterval = setInterval(deathUpdate,1000/70);
    wolf.death();
    console.log("stop")
  }
}

function startGame() {
  myGameArea.frames = 0,
  myGameArea.score = 0000,
  wolf = new Wolf(50,75,"grey", 100, 375);
  wolf.draw();

  floor = new Floor(700, 50, "green",0, 450);
  floor.draw();

  waterObstacles = [];
  jaegerObstacles = [];
  bulletObstacles = [];
  blocks = [];
  sheepToken = [];

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


function createBullet(jaeger) {
    var newBullet = new Bullet(10,10,"red",jaeger.x,375);
    bulletObstacles.push(newBullet);
}

function createSheep(block) {
  var newSheep = new Sheep(40,40,"white",block.x+10,block.y+50)
  sheepToken.push(newSheep);
}

function cleanArray(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].x < 0-array[i].width) {
      array.splice(i,1);
    }
  }
}

function clearArray(array) {
  array = [];
}

function drawArray(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].x--;
    array[i].draw();
  }
}

function drawArrayDeath(array) {
  for (var i = 0; i < array.length; i++) {
    array[i].draw();
  }
}

function drawBullets() {
  for ( i = 0; i < bulletObstacles.length; i++) {
    bulletObstacles[i].x -= 5;
    bulletObstacles[i].draw();
  }
}

function drawBulletsDeath() {
  for ( i = 0; i < bulletObstacles.length; i++) {
    bulletObstacles[i].draw();
  }
}

function checkJaegerCollision(jaeger) {
  if (wolf.crashWith(jaeger) && jaeger.dead === false) {
     if (wolf.bottom() < jaeger.top()+3 &&
         wolf.bottom() > jaeger.top()-3) {

      jaeger.death();
      jaeger.dead = true;
      myGameArea.score += 100;
    }
    else {
      wolf.death();
      myGameArea.stop(); }
    }
}

function checkCollision(obstacle) {
  if(wolf.crashWith(obstacle)) {
    myGameArea.stop();
  }
}

function checkBlocks(block) {
  if(wolf.jumpOn(block)) {
    wolf.floorY = block.y;
  }
  else if (wolf.x > (block.x+block.width) && wolf.floorY < 450) {
    wolf.floorY = 450;
  }
  else if (wolf.jumpAgainst(block)) {
    if (wolf.right() === block.left()) {

    wolf.x -= 1;
     }
   }
  if (wolf.jumpAtBottom(block)) {
    if (wolf.top() < block.bottom() && wolf.jumping === true) {
      wolf.dy = 1;
    }
  }
}

function addObstacle() {
  var randomNumber = Math.floor(Math.random()*3)
     switch (randomNumber) {
       case 0:
        createWater();
         break;
      case 1:
        createJaeger();
        break;
      case 2:
        console.log("none");
        break;
       default:
         break;
     }
}




function updateCanvas() {
  myGameArea.frames++;
  

  cleanArray(jaegerObstacles);
  cleanArray(bulletObstacles);
  cleanArray(blocks);
  cleanArray(waterObstacles);
  cleanArray(sheepToken);
  

  ctx.clearRect(0,0,canvas.width, canvas.height);

  drawTime();
  drawScore();

  if (myGameArea.frames % 300 === 0) {
     addObstacle();
  }

  wolf.newPos();
  wolf.draw();
  floor.draw();
 
  drawArray(jaegerObstacles);
  drawArray(waterObstacles);
  drawArray(sheepToken);
  drawArray(blocks);
  drawBullets();

  

  if (myGameArea.frames % 200 === 0) {
    for (var j = 0; j < jaegerObstacles.length; j++) {
        if (jaegerObstacles[j].dead === false)
            createBullet(jaegerObstacles[j]);
    }
  }
  

  for (var i = 0; i < jaegerObstacles.length; i++) {
    checkJaegerCollision(jaegerObstacles[i]);
  }

  for (var i = 0; i < bulletObstacles.length; i++) {
    checkCollision(bulletObstacles[i]);
  }

  for (var i = 0; i < waterObstacles.length; i++) {
    checkCollision(waterObstacles[i]);
  }


  for (var i = 0; i < blocks.length; i++) {
   checkBlocks(blocks[i]);
  }
}


function deathUpdate() {
  wolf.newPos();
  ctx.clearRect(0,0,canvas.width, canvas.height);
  drawTime();
  drawScore();
  floor.draw();
  drawArrayDeath(jaegerObstacles);
  drawArrayDeath(waterObstacles);
  drawArrayDeath(blocks);
  drawBulletsDeath();
  wolf.draw();
  if (wolf.y > 500) {
    clearInterval(deathInterval);
    clearArray(bulletObstacles);
    clearArray(waterObstacles);
    clearArray(jaegerObstacles);
    clearArray(blocks);
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

