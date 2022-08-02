//Chạy minion
let margin_Left = (window.innerWidth / 2) - 275;
document.getElementById("loadMinion").style.marginLeft = margin_Left + 'px';
window.onload = function () {
    document.getElementById("loadMinion").style.transform = 'translateX(475px)';
    document.getElementById("loadMinion").style.transition = '10s linear';
}

// Chạy thanh loading bar
let canvas = document.getElementById("loadingCanvas");
let ctx = canvas.getContext('2d');
let loadBar = new Image();
loadBar.src = 'img/gradient-loading.jpg';
let widthLoadBar = 0;
let load = setInterval(function(){
    ctx.drawImage(loadBar,0,0, widthLoadBar, canvas.height);
    widthLoadBar++;
    //canvas.width+50 để full thanh bar dc đẹp
    if(widthLoadBar == canvas.width+50){
        clearInterval(load);
    }
},34)

