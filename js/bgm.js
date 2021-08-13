const bgmBtn = document.querySelector(".bgm__btn");

let bgmPlaying = false;
const bgm = new Audio("bgm/todo_bgm.mp3"); //Audio 객체 생성

function bgmPlay() {
    if (bgmPlaying == false) { //만약 재생 중 아니면
        bgmPlaying = true;
        bgm.play(); //재생
        bgmBtn.innerHTML = '<i id="bgm__icon" class="far fa-pause-circle"></i>'; //icon 변경

    } else {
        bgmPlaying = false;
        bgm.pause(); //일시정지
        bgmBtn.innerHTML = '<i id="bgm__icon" class="far fa-play-circle"></i>';
    }
}

bgmBtn.addEventListener('click', bgmPlay);