// media controllers
const playPause = document.querySelector("#play-stop");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");

// record player animation
const circleBig = document.querySelector("#circle-bg");
const circleSm = document.querySelector("#circle-sm");

// playing song
const songName = document.querySelector("#song-name");
const audio = document.querySelector("#audio");
const coverArt = document.querySelector("#cover");
const musicbox = document.querySelector("#musicbox");

// control button images
let playImg = "play.svg";
let pauseImg = "pause.svg";

// default controls
playPause.src = playImg;
let isPlaying = true;

const songList = [
    {
        name: "Cormac - Snowfall",
        source: "https://github.com/ars-lang/lofiplayer/raw/main/%20cormac%20%20snowfall.mp3",
        cover: "https://i1.sndcdn.com/artworks-000200612909-f1rd47-t500x500.jpg"
    },
    {
        name: "Limes - Never Knew",
        source: "https://github.com/ars-lang/lofiplayer/raw/main/limes%20never%20knew.mp3",
        cover: "limesneverknewphoto.png"
    },
    {
        name: "Ibrahim - Lovely Whisper",
        source: "https://github.com/ars-lang/lofiplayer/raw/main/y2meta.com%20-%20ibrahim%20-%20lovely%20whisper%20(_w%20Waifu%20Avenue)%20(128%20kbps).mp3",
        cover: "ibrahim.png"
    },
    {
        name: "Slow Day",
        source: "Slow Day.mp3",
        cover: "chillhop-4.jpg"
    },
    {
        name: "Carti Mangolia",
        source: "Carti mangolia.mp3",
        cover: "chillhop-2.jpg"
    }
];
// helper function
function createEle(ele) {
    return document.createElement(ele);
}
function append(parent, child) {
    return parent.append(child);
}
// creating track list
const ul = createEle('ul')
function createPlayList() {
    songList.forEach((song) => {
        let h3 = createEle('h3');
        let li = createEle('li');

        li.classList.add("track-item");
        h3.innerText = song.name;
        append(li,h3);
        append(ul,li)
    })
    append(musicbox, ul);
}

let songIndex = 0;
// preloaded song
loadMusic(songList[songIndex]);


function loadMusic() {
    coverArt.src = songList[songIndex].cover;
    songName.innerText = songList[songIndex].name;
    audio.src = songList[songIndex].source;
}

function playSong() {
    playPause.src = pauseImg;
    circleBig.classList.add("animate");
    circleSm.classList.add("animate");

    audio.play();
}

function pauseSong() {
    playPause.src = playImg;
    circleBig.classList.remove("animate");
    circleSm.classList.remove("animate");

    audio.pause();
}

function nextPlay() {
    songIndex++;
    if(songIndex > songList.length - 1) {
        songIndex = 0;
    }
    loadMusic(songList[songIndex]);
    playSong()
}

function backPlay() {
    songIndex--;
    if(songIndex < 0) {
        songIndex = songList.length - 1;
    }
    loadMusic(songList[songIndex]);
    playSong()
}
function playHandler() {
    isPlaying = !isPlaying;
    //console.log("Change: ",isPlaying)
    isPlaying ? pauseSong() : playSong();
}


// player event 
playPause.addEventListener("click", playHandler);
backward.addEventListener("click", backPlay);
forward.addEventListener("click", nextPlay);

createPlayList()
