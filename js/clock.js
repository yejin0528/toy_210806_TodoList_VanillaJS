const date = document.querySelector("#date");
const clock = document.querySelector("#clock");
const hello = document.querySelector(".hello");

function getDate() {
    const today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const year = String(today.getFullYear());
    const strMon = monthNames[today.getMonth()]; //getMonth() : 0부터 시작, 1월이 0
    const day = String(today.getDay());

    date.innerText = `${strMon} ${day}, ${year}`;
}

function getClock() {
    const today = new Date();

    const hour = String(today.getHours()).padStart(2, "0");
    const min = String(today.getMinutes()).padStart(2, "0");
    const sec = String(today.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${min}:${sec}`;
}

function getHello() {
    const today = new Date();
    const hour = parseInt(today.getHours());

    if (hour > 6 && hour < 12) { //6~11시이면
        hello.innerText = "Good Morning, ";
    } else if (hour < 20) {  //12~19시이면
        hello.innerText = "Good afternoon, ";
    } else {
        hello.innerText = "Good night, ";
    }
}

getHello();
getDate();
getClock();
setInterval(getClock, 1000);