//intialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songItem = Array.from(document.getElementsByClassName('songItem'));
let timestamp = document.getElementsByClassName('timestamp')
let songInfo = document.getElementsByClassName('songInfo')
let masterSongName = document.getElementById('masterSongName')
let songItemPlay = document.getElementsByClassName('songItemPlay')
let songs = [
    { songName: "Tokyo Drift", filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: "Baller- Shubh", filePath: "2.mp3", coverPath: "baller.jpg" },
    { songName: "Dhundhala- artist", filePath: "3.mp3", coverPath: "Dhundhala.jpg" },
    { songName: "Rao Sahab Drill- Vicky", filePath: "4.mp3", coverPath: "rao.jpg" },
    { songName: "Sadi Gali Aaja sanu- Ayushman Khurana", filePath: "5.mp3", coverPath: "Sadi Gali Aaja Ten.webp" },
    { songName: "System pe sytem- artist", filePath: "6.mp3", coverPath: "system.jpg" },
    { songName: "Yadav Brand 2- artist", filePath: "7.mp3", coverPath: "yadav.jpg" },


]

songItem.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].songName;
})







// audioElement.play();
//handle play/pause
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1
        audioElement.play();
    }
    else {
        audioElement.pause();
        gif.style.opacity = 0
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `${songIndex}.mp3`
        masterSongName.innerText = songs[songIndex - 1].songName
        gif.style.opacity = 1
        audioElement.currentTime = 0
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 7) {
        songIndex = 0;
    }
    else {
        songIndex += 1
    }
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    audioElement.src = `${songIndex}.mp3`
    audioElement.play();
    masterSongName.innerText = songs[songIndex - 1].songName
    gif.style.opacity = 1
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1
    }
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    audioElement.src = `${songIndex}.mp3`
    audioElement.play();
    masterSongName.innerText = songs[songIndex - 1].songName
    gif.style.opacity = 1
})



