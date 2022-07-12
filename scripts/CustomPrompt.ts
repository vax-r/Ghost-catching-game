

function changeName_One(val: string): void{
    var player_name: any = document.getElementById("player_name1");
    player_name.innerHTML = val;
}

function changeName_Two(val: string): void{
    var player_name: any = document.getElementById("player_name2");
    player_name.innerHTML = val;
}

function changeName_Three(val: string): void{
    var player_name: any = document.getElementById("player_name3");
    player_name.innerHTML = val;
}


function CustomPrompt(): void{
    var dialogoverlay: any = document.getElementById("dialogoverlay");
    var dialogbox: any = document.getElementById("dialogbox");
    this.render = function(dialog: string, func: string,id: number,src:string){
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.left = (winW / 2) - (550 * 0.5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        var putstring=
        '<p class="name" id="title" >A value is required</p>'+
        '<div id=imageplayerdiv><img id=imageplayer src='+src+'></div>'+
        dialog+
        '<div id=inputdiv><input id="input" name="func"></div>'+
        '<button id=buttonplayer onclick="Prompt.ok(\'' + func + '\',\'' + id + '\')">OK</button>';
        dialogbox.innerHTML = putstring;
    }

    this.ok = function(func: string, id: number){
        var prompt_value1: any = document.getElementById("input");
        prompt_value1 = prompt_value1.value;
        if(prompt_value1===""){prompt_value1="Player "+id;}
        window[func](prompt_value1);
        dialogbox.style.display = "none";
        dialogoverlay.style.display = "none";
        if (id == 1) {
            this.render('<p class="name" id="typename">Type a name for Player 2:</p>', 'changeName_Two', 2,"..//image//introprivate.png");
        }
        else if (id == 2) {
            this.render('<p class="name" id="typename">Type a name for Player 3:</p>', 'changeName_Three', 3,"..//image//intrograndmother.png");
        }
    }
}

var Prompt: any = new CustomPrompt();

function CustomConfirm(): void{
    var dialogoverlay: any = document.getElementById("dialogoverlay");
    var dialogbox: any = document.getElementById("dialogbox");
    this.render = function(): void{
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.left = (winW / 2) - (550 * 0.5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.height=winH/2-52+"px";
        dialogbox.style.display = "block";
        dialogbox.innerHTML = "<p id='introductinotitle'>鬼抓人遊戲規則</p><br><p id='rule'>三個玩家，隨機選一位當鬼<br>遊戲時間1分鐘<br>如果在遊戲時間內，鬼抓到任何一個玩家就算鬼贏，反之則是玩家贏</p><button id='button' onclick='Confirm.yes()'>Confirm</button>";
    }

    this.yes = function(): void{
        var id: number = 1;
        Prompt.render('<p class="name" id="typename">Type a name for Player 1:</p>', 'changeName_One', id,"..//image//introredhat.png");
    }

}

var Confirm: any = new CustomConfirm();