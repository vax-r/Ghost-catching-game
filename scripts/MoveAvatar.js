var speed = 5;
var player1Top = 60;
var player1Left = 60;
var player2Top = 20;
var player2Left = 20;
var player3Top = 40;
var player3Left = 40;
// var ghost: any = new moveGhost("ghost");
var player1;
var player2;
var player3;
//generate random integer
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var Ghost_id = getRandomInt(1, 3);
function setGhost() {
    var player_name = document.getElementById("player_name" + Ghost_id);
    var player_fig = document.getElementById("p" + Ghost_id + "_fig");
    var ghost_name = "(GHOST)";
    player_name.innerHTML += ghost_name;
    player_fig.innerHTML += ghost_name;
    switch (Ghost_id) {
        case 1:
            player1 = new moveGhost("Player1");
            player2 = new moveAvatar("Player2");
            player3 = new moveAvatar("Player3");
            break;
        case 2:
            player1 = new moveAvatar("Player1");
            player2 = new moveGhost("Player2");
            player3 = new moveAvatar("Player3");
            break;
        case 3:
            player1 = new moveAvatar("Player1");
            player2 = new moveAvatar("Player2");
            player3 = new moveGhost("Player3");
            break;
    }
}
setGhost();
window.addEventListener("keydown", function (e) {
    onKey(e);
});
function onKey(e) {
    switch (e.code) {
        case "KeyW":
            player3.moveUp();
            break;
        case "KeyS":
            player3.moveDown();
            break;
        case "KeyA":
            player3.moveLeft();
            break;
        case "KeyD":
            player3.moveRight();
            break;
        case "ArrowUp":
            player1.moveUp();
            break;
        case "ArrowDown":
            player1.moveDown();
            break;
        case "ArrowRight":
            player1.moveRight();
            break;
        case "ArrowLeft":
            player1.moveLeft();
            break;
        case "KeyU":
            player2.moveUp();
            break;
        case "KeyJ":
            player2.moveDown();
            break;
        case "KeyH":
            player2.moveLeft();
            break;
        case "KeyK":
            player2.moveRight();
            break;
        default:
            break;
    }
}
function moveAvatar(avatar_name) {
    var avatar = document.getElementById(avatar_name);
    var atr_top;
    var atr_left;
    var next_top;
    var next_left;
    switch (avatar_name) {
        case "Player1":
            atr_top = player1Top;
            atr_left = player1Left;
            break;
        case "Player2":
            atr_top = player2Top;
            atr_left = player2Left;
            break;
        case "Player3":
            atr_top = player3Top;
            atr_left = player3Left;
        default: break;
    }
    this.moveUp = function () {
        next_top = atr_top - speed;
        if (next_top <= -3) {
            return;
        } //檢查上邊界
        atr_top = next_top;
        avatar.style.top = atr_top + "%";
    };
    this.moveDown = function () {
        next_top = atr_top + speed;
        if (next_top >= 77) {
            return;
        } //檢查下邊界
        atr_top = next_top;
        avatar.style.top = atr_top + "%";
    };
    this.moveLeft = function () {
        next_left = atr_left - speed;
        if (next_left <= -5) {
            return;
        } //檢查左邊界
        atr_left = next_left;
        avatar.style.left = atr_left + "%";
    };
    this.moveRight = function () {
        next_left = atr_left + speed;
        if (next_left >= 81) {
            return;
        } //檢查右邊界
        atr_left = next_left;
        avatar.style.left = atr_left + "%";
    };
}
function moveGhost(avatar_name) {
    var avatar = document.getElementById(avatar_name);
    var atr_top;
    var atr_left;
    switch (avatar_name) {
        case "Player1":
            atr_top = player1Top;
            atr_left = player1Left;
            break;
        case "Player2":
            atr_top = player2Top;
            atr_left = player2Left;
            break;
        case "Player3":
            atr_top = player3Top;
            atr_left = player3Left;
        default: break;
    }
    var next_top;
    var next_left;
    this.moveUp = function () {
        next_top = atr_top - speed;
        // if(上邊界 || 右上 || 左上)
        if (next_top <= -3 || (next_top <= 24 && atr_left > 63) || (next_top <= 24 && atr_left < 14)) {
            return;
        }
        atr_top = next_top;
        avatar.style.top = atr_top + "%";
    };
    this.moveDown = function () {
        next_top = atr_top + speed;
        if (next_top >= 77 || (next_top >= 50 && atr_left < 14) || (next_top >= 50 && atr_left > 63)) {
            return;
        }
        atr_top = next_top;
        avatar.style.top = atr_top + "%";
    };
    this.moveLeft = function () {
        next_left = atr_left - speed;
        if (next_left <= -5 || (next_left <= 14 && atr_top < 24) || (next_left <= 14 && atr_top > 50)) {
            return;
        }
        atr_left = next_left;
        avatar.style.left = atr_left + "%";
    };
    this.moveRight = function () {
        next_left = atr_left + speed;
        if (next_left >= 81 || (next_left >= 63 && atr_top < 24) || (next_left >= 63 && atr_top > 50)) {
            return;
        }
        atr_left = next_left;
        avatar.style.left = atr_left + "%";
    };
}
