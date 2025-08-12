const passwordBox = document.querySelector('#password');

let length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '@#$%^&*()_+!}{[]></-=';

const allChars = upperCase + lowerCase + number + symbol;
function createPassword() {
  let password = '';
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];
  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}
function copyPassword() {
  passwordBox.select();
  // document.execCommand('copy')
  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => {
      alert('Пароль скопирован в буфер обмена!');
    })
    .catch((error) => {
      console.error('Ошибка копирования: ', error);
      document.execCommand('copy');
      alert('Пароль скопирован (старым методом).');
    });
}
