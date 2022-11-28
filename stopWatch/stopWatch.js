const watch = document.getElementsByClassName('watch')[0];
const start = document.getElementsByClassName('start')[0];
const stop = document.getElementsByClassName('stop')[0];
const contain = document.getElementsByClassName('continue')[0];
const restart = document.getElementsByClassName('restart')[0];
let id;
let seconds = 0;
let minutes = 0;
let hours = 0;

const watchFunction = () =>{
    seconds +=1;
    if (seconds === 60) {
        minutes +=1;
        seconds = 0;
        if (minutes === 60) {
            hours +=1;
            minutes = 0;
        }
    }
    let hourText = hours < 10 ? "0" + hours.toString() : hours;
    let minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    let secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
    watch.textContent = hourText + ":" + minuteText + ":" + secondText;
}

start.addEventListener('click' , () =>{
    id = setInterval(watchFunction , 1000);
});
stop.addEventListener('click' , () =>{
    clearInterval(id);
});
contain.addEventListener('click' , () => {
    clearInterval(id);
    id = setInterval(watchFunction , 1000);
});
restart.addEventListener('click' , () => {
    clearInterval(id);
    seconds = 0;
    minutes = 0;
    hours = 0;
    id = setInterval(watchFunction , 1000);
});