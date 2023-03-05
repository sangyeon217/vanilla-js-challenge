const loginDiv = document.querySelector("#login");
const greetings = document.querySelector("#greetings");
const welcome = document.querySelector("#welcome");
const USERNAME_KEY = 'username'

function initGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    if (username == null) {
        userLogin();
    } else {
        welcomeUser(username);
    }
}

function userLogin() {
    loginDiv.innerHTML = `
        <form id="login-form">
            <label id="question" for="username">Hello, what's your name?</label>
            <br>
            <input id="username" name="username" type="text" maxlength="15" required>
            <input class="hidden" type="submit" value="Log In">
        </form>`;

    loginDiv.classList.remove(HIDDEN_CLASSNAME);
    const loginForm = document.querySelector("#login-form");
    loginForm.addEventListener("submit", onLoginSubmit);
}

function onLoginSubmit(event) {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    localStorage.setItem(USERNAME_KEY, username);

    loginDiv.classList.add(HIDDEN_CLASSNAME);
    welcomeUser(username);
}

function welcomeUser(username) {
    const MORNING_HOUR = 5;
    const AFTERNOON_HOUR = 12;
    const EVENING_HOUR = 17;

    const hours = new Date().getHours();
    let greeting;
    if (MORNING_HOUR <= hours && hours < AFTERNOON_HOUR) {
        greeting = `Good Morning`;
    } else if (AFTERNOON_HOUR <= hours && hours < EVENING_HOUR) {
        greeting = `Good Afternoon`;
    } else {
        greeting = `Good Evening`;
    }
    welcome.innerText = `${greeting}, ${username}.`;
    clock.classList.remove(HIDDEN_CLASSNAME);
    greetings.classList.remove(HIDDEN_CLASSNAME);
}

initGreetings();