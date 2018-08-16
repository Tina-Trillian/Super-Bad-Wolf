

function Sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
      this.sound.play();
  }
  this.stop = function(){
      this.sound.pause();
  }
}

 myAudio = new Audio('Sounds/03 - HWV 56 - Why do the nations so furiously rage together.ogg'); 
 myAudio.addEventListener('ended', function() {
     this.currentTime = 0;
     this.play();
 }, false);

