const clock = document.querySelector("#clock");
const todayDate = document.querySelector("#today-date")
const todayAmPm = document.querySelector("#today-ampm");
const todayTime = document.querySelector("#today-time");

function initClock() {
    setClock();
}

function setClock() {
    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    todayDate.innerText = `${year}년 ${formatData(month)}월 ${formatData(date)}일`;

    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    todayAmPm.innerText = `${ampm} `;

    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    todayTime.innerText = `${formatData(hours)}:${formatData(minutes)}:${formatData(seconds)}`;
}

function formatData(data) {
    return `${data}`.padStart(2, "0");
}

initClock();
setInterval(setClock, 1000);