function closePopup() {
    document.getElementById("popup").style.display = "none";
    nextGame();
}

function showPopup(value) {
    document.getElementById("popup").style.display = "flex";

    if (scoreX == 3 || scoreO == 3) {
        document.getElementById("showTeamWin").innerHTML = 'Cờ ' + value + ' giành chiến thắng chung cuộc';
    }
    else {
        document.getElementById("showTeamWin").innerHTML = 'Cờ ' + value + ' win rồi';
    }
}