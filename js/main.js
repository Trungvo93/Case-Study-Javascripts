window.onload = function () {
    creatBoard();
    createArrayBoard();
}


//Tạo giao diện bàn cờ bằng button
function creatBoard() {
    let createButton = '';
    let checkButton = document.getElementsByClassName("btnCaro");
    for (let i = 1; i <= 144; i++) {
        if (i % 12 == 0) {
            createButton += '<button onclick="caro(this.value)" class="btnCaro">&nbsp</button> <br> ';
        } else {
            createButton += '<button onclick="caro(this.value)" class="btnCaro">&nbsp</button>';
        }

    }
    document.getElementById("cocaro").innerHTML = createButton;
}


//Tạo mảng chứa giá trị bàn cờ
let arrCaro = new Array(12);
function createArrayBoard() {
    let checkButton = document.getElementsByClassName("btnCaro");
    for (let i = 0; i < 144; i++) {
        checkButton[i].value = i + 1;
    }
    let countBtnCaro = 0;

    for (let i = 0; i < 12; i++) {
        let childArr = new Array();
        for (let j = 0; j < 12; j++) {
            childArr.push(checkButton[countBtnCaro].innerHTML);
        }
        arrCaro[i] = childArr;
        countBtnCaro++;
    }
    console.log(arrCaro);
}

//Gán giá trị x vào bàn cờ
let rotate = 1;
function caro(evt) {
    let checkButton = document.getElementsByClassName("btnCaro");
    if (rotate == 1 && checkButton[evt - 1].innerHTML != 'x' && checkButton[evt - 1].innerHTML != 'o') {
        checkButton[evt - 1].innerHTML = 'x';
        rotate = 2;
    }
    else if (rotate == 2 && checkButton[evt - 1].innerHTML != 'x' && checkButton[evt - 1].innerHTML != 'o') {
        checkButton[evt - 1].innerHTML = 'o';
        checkButton[evt - 1].style.color = "red";
        rotate = 1;
    }

    //vị trí hàng của button
    let n = Math.floor(evt / 12);
    if (evt % 12 == 0) {
        n--;
    }
    //vị trí cột của button
    let m = (evt % 12) - 1;
    if (m == -1) {
        m = 11;
    }

    //Gán giá trị x,o vào mảng
    for (let i = 0; i < 12; i++) {
        if (i == n) {
            for (let j = 0; j < 12; j++) {
                if (j == m) {
                    arrCaro[n][m] = checkButton[evt - 1].innerHTML;
                }
            }

        }
    }
    console.log(n, m, arrCaro[n][m], evt);
    if (checkWinDoc(n, m, arrCaro[n][m])) {
        alert('Cờ ' + arrCaro[n][m] + ' thắng');
        disableBoard();
    } else if (checkWinNgang(n, m, arrCaro[n][m])) {
        alert('Cờ ' + arrCaro[n][m] + ' thắng');
        disableBoard();
    } else if (checkWinCheo1(n, m, arrCaro[n][m])) {
        alert('Cờ ' + arrCaro[n][m] + ' thắng');
        disableBoard();
    }else if (checkWinCheo2(n, m, arrCaro[n][m])) {
        alert('Cờ ' + arrCaro[n][m] + ' thắng');
        disableBoard();
    };
}

function checkWinDoc(n, m, value) {
    let pointWin = 0;
    for (let i = -4; i <= 4; i++) {
        //tránh check dữ liệu ngoài phạm vi
        if (n + i >= 0 && n + i < arrCaro.length) {
            if (arrCaro[n + i][m] == value) {
                pointWin++;
            }
            else pointWin = 0;
        }
        if (pointWin == 5) return true;
    }
    return false;
}
function checkWinNgang(n, m, value) {
    let pointWin = 0;
    for (let i = -4; i <= 4; i++) {
        //tránh check dữ liệu ngoài phạm vi
        if (m + i >= 0 && m + i < arrCaro.length) {
            if (arrCaro[n][m + i] == value) {
                pointWin++;
            }
            else pointWin = 0;
        }
        if (pointWin == 5) return true;
    }
    return false;
}

function checkWinCheo1(n, m, value) {
    let pointWin = 0;
    for (let i = -4; i <= 4; i++) {
        //tránh check dữ liệu ngoài phạm vi
        if (n + i >= 0 && n + i < arrCaro.length && m + i >= 0 && m + i < arrCaro.length) {
            if (arrCaro[n + i][m + i] == value) {
                pointWin++;
            }
            else pointWin = 0;
        }
        if (pointWin == 5) return true;
    }
    return false;
}

function checkWinCheo2(n, m, value) {
    let pointWin = 0;
    for (let i = -4; i <= 4; i++) {
        if (n + i >= 0 && n + i < arrCaro.length && m - i >= 0 && m - i < arrCaro.length) {
            if (arrCaro[n + i][m - i] == value) {
                pointWin++;
            }
            else pointWin = 0;
        }
        if (pointWin == 5) return true;
    }
    return false;
}

//Reset lại bàn cờ
function resetCaro() {
    creatBoard();
    createArrayBoard();
    rotate = 1;
}

function disableBoard(){
    let checkButton = document.getElementsByClassName("btnCaro");
    for (let i = 1; i <= 144; i++) {
        checkButton[i-1].disabled = "true";
    }
}
