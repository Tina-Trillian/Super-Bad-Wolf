var canvas = document.getElementById("game-area");
var ctx = canvas.getContext("2d");

window.onload = function() {
  // var x = new Sound("/Sounds/01 - Opening.ogg")
  // x.loop = true;
  // x.play();
  updateHighScore();
  drawBeginnerScreen("--press Enter to start--","-press Arrow-Up to jump-","-press Arrow-Down to duck-");
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
      if (gameStarted)
      wolf.jump();
       break;
     case 40:
     if (gameStarted)
      wolf.duck();
      break;
     case 13:
     if (!gameStarted)
     startGame();
   }
 };