const displayTime = document.querySelector(".displaytime");

let [seconds, minutes, hours] = [0,0,0];
timer = null;



function startWatch(){
    seconds++;
    if(seconds === 60){
        minutes++;
        seconds=0;
        if(minutes === 60){
            minutes= 0;
            hours++;
        }
    }
    
    

    

    let s= seconds < 10 ? `0${seconds}` : seconds;
    let m = minutes < 10 ? `0${minutes}` : minutes;
    let h = hours < 10 ? `0${hours}` : hours;

    displayTime.innerHTML = `${h}:${m}:${s}`;

    watchIncrease();
}

function watchIncrease(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(startWatch, 1000)
}





function pauseTimer(){
    clearInterval(timer)
}






function resetTimer(){
    clearInterval(timer);
    timer = null;
    let [seconds, minutes, hours] = [0,0,0];
    displayTime.innerHTML = `00:00:00`;
}
