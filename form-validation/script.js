let namedError = document.getElementById('name-error');
let telError = document.getElementById('tel-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
  let name = document.getElementById('contact-name').value.trim();
  if (name.length == 0) {
    namedError.innerHTML = 'Name is required';
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    namedError.innerHTML = 'Write full name';
    return false;
  }
  namedError.innerHTML = '<i class="fa-solid fa-circle-check fa-sm" style="color: #045311;"></i>';
  return true;
}
function validateTel() {
  let phone = document.getElementById('contact-number').value.trim();
  if (phone.length == 0) {
    telError.innerHTML = 'Phone is required';
    return false;
  }

    if (phone.length !== 10) {
    telError.innerHTML = 'Phone number be 10 digits';
    return false;
	}
	
  if (!phone.match(/^[0-9]{10}$/)) {
    telError.innerHTML = 'Only digits allowed';
    return false;
  }
  telError.innerHTML = '<i class="fa-solid fa-circle-check fa-sm" style="color: #045311;"></i>';
  return true;
}


function validateEmail() {
	let email = document.getElementById('contact-email').value.trim();
	if (email.length == 0) {
		emailError.innerHTML = 'Email is required';
		return false;
	}
	if(email !== email.toLowerCase()){
		emailError.innerHTML = 'Email must be in lowercase';
		return false;
	}
	if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
		emailError.innerHTML = 'Invalid email format';
		return false;
	}
	emailError.innerHTML = '<i class="fa-solid fa-circle-check fa-sm" style="color: #045311;"></i>';
	return true;
}

function validateMessage() {
	let message = document.getElementById('contact-message').value.trim();

	let left = 30 - message.length;
	if (left > 0) {
		messageError.innerHTML = 'You have ' + left + ' characters left';
		return false;
	}
	messageError.innerHTML = '<i class="fa-solid fa-circle-check fa-sm" style="color: #045311;"></i>';
	return true;
}

function validateForm() {
	if (!validateName() || !validateTel() || !validateEmail() || !validateMessage()) {
		submitError.style.display = 'block';
		submitError.innerHTML = 'Please fix the error!';
		setTimeout(() => {
			submitError.style.display = 'none';
		 }, 3000)
		return false;
	}
}