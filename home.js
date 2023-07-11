function clicked(){
    location.href = "home.html"
}
let audioElement = new Audio("Music/Manike Mage Hithe.mp3")
let bottom_play = document.getElementById("bottom_play");
// bottom_play.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime == 0)
//         audioElement.play();
//     let pause = document.createElement('img');
//     pause.src = "pause.jpeg";
//     let pause_img = document.getElementById('pause_img');
//     pause_img.appendChild(pause);
//     bottom_play.style.display = 'none';
//     pause.style.height = '20px';
//     pause.style.width = '20px';
// })

let pause_img = document.getElementById('pause_img');
let pause = document.createElement('img');
let range = document.getElementById('range');
pause.src="pause.jpeg";
pause.style.height = '23px';
pause.style.width = '21px';
bottom_play.addEventListener('click',()=>{
     audioElement.play();
     pause_img.appendChild(pause);
     bottom_play.style.display = "none";
     pause.style.display = "block";
})
pause_img.addEventListener('click',()=>{
    audioElement.pause();
    pause.style.display = 'none';
    bottom_play.style.display = 'block';
})

audioElement.addEventListener('timeupdate',()=>{
    let progess = parseInt((audioElement.currentTime/audioElement.duration)*100);
    range.value = progess;
})

range.addEventListener('change',()=>{
    audioElement.currentTime = (range.value*audioElement.duration)/100;
})

let song_index = 0;
let songs=[
    'Music/Manike Mage Hithe.mp3','Music/Pal.mp3',
    'Music/Choo lo.mp3',
     'Music/Kabhii Tumhhe.mp3',
     'Music/Tum hi ho.mp3',
     'Music/Night-Changes.mp3',
     'Music/My Heart Will Go On.mp3',
     'Music/Despacito.mp3',
]
let song=document.querySelectorAll('.song')
for(let i = 0; i < song.length; i++){
    song[i].addEventListener('click',()=>{
        song_index = i;
        audioElement.src = songs[song_index];
        audioElement.currentTime = 0;
        audioElement.play();
    })
}

let next = document.getElementById("next");
let prev = document.getElementById("prev");
next.addEventListener('click',()=>{
    if(song_index >= songs.length)
         song_index = 0;
    else
        song_index+=1;
        audioElement.src = songs[song_index]
        audioElement.currentTime = 0;
        audioElement.play();
        if(song_index > songs.length){
            song[songs.length-1].style.background='rgb(65, 64, 64)'//normal
            song[song_index].style.background='rgb(41, 41, 41)'//selected colour 
        }
        else{
            song[song_index].style.background='rgb(41, 41, 41)'
            song[song_index-1].style.background='rgb(65, 64, 64)'
        }
        // pause.src="pause.png";
        pause_img.appendChild(pause);
        bottom_play.style.display = "none";
        pause.style.display = "block";
})
prev.addEventListener('click',()=>{
    if(song_index<0){
        song_index=songs.length-1
    }

    else
       song_index-=1;

    audioElement.src=songs[song_index]
    audioElement.currentTime=0
    audioElement.play() 

})

