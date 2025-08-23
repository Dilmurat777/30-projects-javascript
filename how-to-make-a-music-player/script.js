let player = document.getElementById('player');
let progress = document.getElementById('progress');
let playIcon = document.getElementById('playIcon');

player.onloadedmetadata = function () {
  progress.max = player.duration;
  progress.value = player.currentTime;
};

function playPause() {
  if (playIcon.classList.contains('fa-pause')) {
    player.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
  } else {
    player.play();
    playIcon.classList.add('fa-pause');
    playIcon.classList.remove('fa-play');
  }
}

if (player.play()) {
  setInterval(() => {
    progress.value = player.currentTime;
  }, 1500);
}

progress.onchange = function () {
  player.play();
  player.currentTime = progress.value;
  playIcon.classList.add('fa-pause');
  playIcon.classList.remove('fa-play');
};
