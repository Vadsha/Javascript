const bodyTag = document.getElementsByTagName('body')[0];
const darkMode = document.getElementsByClassName('darkMode')[0];
const progressBar = document.getElementsByClassName('progressBar')[0];
const musicPlayer = document.getElementsByClassName('musicPlayer')[0];
const hTag = document.getElementsByTagName('h1')[0];
const timeTag = document.getElementsByClassName('time')[0];
const songList = document.getElementsByClassName('songList')[0];
const darkModeAudio = document.getElementsByClassName('darkModeAudio')[0];

                         //DarkMode
let darkmode = false;
const colorChanging = (color) =>{
     musicPlayer.style.color = color;
     hTag.style.color = color;
     timeTag.style.color = color;
     songList.style.color = color;
}
if (localStorage.getItem('darkMode')  == "true") {
     bodyTag.style.backgroundColor = '#303030';
     progressBar.style.backgroundColor = "white";
     colorChanging('gold');
     darkmode = true;
}
darkMode.addEventListener('click' , () =>{
     if (darkmode == true) {
          localStorage.setItem('darkMode' , "false");
          bodyTag.style.backgroundColor = "white";
          progressBar.style.backgroundColor = "gray";
          colorChanging('black');
          darkModeAudio.src = 'music/mixkit-arcade-game-jump-coin-216.wav';
          darkModeAudio.play();
          darkmode = false;
     }
     else{
          localStorage.setItem('darkMode' , 'true');
          bodyTag.style.backgroundColor = "#303030";
          progressBar.style.backgroundColor = "white";
          colorChanging('gold');
          darkModeAudio.src = 'music/mixkit-arcade-game-jump-coin-216.wav';
          darkModeAudio.play();
          darkmode = true;
     }
})

const audioTag = document.getElementsByTagName('audio')[0];
const playButton = document.getElementsByClassName('playButton')[0];
const pauseButton = document.getElementsByClassName('pauseButton')[0];
const previousButton = document.getElementsByClassName('previousButton')[0];
const nextButton = document.getElementsByClassName('nextButton')[0];
const progressWidth = document.getElementById('progressWidth');
let playing = false;

const songs = [
     {source : 'music/Post_Malone_Better_Now.mp3' , name: 'Better Now'},
     {source : 'music/Post_Malone_Circles.mp3', name : 'Circles'},
     {source : 'music/Post_Malone_Sunflower.mp3', name : 'Sunflower'},
     {source : 'music/Post_Malone_Goodbyes.mp3', name : 'Goodbyes'},
     {source : 'music/One_Direction_Night_Changes.mp3', name : 'Night Changes'},
     {source : 'music/One_Direction_What_Makes_You_Beautiful.mp3', name : 'What Makes You Beautiful'},
     {source : 'music/One_Direction_You_I.mp3', name : 'You & I'},

];

let songToPlay = 0;
for (let i = 0; i < songs.length; i++) {
     let songSource = songs[i].source;
     let songName = (i+1).toString() + ". " + songs[i].name;
     const list = document.createElement('div');
     list.classList.add('list');
     list.append(songName);
     const parentList = document.createElement('div');
     parentList.classList.add('parentList');
     parentList.append(list);
     songList.append(parentList);
     list.addEventListener('click' ,()=>{
          audioTag.src = songSource;
          audioTag.play();
          playing = true;
          songToPlay = i;
     })


}
let duration = 0;
let totalDuration = "00:00";
audioTag.addEventListener('loadeddata' , () =>{             //Showing Total Duration
     duration = Math.floor(audioTag.duration);
     totalDuration = timeFunction(duration);

})

audioTag.addEventListener('timeupdate' ,() => {             //Showing currrent time
     const timeUpdate = Math.floor(audioTag.currentTime);
     const ongoing = timeFunction(timeUpdate);
     timeTag.textContent = ongoing + ' / ' + totalDuration;
     updateProgessBar(timeUpdate);
})

const timeFunction = (para) => {
     const minute = Math.floor(para / 60);
     const second = para % 60;
     const totalminute = minute < 10 ? "0" + minute.toString() : minute;
     const totalSecond = second < 10 ? "0" + second.toString() : second;
     return totalminute + " : " + totalSecond;
     
}

const updateProgessBar = (timeUpdate) => {                  //Progress bar update
     const progressBarWidth = (450 / duration) * timeUpdate;
     progressWidth.style.width = progressBarWidth.toString() + "px";
}

playButton.addEventListener('click' , () => {
     const currentTime = Math.floor(audioTag.currentTime);
     playing = true;
     if (currentTime == 0) {
          const songIdToPlay = songs[songToPlay].source;
          audioTag.src = songIdToPlay;
          audioTag.play();
     }
     else{
          audioTag.play();
     }
})

pauseButton.addEventListener('click' , () => {
     playing = false;
     audioTag.pause();
})

previousButton.addEventListener('click' , () => {
     if (songToPlay == 0) {
          return;
     }
     songToPlay -= 1;
     const previousSong = songs[songToPlay].source;
     audioTag.src = previousSong;
     audioTag.play();
     playing = true;
})
nextButton.addEventListener('click' , () => {
     if (songToPlay == songs.length -1) {
          return;
     }
     songToPlay += 1;
     const previousSong = songs[songToPlay].source;
     audioTag.src = previousSong;
     audioTag.play();
     playing = true;
})