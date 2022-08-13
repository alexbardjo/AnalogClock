const secondsEl = document.querySelector('.seconds');
const minutesEl = document.querySelector('.minutes');
const hoursEl = document.querySelector('.hours');

const getTime = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const timeInterval = 6;

    secondsEl.style.transform = 'rotate('+(seconds * timeInterval)+'deg)';
    minutesEl.style.transform = 'rotate('+(minutes * timeInterval + seconds/10)+'deg)';
    hoursEl.style.transform = 'rotate('+(hours * 30 + minutes / 2)+'deg)';
}

setInterval(getTime, 100);