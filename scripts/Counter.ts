var second: number =60;
var timer: any = null;

function startCounDown(): void{
    var background: any = document.getElementById("leftbackground");
    background.src="../image/mainframe-clock3.png";
    var time_counter: any = document.getElementById("time_counter");
    time_counter.style.display="block";
    timer = setInterval(function(){
        if(time_counter.innerHTML=="Ghost Win!" || time_counter.innerHTML=="Players Win!"){//collision event
            StopTime();
            return;
        }
        time_counter.innerHTML = second + "秒";
        if(second==0){
            var counter: any = document.getElementById("counter");
            counter.style.left="23%";
            counter.style.top="8%";
            time_counter.innerHTML = "Players Win!";
            // window.removeEventListener("keydown",function(e){
            //     onKey(e);
            // });
            StopTime();
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