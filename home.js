function clicked(){
    location.href = "home.html"
}
let audioElement = new Audio("Music/Manike Mage Hithe.mp3")
let bottom_play = document.getElementById("bottom_play");
bottom_play.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime == 0)
        audioElement.play();
    let pause = document.createElement('img');
    pause.src = "pause.jpeg";
    let pause_img = document.getElementById('pause_img');
    pause_img.appendChild(pause);
    bottom_play.style.display = 'none';
    pause.style.height = '20px';
    pause.style.width = '20px';
})