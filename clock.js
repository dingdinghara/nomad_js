const container = document.querySelector(".clock");
const title = container.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    title.innerText = `${hours<10?`0${hours}`:hours}:${minutes<10? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function start () {
    getTime();
    setInterval(getTime, 1000);
}

start();