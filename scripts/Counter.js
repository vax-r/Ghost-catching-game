var second = 60;
var timer = null;
function startCounDown() {
    var background = document.getElementById("leftbackground");
    background.src = "../image/mainframe-clock3.png";
    var time_counter = document.getElementById("time_counter");
    time_counter.style.display = "block";
    timer = setInterval(function () {
        time_counter.innerHTML = second + "秒";
        if (second == 0) {
            var counter = document.getElementById("counter");
            counter.style.left = "23%";
            counter.style.top = "8%";
            time_counter.innerHTML = "Game Over";
            StopTime();
        }
        second--;
    }, 1000);
}
function StopTime() {
    clearInterval(timer);
}
function ResetTime() {
    second = 60;
    var time_counter = document.getElementById("time_counter");
    var counter = document.getElementById("counter");
    counter.style.left = "40%";
    counter.style.top = "7%";
    time_counter.innerHTML = second + "秒";
}
