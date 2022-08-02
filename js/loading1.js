let canvas = document.getElementById("loadbar");
let ctx = canvas.getContext("2d");
let loadingImg = new Image();
var x = 30;
loadingImg.src = 'img/gradient-loading.jpg';
loadingImg.onload = function () {
  ctx.drawImage(loadingImg, 0, 0, x, canvas.height);
}
let randomTime = Math.random()*40;
let load = setInterval(function () {
  x++;
  ctx.drawImage(loadingImg, 0, 0, x, canvas.height);
  if (x == canvas.width - 10) {
    clearInterval(load);
    document.getElementById("startGame").disabled = false;
  } 
}, randomTime);

function startGame(){
  document.getElementById("main").style.display = "block";
  document.getElementById("loadingGame").style.display = "none";
}
