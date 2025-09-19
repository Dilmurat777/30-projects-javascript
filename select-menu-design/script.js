let selectField = document.getElementById('selectField');
let list = document.getElementById('list');
let selectText = document.getElementById('selectText');
let options = document.getElementsByClassName('options');
let rotate = document.getElementById('rotate');

for (option of options) {
	option.onclick = function () {
		selectText.innerHTML = this.textContent;
		list.classList.toggle('active');
		rotate.classList.toggle('rotate')
	}
}

function showList() {
	list.classList.toggle('active');
	rotate.classList.toggle('rotate')
}

