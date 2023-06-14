document.addEventListener('DOMContentLoaded', () => {
    const newYear = new Date('Jul 25 2023 00:00:00');
    console.log(newYear);

    const daysVal = document.querySelector('.time-count__days .time-count__val');
    const hoursVal = document.querySelector('.time-count__hours .time-count__val');
    const minutesVal = document.querySelector('.time-count__minutes .time-count__val');
    const secondsVal = document.querySelector('.time-count__seconds .time-count__val');

    const timeCount = () => {
        let now = new Date();
        let result = newYear - now;
        let days = Math.floor(result / 1000 / 60 / 60 / 24);
        let hours = Math.floor(result / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(result / 1000 / 60) % 60;
        let seconds = Math.floor(result / 1000) % 60;

        if (days < 10) {
            days = '0' + days;
        };

        if (days < 10) {
            hours = '0' + hours;
        };

        if (minutes < 10) {
            minutes = '0' + minutes;
        };

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;
    };

    timeCount();

    setInterval(timeCount, 1000);
});