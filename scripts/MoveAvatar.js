var speed = 4;
var width = 12;
var height = 15;

import { player1Obj, player2Obj, player3Obj, player1, player2, player3, Ghost_id, GameOver } from "./Counter.js";
// var resume = false;
// var End = false;

// var player1Obj = {
//     status: 0, count: 0, top: 60, left: 60, name: ""
// };
// var player2Obj = {
//     status: 0, count: 0, top: 20, left: 20, name: ""
// };
// var player3Obj = {
//     status: 0, count: 0, top: 40, left: 40, name: ""
// };

// var player1;
// var player2;
// var player3;
// //generate random integer
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// var Ghost_id = 0;
// function setGhost() {
//     var player_fig = document.getElementById("p" + Ghost_id + "_fig");
//     player_fig.innerHTML += "(GHOST)";
//     switch (Ghost_id) {
//         case 1:
//             player1 = new moveGhost("Player1");
//             player2 = new moveAvatar("Player2");
//             player3 = new moveAvatar("Player3");
//             break;
//         case 2:
//             player1 = new moveAvatar("Player1");
//             player2 = new moveGhost("Player2");
//             player3 = new moveAvatar("Player3");
//             break;
//         case 3:
//             player1 = new moveAvatar("Player1");
//             player2 = new moveAvatar("Player2");
//             player3 = new moveGhost("Player3");
//             break;
//     }
// }
// function GameStart() {

//     window.addEventListener("keydown", KeyEvent);
//     if(!resume){
//         End=false;
//         //get player name
//         var player_name1 = document.getElementById("player_name1");
//         var player_name2 = document.getElementById("player_name2");
//         var player_name3 = document.getElementById("player_name3");
//         var player_fig1 = document.getElementById("p1_fig");
//         var player_fig2 = document.getElementById("p2_fig");
//         var player_fig3 = document.getElementById("p3_fig");
//         player_fig1.innerHTML = player_name1.innerHTML;
//         player_fig2.innerHTML = player_name2.innerHTML;
//         player_fig3.innerHTML = player_name3.innerHTML;
//         player1Obj.name = player_name1.innerHTML;
//         player2Obj.name = player_name2.innerHTML;
//         player3Obj.name = player_name3.innerHTML;
//         //test//
//         Ghost_id = getRandomInt(1, 3);
//         setGhost();

//         player1Obj.count = 0;player1Obj.left=60;player1Obj.top=60;
//         player2Obj.count = 0;player2Obj.left=20;player2Obj.top=20;
//         player3Obj.count = 0;player3Obj.left=40;player3Obj.top=40;
//         document.getElementById("Player1").style.left=player1Obj.left+"%";
//         document.getElementById("Player1").style.top = player1Obj.top+"%";
//         document.getElementById("Player2").style.left=player2Obj.left+"%";
//         document.getElementById("Player2").style.top = player2Obj.top+"%";
//         document.getElementById("Player3").style.left=player3Obj.left+"%";
//         document.getElementById("Player3").style.top = player3Obj.top+"%";

//         var doc_count1 = document.getElementById("player_count1");
//         var doc_count2 = document.getElementById("player_count2");
//         var doc_count3 = document.getElementById("player_count3");
//         doc_count1.innerHTML = "Count: 0";
//         doc_count2.innerHTML = "Count: 0";
//         doc_count3.innerHTML = "Count: 0";
//     }
//     startCounDown();
// }

export var KeyEvent = function(e){onKey(e);};

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
export function moveAvatar(avatar_name) {
    var Player;
    var avatar = document.getElementById(avatar_name);
    var atr_top;
    var atr_left;
    var next_top;
    var next_left;
    switch (avatar_name) {
        case "Player1":
            Player = player1Obj;
            atr_top = player1Obj.top;
            atr_left = player1Obj.left;
            break;
        case "Player2":
            Player = player2Obj;
            atr_top = player2Obj.top;
            atr_left = player2Obj.left;
            break;
        case "Player3":
            Player = player3Obj;
            atr_top = player3Obj.top;
            atr_left = player3Obj.top;
        default: break;
    }
    this.moveUp = function () {
        next_top = atr_top - speed;
        if (next_top <0) {
            return;
        } //檢查上邊界
        atr_top = next_top;
        avatar.style.top = atr_top + "%";
        Player.top = atr_top;
        CheckCountAndStatus(avatar_name);
        checkCollision();
    };
    this.moveDown = function () {
        next_top = atr_top + speed;
        if (next_top >80) {
            return;
        }
       //檢查下邊界
       atr_top = next_top;
        avatar.style.top = atr_top + "%";
        Player.top = atr_top;
        CheckCountAndStatus(avatar_name);
        checkCollision();
    };
    this.moveLeft = function () {
        next_left = atr_left - speed;
        if (next_left <0) {
            return;
        } //檢查左邊界
        atr_left = next_left;
        avatar.style.left = atr_left + "%";
        Player.left = atr_left;
        CheckCountAndStatus(avatar_name);
        checkCollision();
    };
    this.moveRight = function () {
        next_left = atr_left + speed;
        if (next_left >88) {
            return;
        } //檢查右邊界
        atr_left = next_left;
        avatar.style.left = atr_left + "%";
        Player.left = atr_left;
        CheckCountAndStatus(avatar_name);
        checkCollision();
    };
}
export function moveGhost(avatar_name) {
    var Ghost;
    var avatar = document.getElementById(avatar_name);
    var atr_top;
    var atr_left;
    switch (avatar_name) {
        case "Player1":
            Ghost = player1Obj;
            atr_top = player1Obj.top;
            atr_left = player1Obj.left;
            break;
        case "Player2":
            Ghost = player2Obj;
            atr_top = player2Obj.top;
            atr_left = player2Obj.left;
            break;
        case "Player3":
            Ghost = player3Obj;
            atr_top = player3Obj.top;
            atr_left = player3Obj.left;
        default: break;
    }
    var next_top;
    var next_left;
    this.moveUp = function () {
        
        next_top = atr_top - speed;
        // if(上邊界 || 右上 || 左上)
        if (next_top <0 || (next_top <24 && atr_left > 68) || (next_top <24 && atr_left<20)) {
            return;
        }
        atr_top = next_top;
        avatar.style.top = atr_top + "%";
        Ghost.top = atr_top;
        checkCollision();
    };
    this.moveDown = function () {
        next_top = atr_top + speed;
        if (next_top >80 || (next_top >56 && atr_left <20) || (next_top >56 && atr_left > 68)) {
            return;
        }
        atr_top = next_top;
        avatar.style.top = atr_top + "%";
        Ghost.top = atr_top;
        checkCollision();
    };
    this.moveLeft = function () {
        next_left = atr_left - speed;
        if (next_left <0 || (next_left<20 && atr_top < 24) || (next_left <20 && atr_top > 56)) {
            return;
        }
        atr_left = next_left;
        avatar.style.left = atr_left + "%";
        Ghost.left = atr_left;
        checkCollision();
    };
    this.moveRight = function () {
        next_left = atr_left + speed;
        if (next_left > 88 || (next_left >68 && atr_top < 20) || (next_left >68 && atr_top >56)) {
            return;
        }
        atr_left = next_left;
        avatar.style.left = atr_left + "%";
        Ghost.left = atr_left;
        checkCollision();
    };
}
function CheckCountAndStatus(avatar_name) {
    var Player;
    var pid = 0;
    switch (avatar_name) {
        case "Player1":
            Player = player1Obj;
            pid = 1;
            break;
        case "Player2":
            Player = player2Obj;
            pid = 2;
            break;
        case "Player3":
            Player = player3Obj;
            pid = 3;
            break;
    }
    var doc_Player = document.getElementById(avatar_name);
    var temp;
    temp = doc_Player.style.top;
    var playerTop = parseInt(temp.slice(0, -1));
    temp = doc_Player.style.left;
    var playerLeft = parseInt(temp.slice(0, -1));
    var doc_count = document.getElementById("player_count" + pid);
    if (playerTop < 24 && playerLeft < 20) { 
        if (Player.status == 0) {
            Player.count++;
            doc_count.innerHTML = "Count: " + Player.count;
        }
        Player.status = 1;
    }
    else if (playerTop < 24 && playerLeft > 69) { 
        if (Player.status == 0) {
            Player.count++;
            doc_count.innerHTML = "Count: " + Player.count;
        }
        Player.status = 1;
    }
    else if (playerTop > 58 && playerLeft <20) { 
        if (Player.status == 0) {
            Player.count++;
            doc_count.innerHTML = "Count: " + Player.count;
        }
        Player.status = 1;
    }
    else if (playerTop > 58 && playerLeft > 69) { 
        if (Player.status == 0) {
            Player.count++;
            doc_count.innerHTML = "Count: " + Player.count;
        }
        Player.status = 1;
    }
    else {
        //leave safe area
        Player.status = 0;
    }
}
function checkCollision() {
    var Ghost;
    switch (Ghost_id) {
        case 1:
            Ghost = player1Obj;
            if ((Ghost.left < player2Obj.left+width &&Ghost.left>player2Obj.left&& Math.abs(Ghost.top - player2Obj.top) < height) ||
                (Ghost.left + width > player2Obj.left &&Ghost.left<player2Obj.left&&Math.abs(Ghost.top - player2Obj.top) < height) ||
                (Ghost.top + height> player2Obj.top && Ghost.top<player2Obj.top&&Math.abs(Ghost.left - player2Obj.left) < width) ||
                (Ghost.top< player2Obj.top + height&& Ghost.top>player2Obj.top&&Math.abs(Ghost.left - player2Obj.left) < width)) {
                if(player1Obj.status==0){
                    setTimeout(()=>{
                        GameOver(Ghost.name, player2Obj.name);
                    },500);
                    // GameOver(Ghost.name, player2Obj.name);
                }
            }
            //Ghost and player3
            else if ((Ghost.left < player3Obj.left + width &&Ghost.left>player3Obj.left&& Math.abs(Ghost.top - player3Obj.top) < height) ||
                (Ghost.left + width > player3Obj.left &&Ghost.left<player3Obj.left&& Math.abs(Ghost.top - player3Obj.top) < height) ||
                (Ghost.top + height-3> player3Obj.top && Ghost.top<player3Obj.top&& Math.abs(Ghost.left - player3Obj.left) < width) ||
                (Ghost.top < player3Obj.top + height+3 && Ghost.top>player3Obj.top&& Math.abs(Ghost.left - player3Obj.left) < width)) {
                if(player3Obj.status==0){
                    setTimeout(()=>{
                        GameOver(Ghost.name, player3Obj.name);
                    },500);
                    
                }
               
            }
            break;
        case 2:
            Ghost = player2Obj;
            //Ghost and player1
            if ((Ghost.left < player1Obj.left + width &&Ghost.left>player1Obj.left&& Math.abs(Ghost.top - player1Obj.top) < height) ||
                (Ghost.left + width > player1Obj.left  &&Ghost.left<player1Obj.left&& Math.abs(Ghost.top - player1Obj.top) < height) ||
                (Ghost.top + height > player1Obj.top && Ghost.top<player1Obj.top&& Math.abs(Ghost.left - player1Obj.left) < width) ||
                (Ghost.top < player1Obj.top + height && Ghost.top>player1Obj.top&& Math.abs(Ghost.left - player1Obj.left) < width)) {
                if(player1Obj.status==0){
                    setTimeout(()=>{
                        GameOver(Ghost.name, player1Obj.name);
                    },500);
                    
                }
               
            }
            //Ghost and player3
            else if ((Ghost.left < player3Obj.left + width&&Ghost.left>player3Obj.left&& Math.abs(Ghost.top - player3Obj.top) < height) ||
                (Ghost.left + width > player3Obj.left  &&Ghost.left<player3Obj.left&& Math.abs(Ghost.top - player3Obj.top) < height) ||
                (Ghost.top + height > player3Obj.top && Ghost.top<player3Obj.top&& Math.abs(Ghost.left - player3Obj.left) < width) ||
                (Ghost.top < player3Obj.top + height&& Ghost.top>player3Obj.top&& Math.abs(Ghost.left - player3Obj.left) < width)) { 
                if(player3Obj.status==0){
                    setTimeout(()=>{
                        GameOver(Ghost.name, player3Obj.name);
                    },500);
                }
                
            }
            break;
        case 3:
            Ghost = player3Obj;
            //Ghost and player2
            if ((Ghost.left < player2Obj.left + width &&Ghost.left>player2Obj.left&& Math.abs(Ghost.top - player2Obj.top) < height) ||
                (Ghost.left + width > player2Obj.left &&Ghost.left<player2Obj.left&& Math.abs(Ghost.top - player2Obj.top) < height) ||
                (Ghost.top + height > player2Obj.top &&Ghost.top<player2Obj.top&& Math.abs(Ghost.left - player2Obj.left) < width) ||
                (Ghost.top < player2Obj.top + height &&Ghost.top>player2Obj.top&& Math.abs(Ghost.left - player2Obj.left) < width)) {
                if(player2Obj.status==0){
                    setTimeout(()=>{
                        GameOver(Ghost.name, player2Obj.name);
                    },500);
                    // GameOver(Ghost.name, player2Obj.name);
                }
            }
            //Ghost and player1
            else if ((Ghost.left < player1Obj.left + width &&Ghost.left>player1Obj.left&& Math.abs(Ghost.top - player1Obj.top) < height) ||
                (Ghost.left + width > player1Obj.left &&Ghost.left<player1Obj.left&& Math.abs(Ghost.top - player1Obj.top) < height) ||
                (Ghost.top + height > player1Obj.top &&Ghost.top<player1Obj.top&& Math.abs(Ghost.left - player1Obj.left) < width) ||
                (Ghost.top < player1Obj.top + height &&Ghost.top>player1Obj.top&& Math.abs(Ghost.left - player1Obj.left) < width)) {
                if(player1Obj.status==0){
                    setTimeout(()=>{
                        GameOver(Ghost.name, player1Obj.name);
                    },500);
                    // GameOver(Ghost.name, player1Obj.name);
                }
                
            }
            break;
    }
}
// function GameOver(winner, loser) {
//     End=true;
//     resume=false;
//     var time_counter = document.getElementById("time_counter");
//     var counter = document.getElementById("counter");
//     counter.style.left = "23%";
//     counter.style.top = "8%";
//     var second=time_counter.innerHTML;
//     time_counter.innerHTML = "Game Over!";
//     window.removeEventListener("keydown", KeyEvent);
//     StopTime();
//     //TODO: 彈出結束視窗，winner和loser已經用參數傳入
//     if(second!="Game Over!"){
//         GameOverWin.render(winner,loser,second);
//     }
    
// }
//Counter
// var second = 60;
// var timer = null;
// function startCounDown() {
//     if(second>0 && !End){
//         var background = document.getElementById("leftbackground");
//         background.src = "../image/mainframe-clock3.png";
//         var time_counter = document.getElementById("time_counter");
//         time_counter.style.display = "block";
//         timer = setInterval(function () {
//             time_counter.innerHTML = second + "秒";
//             if (second == 0 || End) {
//                 var winner = "", loser = "";
//                 switch (Ghost_id) {
//                     case 1:
//                         if (player2Obj.count > player3Obj.count) {
//                             winner = player3Obj.name;
//                         }
//                         else if (player2Obj.count < player3Obj.count) {
//                             winner = player2Obj.name;
//                         }
//                         else {
//                             winner = player2Obj.name + ", " + player3Obj.name;
//                         }
//                         loser = player1Obj.name;
//                         break;
//                     case 2:
//                         if (player1Obj.count > player3Obj.count) {
//                             winner = player3Obj.name;
//                         }
//                         else if (player1Obj.count < player3Obj.count) {
//                             winner = player1Obj.name;
//                         }
//                         else {
//                             winner = player1Obj.name + ", " + player3Obj.name;
//                         }
//                         loser = player2Obj.name;
//                         break;
//                     case 3:
//                         if (player1Obj.count > player2Obj.count) {
//                             winner = player2Obj.name;
//                         }
//                         else if (player1Obj.count < player2Obj.count) {
//                             winner = player1Obj.name;
//                         }
//                         else {
//                             winner = player1Obj.name + ", " + player2Obj.name;
//                         }
//                         loser = player3Obj.name;
//                         break;
//                 }
//                 GameOver(winner, loser);
//             }
//             second--;
//         }, 1000);
//     }
//     else if(End){alert("The Game is over! You need to reset Time.");}
// }
// function StopTime() {
//     resume=true;
//     window.removeEventListener("keydown",KeyEvent);
//     clearInterval(timer);
// }
// function ResetTime() {
//     resume=false;
//     second = 60;
//     var backimage=document.getElementById("rightframebackground");
//     backimage.src="..\\image\\mainframe-right.png"
//     var time_counter = document.getElementById("time_counter");
//     var counter = document.getElementById("counter");
//     counter.style.left = "40%";
//     counter.style.top = "7%";
//     time_counter.innerHTML = second + "秒";
//     dialogbox.style.display = "none";
//     dialogoverlay.style.display = "none";
// }
