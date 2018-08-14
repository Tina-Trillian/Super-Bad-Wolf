
function drawTime() {
  ctx.font = '40px VT323';
  ctx.fillStyle = "white"
  var time = Math.floor(frames / 100);
  if (time < 10) {time = "000" + time}
  else if (time < 100) {time = "00" + time}
  else if (time < 1000) {time = "0" + time}
  ctx.textAlign = "center";
  ctx.fillText("Time",175,35,350);
  ctx.fillText(time,175,70,350);
}

function drawScore() {
  ctx.font = '40px VT323';
  ctx.fillStyle = "white"
  var curScore = score;
  if (curScore === 0) {curScore = "00000"}
  else if (curScore < 1000) {curScore = "00" + curScore}
  else if (curScore < 10000) {curScore = "0" + curScore}
  ctx.textAlign = "center";
  ctx.fillText("Score",525,35,350);
  ctx.fillText(curScore,525,70,350);
}