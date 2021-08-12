const bgmBtn = document.querySelector(".bgm__btn");
const bgmIcon = document.querySelector("#bgm_icon");

const PLAY_ICON = "fa-play-circle";
const PAUSE_ICON = "fa-pause-circle";

let bgmPlaying = false;
const bgm = new Audio("bgm/todo_bgm.mp3"); //Audio 객체 생성

function bgmPlay() {
    if (bgmPlaying == false) { //만약 재생 중 아니면
        bgmPlaying = true;
        bgm.play(); //재생

        bgmIcon.classList.remove(PLAY_ICON);
        bgmIcon.classList.add(PAUSE_ICON);
    } else {
        bgmPlaying = false;
        bgm.pause(); //일시정지

        bgmIcon.classList.add(PLAY_ICON);
        bgmIcon.classList.remove(PAUSE_ICON);
    }
}

bgmBtn.addEventListener('click', bgmPlay);