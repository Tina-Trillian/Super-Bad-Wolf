function Block(width, height, color, x, y) {
  this.width = width,
  this.height = height,
  this.x = x,
  this.y = y,
  this.ctx = ctx,
  this.ctx.fillStyle = color,
  this.draw = function () {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
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
}

function createBlock() {
  var newBlock = new Block(60,60,"green",canvas.width, 280);
  blocks.push(newBlock);
}


function blockGroup1() {
  var newBlock1 =  new Block(60,60,"green",canvas.width, 280);
  createSheep(newBlock1);
  var newBlock2 =  new Block(60,60,"green",canvas.width+60, 280);
  createSheep(newBlock2);
  var newBlock3 =  new Block(60,60,"green",canvas.width+180, 200);
  createSheep(newBlock3);
  var newBlock4 =  new Block(60,60,"green",canvas.width+240, 200);
  createSheep(newBlock4);
  var newBlock5 =  new Block(60,60,"green",canvas.width+340, 280);
  createSheep(newBlock5);
  blocks.push(newBlock1,newBlock2,newBlock3,newBlock4,newBlock5);
}

function blockGroup2() {
  var newBlock1 =  new Block(60,60,"green",canvas.width, 280);
  var newBlock2 =  new Block(60,60,"green",canvas.width+60, 280);
  blocks.push(newBlock1,newBlock2);
}

function blockGroup3() {
  var newBlock1 =  new Block(60,60,"green",canvas.width, 280);
  var newBlock2 =  new Block(60,60,"green",canvas.width+100, 200);
  var newBlock3 =  new Block(60,60,"green",canvas.width+160, 200);
  blocks.push(newBlock1,newBlock2,newBlock3);
}

function blockGroup4() {
  var newBlock1 =  new Block(60,60,"green",canvas.width, 280);
  blocks.push(newBlock1)
}

