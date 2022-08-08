
// // Chạy thanh loading bar
let canvas = document.getElementById("loadingCanvas");
let ctx = canvas.getContext('2d');
let loadBar = new Image();
loadBar.src = 'img/gradient-loading.jpg';
let widthLoadBar = 25;

//Cho tại vị trí giữa trừ đi 250px
let loadPosition = -225;
//Khởi tạo minion
class moveObject {
    constructor(left) {
        this.left = left;
    }
    moveRight() {
        return this.left++;
    }
}
let minion1 = new moveObject(loadPosition);
function startLoadPage() {
    //Chạy thanh loadingbar
    ctx.drawImage(loadBar, 0, 0, widthLoadBar, canvas.height);
    widthLoadBar = widthLoadBar + 0.6;
    //Chạy minion
    document.getElementById("loadMinion").style.left = minion1.moveRight() + 'px';
    let runLoadBar = setTimeout(startLoadPage, 10);
    if (minion1.left == loadPosition + 460) {
        clearTimeout(runLoadBar);
        document.getElementById("btnPlayGame").style.display = "block";
    }
}

setTimeout(() => {
    document.getElementById("load1").style.display ="block";
    startLoadPage();
}, 2000);



function showGame() {
    document.getElementById("broad").style.display = "block";
    document.getElementById("loadingPage").style.display = "none";
    playFirstTime();
}