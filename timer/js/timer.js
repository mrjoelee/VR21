let timerId;
let counter = 0;

const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

stopBtn.style.display = "none";
resetBtn.style.display = "none";

function incrementTime(){
    counter++;
    document.querySelector("#count").innerText = counter;
    
}

function start(){
    stopBtn.style.display = "inline-block";
    resetBtn.style.display = "inline-block";
    startBtn.style.display="none";
    if(!timerId){
        timerId = setInterval(incrementTime, 1000);
    }
}

function stop(){
    stopBtn.style.display = "none";
    startBtn.style.display="inline-block";
    resetBtn.style.display = "none";
    clearInterval(timerId);
    timerId = null;
}

function reset(){
    stopBtn.style.display = "none";
    startBtn.style.display="inline-block";
    resetBtn.style.display = "none";
    clearInterval(timerId);
    timerId = null;
    counter = 0;
    document.querySelector("#count").innerText = "-";
    
}