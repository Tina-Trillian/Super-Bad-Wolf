var canvas = document.getElementById("game-area");
var ctx = canvas.getContext("2d");

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