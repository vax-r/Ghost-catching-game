var second = 60;
var timer = null;

import { KeyEvent, moveGhost, moveAvatar } from "./MoveAvatar.js";


export var resume = false;
export var End = false;

export var player1Obj = {
    status: 0, count: 0, top: 60, left: 60, name: ""
};
export var player2Obj = {
    status: 0, count: 0, top: 20, left: 20, name: ""
};
export var player3Obj = {
    status: 0, count: 0, top: 40, left: 40, name: ""
};

export var player1;
export var player2;
export var player3;
//generate random integer
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
export var Ghost_id = 0;
function setGhost() {
    var player_fig = document.getElementById("p" + Ghost_id + "_fig");
    player_fig.innerHTML += "(GHOST)";
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
function GameStart() {

    window.addEventListener("keydown", KeyEvent);

    if(!resume || End){
        End=false;
        //reset position
        player1Obj.count = 0;player1Obj.left=60;player1Obj.top=60;
        player2Obj.count = 0;player2Obj.left=20;player2Obj.top=20;
        player3Obj.count = 0;player3Obj.left=40;player3Obj.top=40;
        document.getElementById("Player1").style.left=player1Obj.left+"%";
        document.getElementById("Player1").style.top = player1Obj.top+"%";
        document.getElementById("Player2").style.left=player2Obj.left+"%";
        document.getElementById("Player2").style.top = player2Obj.top+"%";
        document.getElementById("Player3").style.left=player3Obj.left+"%";
        document.getElementById("Player3").style.top = player3Obj.top+"%";
        
        //get player name
        var player_name1 = document.getElementById("player_name1");
        var player_name2 = document.getElementById("player_name2");
        var player_name3 = document.getElementById("player_name3");
        var player_fig1 = document.getElementById("p1_fig");
        var player_fig2 = document.getElementById("p2_fig");
        var player_fig3 = document.getElementById("p3_fig");
        player_fig1.innerHTML = player_name1.innerHTML;
        player_fig2.innerHTML = player_name2.innerHTML;
        player_fig3.innerHTML = player_name3.innerHTML;
        player1Obj.name = player_name1.innerHTML;
        player2Obj.name = player_name2.innerHTML;
        player3Obj.name = player_name3.innerHTML;
        //test//
        Ghost_id = getRandomInt(1, 3);
        setGhost();

        var doc_count1 = document.getElementById("player_count1");
        var doc_count2 = document.getElementById("player_count2");
        var doc_count3 = document.getElementById("player_count3");
        doc_count1.innerHTML = "Count: 0";
        doc_count2.innerHTML = "Count: 0";
        doc_count3.innerHTML = "Count: 0";
    }
    startCounDown();
}

export function GameOver(winner, loser) {
    End=true;
    resume=false;
    var time_counter = document.getElementById("time_counter");
    var counter = document.getElementById("counter");
    counter.style.left = "23%";
    counter.style.top = "8%";

    var left_time = second;
    time_counter.innerHTML = "Game Over!";
    window.removeEventListener("keydown", KeyEvent);
    StopTime();
    //TODO: 彈出結束視窗，winner和loser已經用參數傳入
    if(second!="Game Over!"){
        GameOverWin.render(winner,loser,left_time);
    }
    
}

function startCounDown() {
    if(second>0 && !End){
        var background = document.getElementById("leftbackground");
        background.src = "../image/mainframe-clock3.png";
        var time_counter = document.getElementById("time_counter");
        time_counter.style.display = "block";
        timer = setInterval(function () {
            time_counter.innerHTML = second + "秒";
            if (second == 0 || End) {
                var winner = "", loser = "";
                switch (Ghost_id) {
                    case 1:
                        if (player2Obj.count > player3Obj.count) {
                            winner = player3Obj.name;
                        }
                        else if (player2Obj.count < player3Obj.count) {
                            winner = player2Obj.name;
                        }
                        else {
                            winner = player2Obj.name + ", " + player3Obj.name;
                        }
                        loser = player1Obj.name;
                        break;
                    case 2:
                        if (player1Obj.count > player3Obj.count) {
                            winner = player3Obj.name;
                        }
                        else if (player1Obj.count < player3Obj.count) {
                            winner = player1Obj.name;
                        }
                        else {
                            winner = player1Obj.name + ", " + player3Obj.name;
                        }
                        loser = player2Obj.name;
                        break;
                    case 3:
                        if (player1Obj.count > player2Obj.count) {
                            winner = player2Obj.name;
                        }
                        else if (player1Obj.count < player2Obj.count) {
                            winner = player1Obj.name;
                        }
                        else {
                            winner = player1Obj.name + ", " + player2Obj.name;
                        }
                        loser = player3Obj.name;
                        break;
                }
                GameOver(winner, loser);
            }
            second--;
        }, 1000);
    }
    else if(End){alert("The Game is over! You need to reset Time.");}
}
function StopTime() {
    resume=true;
    window.removeEventListener("keydown",KeyEvent);
    clearInterval(timer);
}
function ResetTime() {
    resume=false;
    second = 60;
    var backimage=document.getElementById("rightframebackground");
    backimage.src="..\\image\\mainframe-right.png"
    var time_counter = document.getElementById("time_counter");
    var counter = document.getElementById("counter");
    counter.style.left = "40%";
    counter.style.top = "7%";
    time_counter.innerHTML = second + "秒";
    dialogbox.style.display = "none";
    dialogoverlay.style.display = "none";
}

window.GameStart = GameStart;
window.StopTime = StopTime;
window.ResetTime = ResetTime;