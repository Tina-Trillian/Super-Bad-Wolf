var plattformImage = new Image;
plattformImage.src = "images/Graphics_game/plattform.png";

var blockImage = new Image;
blockImage.src = "images/Graphics_game/Block.png";



function Block(width, height, image, x, y) {
  this.width = width,
  this.height = height,
  this.x = x,
  this.y = y,
  this.ctx = ctx,
  this.image = image;
  this.draw = function () {
    this.ctx.drawImage(this.image,this.x, this.y, this.width, this.height);
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

function addBlockGroup(image) {
  var randomNumber = Math.floor(Math.random()*5);
  if (randomNumber === 0 && level === 1) {
    blockGroup1(image);
  }
  if (randomNumber === 1 && level === 1) {
    blockGroup2(image);
  }
  if (randomNumber === 2 && level === 1) {
    blockGroup3(image);
  }
  if (randomNumber === 3) {
    blockGroup4(image);
  }
}








function createBlock() {
  var newBlock = new Block(60,60,blockImage,canvas.width, 280);
  blocks.push(newBlock);
}


function blockGroup1(image) {
  var newBlock1 =  new Block(60,60,image, canvas.width, 280);
  createSheep(newBlock1);
  var newBlock2 =  new Block(60,60,image, canvas.width+60, 280);
  createSheep(newBlock2);
  var newBlock3 =  new Block(60,60,image, canvas.width+180, 200);
  createSheep(newBlock3);
  var newBlock4 =  new Block(60,60,image, canvas.width+240, 200);
  createSheep(newBlock4);
  var newBlock5 =  new Block(60,60,image, canvas.width+340, 280);
  createSheep(newBlock5);
  blocks.push(newBlock1,newBlock2,newBlock3,newBlock4,newBlock5);
}

function blockGroup2(image) {
  var newBlock1 =  new Block(60,60,image, canvas.width, 280);
  createSheep(newBlock1);
  var newBlock2 =  new Block(60,60,image, canvas.width+60, 280);
  createSheep(newBlock2);
  blocks.push(newBlock1,newBlock2);
}

function blockGroup3(image) {
  var newBlock1 =  new Block(60,60,image, canvas.width, 280);
  createSheep(newBlock1);
  var newBlock2 =  new Block(60,60,image, canvas.width+100, 200);
  createSheep(newBlock2);
  var newBlock3 =  new Block(60,60,image, canvas.width+160, 200);
  createSheep(newBlock3);
  blocks.push(newBlock1,newBlock2,newBlock3);
}

function blockGroup4(image) {
  var newBlock1 =  new Block(60,60,image, canvas.width, 280);
  createSheep(newBlock1);
  blocks.push(newBlock1)
}


function plattGroup1(image) {
  var newPlat1 = new Block(70,50,image, canvas.width, 280);
  var newPlat2 = new Block(70,50,image, canvas.width + 240, 200)
  blocks.push(newPlat1,newPlat2);
}

function plattGroup2(image) {
  var newPlat1 = new Block(70,50,image, canvas.width, 120);
  var newPlat2 = new Block(70,50,image, canvas.width + 240, 120);
  var newPlat3 = new Block(70,50,image, canvas.width + 310, 120)
  var newPlat4 = new Block(70,50,image, canvas.width + 380, 120)
  blocks.push(newPlat1,newPlat2,newPlat3,newPlat4);
}

function plattGroup3(image) {
  var newPlat1 = new Block(70,50,image, canvas.width, 350);
  var newPlat2 = new Block(70,50,image, canvas.width + 70, 350);
  var newPlat3 = new Block(70,50,image, canvas.width + 140, 350);
  var newPlat4 = new Block(70,50,image, canvas.width + 350, 280);
  blocks.push(newPlat1,newPlat2,newPlat3,newPlat4);
}

function plattGroup4(image) {
  var newPlat1 = new Block(70,50,image, canvas.width, 280);
  var newPlat2 = new Block(70,50,image, canvas.width + 70, 280);
  blocks.push(newPlat1,newPlat2);
}

function plattGroup5(image) {
  var newPlat1 = new Block(70,50,image, canvas.width, 200);
  var newPlat2 = new Block(70,50,image, canvas.width + 70, 200);
  var newPlat3 = new Block(70,50,image, canvas.width + 280, 120);
  var newPlat4 = new Block(70,50,image, canvas.width + 350, 120);
  var newPlat5 = new Block(70,50,image, canvas.width + 560, 200);
  blocks.push(newPlat1,newPlat2,newPlat3,newPlat4,newPlat5);
}

function plattGroup6(image) {
  var newPlat1 = new Block(70,50,image, canvas.width, 280);
  var newPlat2 = new Block(70,50,image, canvas.width + 240, 200);
  var newPlat3 = new Block(70,50,image, canvas.width + 310, 200);
  blocks.push(newPlat1,newPlat2,newPlat3);
}

function plattGroup7(image) {
  var newPlat1 = new Block(70,50,image, canvas.width, 200);
  blocks.push(newPlat1);
}

function checkSpacePlatt() {
    var test = true
    for (var i = 0; i < blocks.length; i++) {
      if (blocks[i].x > (canvas.width-170)) {
            test = false;
          }
    }
    return test;
}



function addPlattGroup(image) {
  
  if (checkSpacePlatt()) {
  var randomNumber = Math.floor(Math.random()*7);
  if (randomNumber === 0) {
    plattGroup1(image);
  }
  else if (randomNumber === 1) {
    plattGroup2(image);
  }
  else if (randomNumber === 2) {
    plattGroup3(image);
  }
  else if (randomNumber === 3) {
    plattGroup4(image);
  }
  else if (randomNumber === 4) {
    plattGroup5(image);
  }
  else if (randomNumber === 5) {
    plattGroup6(image);
  }
  else if (randomNumber === 6) {
    plattGroup7(image);
  }
  }
}
