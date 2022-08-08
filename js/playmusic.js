let statusPlaying = true;
function onoffMusic() {
    if (statusPlaying == true) {
        document.getElementById("onoffMusic").pause();
        statusPlaying = false;
        document.getElementById("stopMusic").style.display = "block";
        document.getElementById("music").style.display = "none";

    }
    else {
        document.getElementById("onoffMusic").play();
        statusPlaying = true;
        document.getElementById("stopMusic").style.display = "none";
        document.getElementById("music").style.display = "block";
    }
}

function playFirstTime(){
    document.getElementById("onoffMusic").play();
}