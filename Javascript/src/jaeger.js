function Jaeger(width, height, x, y) {
  this.width = width,
  this.height = height,
  this.x = x,
  this.y = y,
  this.ctx = ctx,
  this.image = new Image;
  this.image.height = "200";
  this.image.src = "images/Graphics_game/Jaeger_einzeln.png",
  this.dead = false;

  this.draw = function () {
    this.ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
     },

    this.death = function () {
     this.image.src = "images/Graphics_game/Jaeger_tot.png"
     this.y = canvas.height-50-this.height;
    },
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

function Bullet(width, height, x, y) {
  this.width = width,
  this.height = height,
  this.x = x,
  this.y = y,
  this.ctx = ctx,
  this.image = new Image;
  this.image.src = "../../images/Graphics_game/bullet.png",
  this.draw = function () {
    this.ctx.drawImage(this.image, this.x, this.y);
     },
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

function createJaeger() {
  var newJaeger = new Jaeger(88, 110,canvas.width,340);
  jaegerObstacles.push(newJaeger);
}


function createBullet(array) {
  for (var j = 0; j < array.length; j++) {
    if (array[j].dead === false) {
      var newBullet = new Bullet(10,6,array[j].x,385);
      bulletObstacles.push(newBullet)
    }
  }
}

