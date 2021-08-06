const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-input");
const greeting = document.querySelector("#greeting");
const greetingName = document.querySelector("#greeting__name-name");

const HIDDEN_CLASSNAME = "hidden";
const LOCAL_KEY = "USERNAME_KEY";

function paintGreeting(username) {
    greetingName.innerText = `HELLO, ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

function LoginBtn(event) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(LOCAL_KEY, username); //localStorage에 userkey값 저장
    paintGreeting(username);
}

const savedUserName = localStorage.getItem(LOCAL_KEY);

if (savedUserName == null) { //로컬값 존재하지 않으면
    loginForm.classList.remove(HIDDEN_CLASSNAME);

    loginForm.addEventListener('submit', LoginBtn);
} else {
    paintGreeting(savedUserName);
}