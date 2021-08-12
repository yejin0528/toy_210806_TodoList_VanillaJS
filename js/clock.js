const date = document.querySelector("#date");
const clock = document.querySelector("#clock");

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
getDate();
getClock();
setInterval(getClock, 1000);