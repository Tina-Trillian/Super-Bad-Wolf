
function drawTime() {
  ctx.font = '40px VT323';
  ctx.fillStyle = "white"
  var time = Math.floor(myGameArea.frames / 70);
  if (time < 10) {time = "000" + time}
  else if (time < 100) {time = "00" + time}
  else if (time < 1000) {time = "0" + time}
  ctx.fillText("Time",180,35);
  ctx.fillText(time,180,70);
}

function drawScore() {
  ctx.font = '40px VT323';
  ctx.fillStyle = "white"
  var score = myGameArea.score;
  if (score === 0) {score = "00000"}
  else if (score < 100) {score = "000" + score}
  else if (score < 1000) {score = "00" + score}
  else if (score < 10000) {score = "000" + score}
  ctx.fillText("Score",420,35);
  ctx.fillText(score,420,70);
}