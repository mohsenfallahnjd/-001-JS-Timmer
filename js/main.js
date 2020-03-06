let timer;
let sec = 0;
let min = 0;
let hour = 0;

let start_btn = document.getElementById("start");
let reset_btn = document.getElementById("reset");
let stop_btn = document.getElementById("stop");
let timer_elmment = document.getElementById("timer");

start_btn.addEventListener("click", function() {
  timer = setInterval(timerHandler, 1000);
  reset_btn.disabled = true;
});

stop_btn.addEventListener("click", function() {
  timer = clearInterval(timer);
  reset_btn.disabled = false;
});

reset_btn.addEventListener("click", function() {
  timer = clearInterval(timer);
  reset_btn.disabled = true;
  sec = 0;
  min = 0;
  hour = 0;
  timer_elmment.innerHTML = "00:00:00";
});

function timerHandler() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min == 60) {
    min = 0;
    hour++;
  }

  dispalyTime();
}

function dispalyTime() {
  let hour_pretty = hour;
  let min_pretty = min;
  let sec_pretty = sec;

  if (sec < 10) {
    sec_pretty = "0" + sec;
  }
  if (min < 10) {
    min_pretty = "0" + min;
  }
  if (hour < 10) {
    hour_pretty = "0" + hour;
  }

  timer_elmment.innerHTML = hour_pretty + ":" + min_pretty + ":" + sec_pretty;
}
