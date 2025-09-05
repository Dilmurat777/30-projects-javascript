let password = document.getElementById('password');
let eyeIcon = document.getElementById('eye-icon');


eyeIcon.addEventListener('click', () => {
	if (password.type == "password") {
		password.type = "text";
		eyeIcon.src = "./images/eye-open.png";
	} else {
		password.type = "password"
		eyeIcon.src = "./images/eye-close.png";
	}
})