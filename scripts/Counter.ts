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
            var counter: any = document.getElementById("counter");
            counter.style.left="23%";
            counter.style.top="8%";
            time_counter.innerHTML = "Game Over";
            StopTime();
        }
        second--;
    },1000);
}

function StopTime(){
    clearInterval(timer);
}

function ResetTime(){
    var counter: any = document.getElementById("time_counter");
    counter.innerHTML = "60秒";
    second=60;
}