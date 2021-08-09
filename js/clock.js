const date = document.querySelector("#date");
const clock = document.querySelector("#clock");

function getDate() {
    const today = new Date();

    const year = String(today.getFullYear());
    const month = String(today.getMonth());
    const day = String(today.getDay());

    date.innerText = `${year}/${month}/${day}`;
}

function getClock() {
    const today = new Date();

    const hour = String(today.getHours()).padStart(2, "0");
    const min = String(today.getMinutes()).padStart(2, "0");
    const sec = String(today.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour}:${min}:${sec}`;
}
//getDate();
getClock();
setInterval(getClock, 1000);