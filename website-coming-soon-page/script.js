let dayss = document.getElementById('days');
let hourss = document.getElementById('hours');
let minutess = document.getElementById('minutes');
let secondss = document.getElementById('seconds');

let countDownDate = new Date("Sep 20, 2025 00:00:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Добавляем ведущий ноль для каждой переменной
    dayss.innerHTML = days < 10 ? '0' + days : days;
    hourss.innerHTML = hours < 10 ? '0' + hours : hours;
    minutess.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    secondss.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    
    console.log(days, hours, minutes, seconds);

    if (distance < 0) {
        clearInterval(x);
        dayss.innerHTML = '00';
        hourss.innerHTML = '00';
        minutess.innerHTML = '00';
        secondss.innerHTML = '00';
    }
    
}, 1000);