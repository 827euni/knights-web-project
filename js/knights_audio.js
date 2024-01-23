const music = document.querySelector(".music_button")
const audio = document.querySelector('audio')

music.addEventListener('click', ()=>{
    if (audio.paused) {
        audio.play();
    }

    else {
        audio.pause();
    }
})