
var interval,wolf,floor,deathInterval, waterObstacles,jaegerObstacles,bulletObstacles, blocks, sheepToken, frames, score, gameStarted;
var treeBack, floorBack, cloudBack, level, whaleObstacles, whaleWaterObstacles;
var jumpSound, deathJaegerSound, loseSound, sheepSound, shootSound, splashSound, soundTrackLevel1;

var frames = 0;
var score = 0;
var tokenScore = 0;
var framesLevel2 = 0;


function drawBeginnerScreen(text1,text2,text3) {
    wolf = new Wolf(50,75, 100, 375);

    treeBack = new Background(treeImage, "tree", 0);
    treeBack.draw();
  
    cloudBack = new Background(cloudImage, "cloud", 0)
    cloudBack.draw();
  
    floorBack = new Background(floorImage, "floor",0)
    floorBack.draw();
    wolf.clipX = 0;
    wolf.draw();

    ctx.font = '40px VT323';
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(text1, 350, 150,700);
    ctx.font = '30px VT323';
    ctx.fillText(text2, 350,200,700);
    ctx.fillText(text3, 350,250,700);

}


function stopGame () {
    clearInterval(interval)
    deathInterval = setInterval(deathUpdate,1000/100);
    wolf.death();
    gameStarted = false; 
    myAudio.pause();
    myAudio.currentTime = 0;
    var name = $("input").val();
    addWinner(name,score);
}

function startGame() {
  gameStarted = true;
  frames = 0,
  score = 0000,
  tokenScore = 0,
  level = 1;
  framesLevel2 = 0;

  wolf.clipX = 50;
  wolf.draw();

  myAudio.play();


  waterObstacles = [];
  jaegerObstacles = [];
  bulletObstacles = [];
  blocks = [];
  sheepToken = [];
  whaleObstacles = [];
  whaleWaterObstacles = [];

  jumpSound = new Sound("Sounds/Jump_03.mp3");
  deathJaegerSound = new Sound("Sounds/Pickup_04.mp3");
  loseSound = new Sound("Sounds/Jingle_Lose_00.mp3");
  sheepSound = new Sound("Sounds/Sheep - Sound.mp3");
  shootSound = new Sound("Sounds/Hit_01.mp3")
  splashSound = new Sound("Sounds/Explosion_01.mp3")
  soundTrackLevel1 = new Sound("/Sounds/03 - HWV 56 - Why do the nations so furiously rage together.ogg")

  //soundTrackLevel1.play();

  interval = setInterval(updateCanvas, 1000/100);
}

function testLevel() {
  if (score >= 500) {
    level = 2;
    framesLevel2++
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

function drawWhaleWater() {
  for ( i = 0; i < whaleWaterObstacles.length; i++) {
    whaleWaterObstacles[i].y -= 7;
    whaleWaterObstacles[i].x--;
    whaleWaterObstacles[i].draw();
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
        addBlockGroup(blockImage);
        break;
       default:
         break;
     }
}

function updateCanvas() {
  frames++;

  testLevel();
  

  cleanArray(jaegerObstacles);
  cleanArray(bulletObstacles);
  cleanArray(blocks);
  cleanArray(waterObstacles);
  cleanArray(sheepToken);
  cleanArray(whaleObstacles);
  cleanArray(whaleWaterObstacles);
  

  ctx.clearRect(0,0,canvas.width, canvas.height);


  if (frames % 300 === 0 && level === 1) {
     addObstacle();
  }

  if (frames % 200 === 0) {
    createBullet(jaegerObstacles);
    createWhaleWater(whaleObstacles);
  }

  if (frames % 500 === 0 && level ===1 ) {
    addRandomSheep();
  }

  if (level === 2) {
    if (framesLevel2 > 200)
    createWaterLevel2();
    if (framesLevel2 === 300)
    plattGroup1(plattformImage);
    else if (framesLevel2 > 300)
    addPlattGroup(plattformImage);
  }
  

  wolf.checkCollision(jaegerObstacles);
  wolf.checkCollision(waterObstacles);
  wolf.checkCollision(bulletObstacles);
  wolf.checkCollision(sheepToken);
  wolf.checkCollision(whaleWaterObstacles);


  for (var i = 0; i < blocks.length; i++) {
    wolf.checkBlocks(blocks[i]);
  }
  treeBack.update();
  treeBack.draw();
  cloudBack.update();
  cloudBack.draw();
  floorBack.update();
  floorBack.draw();
  

  wolf.newPos();
  wolf.draw();
  
  drawTime();
  drawScore();
  drawSheepScore();


  drawArray(jaegerObstacles);
  drawArray(whaleObstacles);
  drawWhaleWater();
  drawArray(waterObstacles);
  drawArray(sheepToken);
  drawArray(blocks);
  drawBullets();
}


function deathUpdate() {
  ctx.clearRect(0,0,canvas.width, canvas.height);
  wolf.newPos();
  treeBack.draw();
  cloudBack.draw();
  floorBack.draw();
  drawTime();
  drawScore();
  drawSheepScore();
  drawArrayDeath(jaegerObstacles);
  drawArrayDeath(whaleObstacles);
  drawArrayDeath(waterObstacles);
  drawArrayDeath(whaleWaterObstacles);
  drawArrayDeath(blocks);
  drawArrayDeath(sheepToken);
  drawArrayDeath(bulletObstacles);
  wolf.draw();
  if (wolf.y > 500) {
    clearInterval(deathInterval);
    framesLevel2 = 0
    setTimeout (function() {
      gameStarted = false;
      ctx.clearRect(0,0,canvas.width, canvas.height);
      drawBeginnerScreen("--press Enter to try again--", ("Your score: " + score), ("Your time: " + Math.floor(frames/100)))
    },2000)
  }
}



