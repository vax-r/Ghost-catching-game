

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
    var dialogboxhead: any = document.getElementById("dialogboxhead");
    var dialogboxbody: any = document.getElementById("dialogboxbody");
    var dialogboxfoot: any = document.getElementById("dialogboxfoot");
    this.render = function(dialog: string, func: string,id: number){
        var winW: number = window.innerWidth;
        var winH: number = window.innerHeight;
        dialogoverlay.style.display = "block"
        dialogoverlay.style.height = winH+"px";
        dialogbox.style.left = (winW/2)-(550*0.5)+"px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        dialogboxhead.innerHTML = dialog;
        dialogboxbody.innerHTML = '<input id="prompt_value1">';
        dialogboxfoot.innerHTML = '<button onclick="Prompt.ok(\''+func+'\',\''+id+'\')">OK</button>';
    }

    this.ok = function(func: string, id: number){
        console.log(id);
        var prompt_value1: any = document.getElementById("prompt_value1");
        prompt_value1 = prompt_value1.value;
        window[func](prompt_value1);
        dialogbox.style.display = "none";
        dialogoverlay.style.display = "none";
        if(id==1){
            this.render('Type a name for Player 2: ','changeName_Two',2);
        }
        else if(id==2){
            this.render('Type a name for Player 3: ','changeName_Three',3);
        }
    }
}

var Prompt: any = new CustomPrompt();

function CustomConfirm(): void{
    var dialogoverlay: any = document.getElementById("dialogoverlay");
    var dialogbox: any = document.getElementById("dialogbox");
    var dialogboxhead: any = document.getElementById("dialogboxhead");
    var dialogboxbody: any = document.getElementById("dialogboxbody");
    var dialogboxfoot: any = document.getElementById("dialogboxfoot");
    
    this.render = function(): void{
        var winW: number = window.innerWidth;
        var winH: number = window.innerHeight;
        dialogoverlay.style.display="block";
        dialogoverlay.style.height=winH+"px";
        dialogbox.style.left = (winW/2)-(550*0.5)+"px";
        dialogbox.style.top="100px";
        dialogbox.style.display="block";
        dialogboxhead.innerHTML="鬼抓人遊戲規則";
        dialogboxhead.style.textalign="center";
        dialogboxbody.innerHTML="三個玩家，隨機選一位當鬼<br>遊戲時間1分鐘<br>如果在遊戲時間內，鬼抓到任何一個玩家就算鬼贏，反之則是玩家贏<br>";
        dialogboxfoot.innerHTML='<button onclick="Confirm.yes()">Confirm</button>';
    }

    this.yes = function(): void{
        var id: number = 1;
        Prompt.render('Type a name for Player 1: ','changeName_One',id);
    }

}

var Confirm: any = new CustomConfirm();