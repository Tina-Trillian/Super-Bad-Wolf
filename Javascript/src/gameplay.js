
var interval,wolf,floor,deathInterval, waterObstacles,jaegerObstacles,bulletObstacles, blocks, sheepToken, frames, score;

var frames = 0;
var score = 0;

function stopGame () {
    clearInterval(interval)
    deathInterval = setInterval(deathUpdate,1000/100);
    wolf.death();
    console.log("stop");
}

function startGame() {
  frames = 0,
  score = 0000,
  wolf = new Wolf(50,75,"grey", 100, 375);
  wolf.draw();

  floor = new Floor(700, 50, "green",0, 450);
  floor.draw();

  waterObstacles = [];
  jaegerObstacles = [];
  bulletObstacles = [];
  blocks = [];
  sheepToken = [];

  interval = setInterval(updateCanvas, 1000/100);
}


function createWater() {
   var newWater = new Water(70,50,"blue",canvas.width,450);
   waterObstacles.push(newWater);
   }

function createJaeger() {
    var newJaeger = new Jaeger(50,90,"yellow",canvas.width,360);
    jaegerObstacles.push(newJaeger);
  }

function createBullet(array) {
  for (var j = 0; j < array.length; j++) {
    if (array[j].dead === false) {
      var newBullet = new Bullet(10,10,"red",array[j].x,375);
      bulletObstacles.push(newBullet)
    }
  }
}


function cleanArray(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].x < 0-array[i].width) {
      array.splice(i,1);
    }
  }
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
        addBlockGroup();
        break;
       default:
         break;
     }
}

function updateCanvas() {
  frames++;
  

  cleanArray(jaegerObstacles);
  cleanArray(bulletObstacles);
  cleanArray(blocks);
  cleanArray(waterObstacles);
  cleanArray(sheepToken);
  

  ctx.clearRect(0,0,canvas.width, canvas.height);

  drawTime();
  drawScore();

  if (frames % 300 === 0) {
     addObstacle();
  }

  if (frames % 200 === 0) {
    createBullet(jaegerObstacles);
    }

  wolf.newPos();
  wolf.draw();
  floor.draw();
 
  drawArray(jaegerObstacles);
  drawArray(waterObstacles);
  drawArray(sheepToken);
  drawArray(blocks);
  drawBullets();

  

  for (var i = 0; i < jaegerObstacles.length; i++) {
    wolf.checkJaegerCollision(jaegerObstacles[i]);
  }

  for (var i = 0; i < bulletObstacles.length; i++) {
    wolf.checkCollision(bulletObstacles[i]);
  }

  for (var i = 0; i < waterObstacles.length; i++) {
    wolf.checkCollision(waterObstacles[i]);
  }

  for (var i = 0; i < sheepToken.length; i++) {
    wolf.checkCollected(sheepToken[i]);
  }


  for (var i = 0; i < blocks.length; i++) {
   wolf.checkBlocks(blocks[i]);
  }
}


function deathUpdate() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
  wolf.newPos();
  drawTime();
  drawScore();
  floor.draw();
  drawArrayDeath(jaegerObstacles);
  drawArrayDeath(waterObstacles);
  drawArrayDeath(blocks);
  drawArrayDeath(sheepToken);
  drawArrayDeath(bulletObstacles);
  wolf.draw();
  if (wolf.y > 500) {
    clearInterval(deathInterval);
  }
}



