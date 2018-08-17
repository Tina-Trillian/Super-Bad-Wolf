var highscoreTable;

 function Highscore(name,score) {
   this.name = name;
   this.score = score;
 }

 function updateHighScore(name,score) {
   if (!localStorage.getItem("Highscore")) {
     localStorage.setItem("Highscore", JSON.stringify([]))
   }
   var winner = new Highscore(name, score);
   highscoreTable = JSON.parse(localStorage.getItem("Highscore"))
   highscoreTable.push(winner);
   highscoreTable
   .sort((a, b) => a.score < b.score)
   .splice(5);
   localStorage.setItem("Highscore", JSON.stringify(highscoreTable));
   highscoreTable = JSON.parse(localStorage.getItem("Highscore"));
   for (var i = 1; i <= highscoreTable.length; i++) {
     $("#"+i + "-name").text(highscoreTable[i-1].name);
     $("#"+i + "-score").text(highscoreTable[i-1].score);
   }
 }



