//Top : -3
//Buttom : 77
//Right : 81
//Left : -5

var speed = 5;
var ghostTop = 40;
var ghostLeft = 40;
var player1Top = 60;
var player1Left = 60;
var player2Top = 20;
var player2Left =  20;
var ghost = new moveGhost();
var player1 = new movePlayer1();
var player2 = new movePlayer2();


window.addEventListener("keydown", function(e){
    // console.log(e.code);
    onKey(e);
});


function onKey(e){
    switch(e.code){
        case "KeyW":
            // if(上邊界 || 右上 || 左上)
            if(ghostTop <= -3 || ( ghostTop <= 24 && ghostLeft > 63) || (ghostTop <= 24 && ghostLeft < 14)){
                break;
            }
            ghost.moveUp();
            break;
        case "KeyS":
            //if( 下邊界 || 左下 || 右下)
            if(ghostTop >= 77 || ( ghostTop >= 50 && ghostLeft < 14) || (ghostTop >= 50 && ghostLeft > 63)){
                break; 
            }
            ghost.moveDown();
            break;
        case "KeyA":
            //if( 左邊界 || 左上 || 左下 )
            if(ghostLeft <= -5 || ( ghostLeft <= 14 && ghostTop < 24) || (ghostLeft <= 14 && ghostTop > 50)){
                break;
            }
            ghost.moveLeft();
            break;
        case "KeyD":
            //if( 又邊界 || 右上 || 右下 )
            if(ghostLeft >= 81 || (ghostLeft >= 63 && ghostTop < 24) || (ghostLeft >= 63 && ghostTop > 50)){
                break; 
            }
            ghost.moveRight();
            break;

        case "ArrowUp" : 
            if( player1Top <= -3){
                break;
            }
            player1.moveUp();
            break;
        case "ArrowDown" : 
            if( player1Top >= 77){
                break;
            }
            player1.moveDown();
            break;
        case "ArrowRight" : 
            if( player1Left >= 81){
                break; 
            }
            player1.moveRight();
            break;
        case "ArrowLeft" : 
            if( player1Left <= -5){
                break;
            }
            player1.moveLeft();
            break;
        case "KeyU" :
            if( player2Top <= -3 ){
                break;
            }
            player2.moveUp();
            break;
        case "KeyJ" :
            if( player2Top >= 77 ){
                break;
            }
            player2.moveDown();
            break;
        case "KeyH" :
            if( player2Left <= -5 ){
                break;
            }
            player2.moveLeft();
            break;
        case "KeyK" :
            if( player2Left >= 81 ){
                break;
            }
            player2.moveRight();
            break;
        default : 
            break;
    }
}


function moveGhost(){
    

    this.moveUp = function(){
        ghostTop = ghostTop - speed;
        document.getElementById('ghost').style['top'] = ghostTop + "%";
        console.log(document.getElementById('ghost').style['top']);
    };

    this.moveDown = function(){
        ghostTop = ghostTop + speed;
        document.getElementById('ghost').style['top'] = ghostTop + "%";
        console.log(document.getElementById('ghost').style['top']);
    }

    this.moveRight = function(){
        ghostLeft = ghostLeft + speed ;
        document.getElementById('ghost').style['left'] = ghostLeft + "%";
        console.log(document.getElementById('ghost').style['left']);
    }

    this.moveLeft = function(){
        ghostLeft = ghostLeft - speed;
        document.getElementById('ghost').style['left'] = ghostLeft + "%";
        console.log(document.getElementById('ghost').style['left']);
    }

}


function movePlayer1(){


    this.moveUp = function(){
        player1Top = player1Top - speed;
        document.getElementById('Player1').style['top'] = player1Top + "%";
    }

    this.moveDown = function(){
        player1Top = player1Top + speed;
        document.getElementById('Player1').style['top'] = player1Top + "%"; 
    }

    this.moveRight = function(){
        player1Left = player1Left + speed;
        document.getElementById('Player1').style['left'] = player1Left + "%";
    }

    this.moveLeft = function(){
        player1Left = player1Left - speed ;
        document.getElementById('Player1').style['left'] = player1Left + "%";
    }

}


function movePlayer2(){


    this.moveUp = function(){
        player2Top = player2Top - speed;
        document.getElementById('Player2').style['top'] = player2Top + "%";
    }

    this.moveDown = function(){
        player2Top = player2Top + speed;
        document.getElementById('Player2').style['top'] = player2Top + "%"; 
    }

    this.moveRight = function(){
        player2Left = player2Left + speed;
        document.getElementById('Player2').style['left'] = player2Left + "%";
    }

    this.moveLeft = function(){
        player2Left = player2Left - speed ;
        document.getElementById('Player2').style['left'] = player2Left + "%";
    }

}