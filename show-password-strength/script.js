let passInput = document.getElementById('password');
let msg = document.getElementById('message');
let strength = document.getElementById('strength');
let eyeIcon = document.getElementById('eye-icon');

passInput.addEventListener('input', () => {
  if (passInput.value.length > 0) {
    msg.style.display = 'block';
    msg.style.color = '#ff5925';
  } else {
    msg.style.display = 'none';
  }
  if (passInput.value.length < 4) {
    strength.innerHTML = 'Weak';
    passInput.style.borderColor = '#ff5925';
    strength.style.color = '#ff5925';
  } else if (passInput.value.length >= 4 && passInput.value.length < 8) {
    strength.innerHTML = 'medium';
    msg.style.color = 'yellow';
    strength.style.color = 'yellow';
  } else if (passInput.value.length >= 8) {
    strength.innerHTML = 'strong';
    msg.style.color = 'green';
    strength.style.color = 'green';
  }
});

eyeIcon.addEventListener('click', () => {
  if (passInput.type == 'password') {
    eyeIcon.src = 'eye-open.png';
    passInput.type = 'text';
  } else if(passInput.type == 'text') {
    eyeIcon.src = 'eye-close.png';
    passInput.type = 'password';
  }
})