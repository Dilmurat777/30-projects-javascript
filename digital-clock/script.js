let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

setInterval(() => {
	let currentTime = new Date()
  hours.innerHTML = currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours();
  minutes.innerHTML = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
  seconds.innerHTML = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
}, 1000);
