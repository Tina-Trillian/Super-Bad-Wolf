function Jaeger(width, height, color, x, y) {
  this.width = width,
  this.height = height,
  this.x = x,
  this.y = y,
  this.ctx = ctx,
  this.ctx.fillStyle = color,
  this.dead = false;

  this.draw = function () {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
     },

    this.death = function () {
     this.height = 20
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

function Bullet(width, height, color, x, y) {
  this.width = width,
  this.height = height,
  this.x = x,
  this.y = y,
  this.ctx = ctx,
  this.ctx.fillStyle = color,
  this.draw = function () {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
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

