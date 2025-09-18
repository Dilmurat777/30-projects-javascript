let date = document.getElementById('date');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');



const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const today = new Date() 

date.innerHTML = today.getDate() < 10 ? '0' : '' + today.getDate();
day.innerHTML = days[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();

console.log('today', today);


// date.innerHTML = 