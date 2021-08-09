const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");
const greetingName = document.querySelector("#greeting__name-name");
const logoutBtn = document.querySelector("#logout-btn");

const HIDDEN_CLASSNAME = "hidden";
const LOCAL_KEY = "USERNAME_KEY";

function paintGreeting(username) {
    greetingName.innerText = `HELLO, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    logoutBtn.addEventListener('click', onLogoutBtn);
}

function onLoginBtn(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(LOCAL_KEY, username); //localStorage에 userkey값 저장
    paintGreeting(username);
}

function onLogoutBtn() {
    localStorage.removeItem(LOCAL_KEY);  //localStorage userkey값 삭제
    checkUserName();
}

function checkUserName() {
    const savedUserName = localStorage.getItem(LOCAL_KEY);

    if (savedUserName == null) { //로컬값 존재하지 않으면
        loginInput.value = "";
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        greeting.classList.add(HIDDEN_CLASSNAME);
        loginForm.addEventListener('submit', onLoginBtn);
    } else {
        paintGreeting(savedUserName);
    }
}

checkUserName();