
function drawTime() {
  ctx.font = '40px VT323';
  ctx.fillStyle = "white"
  var time = Math.floor(frames / 100);
  if (time < 10) {time = "000" + time}
  else if (time < 100) {time = "00" + time}
  else if (time < 1000) {time = "0" + time}
  ctx.fillText("Time",180,35);
  ctx.fillText(time,180,70);
}

function drawScore() {
  ctx.font = '40px VT323';
  ctx.fillStyle = "white"
  var curScore = score;
  if (curScore === 0) {curScore = "00000"}
  else if (curScore < 100) {curScore = "000" + curScore}
  else if (curScore < 1000) {curScore = "00" + curScore}
  else if (curScore < 10000) {curScore = "000" + curScore}
  ctx.fillText("Score",420,35);
  ctx.fillText(curScore,420,70);
}