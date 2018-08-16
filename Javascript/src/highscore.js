var highscoreTable = [];

function Highscore(name,score) {
  this.name = name;
  this.score = score;
}

function addNewHighScore(name,score) {
  var winner = new Highscore(name, score);
  highscoreTable.push(winner);
}

localStorage.setItem("Highscore", JSON.stringify(highscoreTable));

