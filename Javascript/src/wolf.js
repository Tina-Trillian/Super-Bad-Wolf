function Wolf(width, height, x, y) {
  this.width = width,
  this.height = height,
  this.x = x,
  this.y = y,
  this.ctx = ctx,
  this.dy = 2,
  this.jumping = false;
  this.ducking = false;
  this.dead = false;
  this.floorY = 450;
  this.image = new Image;
  this.image.src = "../../images/Graphics_game/wolf_walk1_einzeln.png"
  this.draw = function () {
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}





Wolf.prototype.newPos = function () {
     this.dy += 0.05;
     this.y += this.dy;

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
  }


Wolf.prototype.jump = function () {
     if (this.jumping === false && this.ducking === false) {
     this.dy = -4.4;
     this.jumping = true}
   }

Wolf.prototype.duck = function () {
     if (this.jumping === false && this.ducking === false) {
     this.height = 55
     this.y = this.floorY-this.height;
     this.ducking = true}
     }


Wolf.prototype.death = function () {
     this.dy = -5;
     this.floorY = 700
     this.jumping = true;
     console.log(wolf.ducking);
     console.log(wolf.jumping);
    }


Wolf.prototype.left = function() {
      return this.x;
    }


Wolf.prototype.right = function() {
      return this.x + this.width;
    }

    
Wolf.prototype.top = function() {
      return this.y;
    }

Wolf.prototype.bottom = function() {
      return this.y + this.height;
    }

Wolf.prototype.crashWith = function(obstacle) {
      return !(
        this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right()
      );
    }

  
Wolf.prototype.jumpOn = function(block) {
      return ! (
        this.bottom() > block.top() ||
        this.top() > block.bottom() ||
        this.right() < block.left() ||
        this.left() > block.right()
      )
    }

Wolf.prototype.jumpAgainst = function(block) {
      return ! (
        this.bottom() < block.top() &&
        this.top() > block.bottom()
      )
    }

Wolf.prototype.jumpAtBottom = function(block) {
      return (
        this.right() > block.left() &&
        this.left() < block.right() &&
        this.top() > block.top()
      )
    }



Wolf.prototype.checkCollision = function(array) {
  for (var i = 0; i < array.length; i++) {
    if (this.crashWith(array[i])) {
    switch (array) {
      case jaegerObstacles:
      if (array[i].dead === false) {
        if (Math.floor(this.bottom()) >= array[i].top() &&
              this.dy > 0) {
    
          array[i].death();
          array[i].dead = true;
          score += 100;
        }
        else {
          console.log("wolf is dead");
           stopGame(); 
        }
      }
      break;
      case sheepToken:
        score += 100;
        sheepToken.splice(i,1);
      break;
      default:
        stopGame();
        break;
    }
  }
  else {
    switch (array) {
      case blocks:
      
    }
  }
}
}

    Wolf.prototype.checkBlocks = function(block) {
      if(this.jumpOn(block)) {
        this.floorY = block.y;
      }
      else if (this.x > (block.x+block.width) && this.floorY < 450) {
        this.floorY = 450;
      }
      else if (this.jumpAgainst(block)) {
        if (this.right() === block.left()) {
    
        this.x -= 1;
         }
       }
      if (this.jumpAtBottom(block)) {
        if (this.top() < block.bottom() && this.jumping === true) {
          this.dy = 1;
        }
      }
    }



