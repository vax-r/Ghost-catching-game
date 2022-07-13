const speed: number = 5;
const width: number = 20;
const height: number = 20;

var player1Obj: any = {
    status: 0, count: 0, top: 60, left: 60, name: ""
};
var player2Obj: any = {
    status: 0, count: 0, top: 20, left: 20, name: ""
};
var player3Obj: any = {
    status: 0, count: 0, top: 40, left: 40, name: ""
};



var player1: any;
var player2: any;
var player3: any;
//generate random integer
function getRandomInt(min: any, max: any) : number{
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var Ghost_id: number=0;

function setGhost(): void{
    var player_fig: any = document.getElementById("p"+Ghost_id+"_fig");
    player_fig.innerHTML += "(GHOST)";
    
    switch(Ghost_id){
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

function GameStart(): void{
    //get player name
    var player_name1: any = document.getElementById("player_name1");
    var player_name2: any = document.getElementById("player_name2");
    var player_name3: any = document.getElementById("player_name3");
    var player_fig1: any = document.getElementById("p1_fig");
    var player_fig2: any = document.getElementById("p2_fig");
    var player_fig3: any = document.getElementById("p3_fig");
    player_fig1.innerHTML = player_name1.innerHTML;
    player_fig2.innerHTML = player_name2.innerHTML;
    player_fig3.innerHTML = player_name3.innerHTML;
    player1Obj.name = player_name1.innerHTML;
    player2Obj.name = player_name2.innerHTML;
    player3Obj.name = player_name3.innerHTML;

    Ghost_id = getRandomInt(1,3);
    setGhost();
    window.addEventListener("keydown",function(e){
        onKey(e);
    });

    player1Obj.count=0;
    // player1Obj.top=60;player1Obj.left=60;
    player2Obj.count=0;
    // player2Obj.top=20;player2Obj.left=20;
    player3Obj.count=0;
    // player3Obj.top=40;player3Obj.left=40;
    var doc_count1: any = document.getElementById("player_count1");
    var doc_count2: any = document.getElementById("player_count2");
    var doc_count3: any = document.getElementById("player_count3");
    doc_count1.innerHTML = "Count: 0";
    doc_count2.innerHTML = "Count: 0";
    doc_count3.innerHTML = "Count: 0";
}

// setGhost();

// window.addEventListener("keydown",function(e){
//     onKey(e);
// });

function onKey(e): void{
    switch(e.code){
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

        case "ArrowUp" : 
            player1.moveUp();
            break;
        case "ArrowDown" : 
            player1.moveDown();
            break;
        case "ArrowRight" : 
            player1.moveRight();
            break;
        case "ArrowLeft" : 
            player1.moveLeft();
            break;
        case "KeyU" :
            player2.moveUp();
            break;
        case "KeyJ" :
            player2.moveDown();
            break;
        case "KeyH" :
            player2.moveLeft();
            break;
        case "KeyK" :
            player2.moveRight();
            break;
        default : 
            break;
    }
}

function moveAvatar(avatar_name: string): void{
    var Player: any;
    var avatar: any = document.getElementById(avatar_name);
    var atr_top: number;
    var atr_left: number;
    var next_top: number;
    var next_left: number;
    switch(avatar_name){
        case "Player1":
            Player=player1Obj;
            atr_top=player1Obj.top;
            atr_left=player1Obj.left;
            break;
        case "Player2":
            Player=player2Obj;
            atr_top=player2Obj.top;
            atr_left=player2Obj.left;
            break;
        case "Player3":
            Player=player3Obj;
            atr_top=player3Obj.top;
            atr_left=player3Obj.top;
        default:break;
    }   

    this.moveUp = function(){
        next_top = atr_top - speed;
        if(next_top<=-3){return;}//檢查上邊界
        atr_top = next_top;
        avatar.style.top = atr_top + "%";
        Player.top = atr_top;
        CheckCountAndStatus(avatar_name);
        checkCollision();
    };

    this.moveDown = function(){
        next_top = atr_top + speed;
        if(next_top>=77){return;}//檢查下邊界
        atr_top = next_top;
        avatar.style.top = atr_top + "%";
        Player.top = atr_top;
        CheckCountAndStatus(avatar_name);
        checkCollision();
    }

    this.moveLeft = function(){
        next_left = atr_left - speed;
        if(next_left <= -5){return;}//檢查左邊界
        atr_left = next_left;
        avatar.style.left = atr_left +"%";
        Player.left = atr_left;
        CheckCountAndStatus(avatar_name);
        checkCollision();
    }

    this.moveRight = function(){
        next_left = atr_left + speed;
        if(next_left >= 81){return;}//檢查右邊界
        atr_left = next_left;
        avatar.style.left = atr_left +"%";
        Player.left = atr_left;
        CheckCountAndStatus(avatar_name);
        checkCollision();
    }
}

function moveGhost(avatar_name: string): void{
    var Ghost: any;
    var avatar: any = document.getElementById(avatar_name);
    var atr_top: number;
    var atr_left: number;
    switch(avatar_name){
        case "Player1":
            Ghost=player1Obj;
            atr_top=player1Obj.top;
            atr_left=player1Obj.left;
            break;
        case "Player2":
            Ghost=player2Obj;
            atr_top=player2Obj.top;
            atr_left=player2Obj.left;
            break;
        case "Player3":
            Ghost=player3Obj;
            atr_top=player3Obj.top;
            atr_left=player3Obj.left;
        default:break;
    } 

    var next_top: number;
    var next_left: number;

    this.moveUp = function(){
        next_top = atr_top - speed;
        // if(上邊界 || 右上 || 左上)
        if(next_top <= -3 || (next_top <=24 && atr_left > 63) || (next_top <=24 && atr_left <14)){return;}
        atr_top = next_top;
        avatar.style.top = atr_top + "%";
        Ghost.top = atr_top;
        checkCollision();
    };

    this.moveDown = function(){
        next_top = atr_top + speed;
        if(next_top >= 77 || ( next_top >= 50 && atr_left < 14) || (next_top >= 50 && atr_left > 63)){return;}
        atr_top = next_top;
        avatar.style.top = atr_top + "%";
        Ghost.top = atr_top;
        checkCollision();
    }

    this.moveLeft = function(){
        next_left = atr_left - speed;
        if(next_left <= -5 || ( next_left <= 14 && atr_top < 24) || (next_left <= 14 && atr_top > 50)){return;}
        atr_left = next_left;
        avatar.style.left = atr_left +"%";
        Ghost.left = atr_left;
        checkCollision();
    }

    this.moveRight = function(){
        next_left = atr_left + speed;
        if(next_left >= 81 || (next_left >= 63 && atr_top < 24) || (next_left >= 63 && atr_top > 50)){return;}
        atr_left = next_left;
        avatar.style.left = atr_left +"%";
        Ghost.left = atr_left;
        checkCollision();
    }
}






function CheckCountAndStatus(avatar_name: string): void{

    var Player: any;
    var pid: number=0;
    switch(avatar_name){
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

    var doc_Player: any = document.getElementById(avatar_name);
    var temp: any;

    temp = doc_Player.style.top;
    var playerTop: any = parseInt(temp.slice(0,-1));
    temp = doc_Player.style.left;
    var playerLeft: any = parseInt(temp.slice(0,-1));
    var doc_count: any = document.getElementById("player_count"+pid);

    if(playerTop<24 && playerLeft <14){//進入左上安全區
        if(Player.status==0){
            Player.count++;
            doc_count.innerHTML = "Count: " + Player.count;
        }        
        Player.status=1;
    }
    else if(playerTop<24 && playerLeft>63){//右上
        if(Player.status==0){
            Player.count++;
            doc_count.innerHTML = "Count: " + Player.count;
        }
        Player.status=1;
    }
    else if(playerTop>50 && playerLeft <14){//左下
        if(Player.status==0){
            Player.count++;
            doc_count.innerHTML = "Count: " + Player.count;
        }
        Player.status=1;
    }
    else if(playerTop>50 && playerLeft >63){//右下
        if(Player.status==0){
            Player.count++;
            doc_count.innerHTML = "Count: " + Player.count;
        }
        Player.status=1;
    }
    else{
        //leave safe area
        Player.status=0;
    }
}

function checkCollision(): void{
    var Ghost: any;
    switch(Ghost_id){
        case 1:
            Ghost = player1Obj;
            //Ghost and player2
            if((Ghost.left == player2Obj.left+width && Math.abs(Ghost.top-player2Obj.top)<height) || 
                (Ghost.left + width == player2Obj.left && Math.abs(Ghost.top-player2Obj.top)<height)||
                (Ghost.top + height == player2Obj.top && Math.abs(Ghost.left-player2Obj.left)<width)||
                (Ghost.top == player2Obj.top + height && Math.abs(Ghost.left-player2Obj.left)<width))
                {
                    GameOver(Ghost.name, player2Obj.name);
            }
            //Ghost and player3
            else if((Ghost.left == player3Obj.left+width && Math.abs(Ghost.top-player3Obj.top)<height)||
                (Ghost.left + width == player3Obj.left && Math.abs(Ghost.top-player3Obj.top)<height)||
                (Ghost.top + height == player3Obj.top && Math.abs(Ghost.left-player3Obj.left)<width)||
                (Ghost.top == player3Obj.top + height && Math.abs(Ghost.left-player3Obj.left)<width)){
                    GameOver(Ghost.name, player3Obj.name);
            }
            break;
        case 2:
            Ghost = player2Obj;
            //Ghost and player1
            if((Ghost.left == player1Obj.left+width && Math.abs(Ghost.top-player1Obj.top)<height)||
                (Ghost.left + width == player1Obj.left && Math.abs(Ghost.top-player1Obj.top)<height)||
                (Ghost.top + height == player1Obj.top && Math.abs(Ghost.left-player1Obj.left)<width)||
                (Ghost.top == player1Obj.top + height && Math.abs(Ghost.left-player1Obj.left)<width)){
                    GameOver(Ghost.name, player1Obj.name);
            }
            //Ghost and player3
            else if((Ghost.left == player3Obj.left+width && Math.abs(Ghost.top-player3Obj.top)<height)||
                (Ghost.left + width == player3Obj.left && Math.abs(Ghost.top-player3Obj.top)<height)||
                (Ghost.top + height == player3Obj.top && Math.abs(Ghost.left-player3Obj.left)<width)||
                (Ghost.top == player3Obj.top + height && Math.abs(Ghost.left-player3Obj.left)<width)){
                    GameOver(Ghost.name, player3Obj.name);
            }
            break;
        case 3:
            Ghost = player3Obj;
            //Ghost and player2
            if((Ghost.left == player2Obj.left+width && Math.abs(Ghost.top-player2Obj.top)<height)||
                (Ghost.left + width == player2Obj.left && Math.abs(Ghost.top-player2Obj.top)<height)||
                (Ghost.top + height == player2Obj.top && Math.abs(Ghost.left-player2Obj.left)<width)||
                (Ghost.top == player2Obj.top + height && Math.abs(Ghost.left-player2Obj.left)<width)){
                    GameOver(Ghost.name, player2Obj.name);
            }
            //Ghost and player1
            else if((Ghost.left == player1Obj.left+width && Math.abs(Ghost.top-player1Obj.top)<height)||
                (Ghost.left + width == player1Obj.left && Math.abs(Ghost.top-player1Obj.top)<height)||
                (Ghost.top + height == player1Obj.top && Math.abs(Ghost.left-player1Obj.left)<width)||
                (Ghost.top == player1Obj.top + height && Math.abs(Ghost.left-player1Obj.left)<width)){
                    GameOver(Ghost.name, player1Obj.name);
            }
            break;
    }
}

function GameOver(winner: string, loser: string): void{ 
    var time_counter: any = document.getElementById("time_counter");
    var counter: any = document.getElementById("counter");
    counter.style.left="23%";
    counter.style.top="8%";
    time_counter.innerHTML = "Game Over!";
    window.removeEventListener("keydown",function(e){
        onKey(e);
    });
    StopTime();
    //TODO: 彈出結束視窗，winner和loser已經用參數傳入了
}


//Counter
var second: number =60;
var timer: any = null;

function startCounDown(): void{
    var background: any = document.getElementById("leftbackground");
    background.src="../image/mainframe-clock3.png";
    var time_counter: any = document.getElementById("time_counter");
    time_counter.style.display="block";
    timer = setInterval(function(){
        time_counter.innerHTML = second + "秒";
        if(second==0){
            var winner: string="", loser: string="";
            switch(Ghost_id){
                case 1:
                    if(player2Obj.count>player3Obj.count){winner=player3Obj.name;}
                    else if(player2Obj.count<player3Obj.count){winner=player2Obj.name;}
                    else{winner=player2Obj.name+", "+player3Obj.name;}
                    loser = player1Obj.name;
                    break;
                case 2:
                    if(player1Obj.count>player3Obj.count){winner=player3Obj.name;}
                    else if(player1Obj.count<player3Obj.count){winner=player1Obj.name;}
                    else{winner=player1Obj.name+", "+player3Obj.name;}
                    loser = player2Obj.name;
                    break;
                case 3:
                    if(player1Obj.count>player2Obj.count){winner=player2Obj.name;}
                    else if(player1Obj.count<player2Obj.count){winner=player1Obj.name;}
                    else{winner=player1Obj.name+", "+player2Obj.name;}
                    loser = player3Obj.name;
                    break;
            }
            GameOver(winner,loser);
        }
        second--;
    },1000);
}

function StopTime(){
    clearInterval(timer);
}

function ResetTime(){
    second=60;
    var time_counter: any = document.getElementById("time_counter");
    var counter: any = document.getElementById("counter");
    counter.style.left = "40%";
    counter.style.top="7%";
    time_counter.innerHTML = second +"秒";
}