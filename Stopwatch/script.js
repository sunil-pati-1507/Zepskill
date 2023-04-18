var hr = 0;
var min = 0;
var sec = 0;
var cenSec = 0;

var timer = false;

function start(){
    timer = true;
    stopwatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    cenSec = 0;

    document.getElementById('hr').innerHTML = '0' + hr;
    document.getElementById('min').innerHTML = '0' + min;
    document.getElementById('sec').innerHTML = '0' + sec;
    document.getElementById('cen-sec').innerHTML = '0' + cenSec;
}

function stopwatch(){
    setTimeout(() => {
        if(timer){
            cenSec += 1;

            if(cenSec == 100){
                cenSec = 0;
                sec += 1;
            }

            if(sec == 60){
                sec = 0;
                min += 1;
            }

            if(min == 60){
                min = 0;
                hr += 1;
            }

            document.getElementById('hr').innerHTML = hr<10 ? '0' + hr : hr;
            document.getElementById('min').innerHTML = min<10 ? '0' + min : min;
            document.getElementById('sec').innerHTML = sec<10 ? '0' + sec : sec;
            document.getElementById('cen-sec').innerHTML = cenSec<10 ? '0' + cenSec : cenSec;

            stopwatch();
        }

    }, 10);
}