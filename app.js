const clock = document.querySelector('.clock');

// Time
const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    const clockContent = `
        <div class="clock-content">
            <h2 class="hours">${h}</h2>
            <p>Hours</p>
        </div>
        <h2 class="dots">:</h2>
        <div class="clock-content">
            <h2 class="time minutes">${m}</h2>
            <p>Minutes</p>
        </div>
        <h2 class="dots">:</h2>
        <div class="clock-content">
            <h2 class="time seconds">${s}</h2>
            <p>Seconds</p>
        </div>
    `;
    clock.innerHTML = clockContent;

    if (h < 10){
        const hours = document.querySelector('.hours')
        hours.prepend('0');
    }
    if (m < 10){
        const minutes = document.querySelector('.minutes')
        minutes.prepend('0');
    }
    if (s < 10){
        const seconds = document.querySelector('.seconds')
        seconds.prepend('0');
    }
};
setInterval(tick, 1000);