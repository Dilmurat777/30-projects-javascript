const createBtn = document.querySelector('.btn');
const notesContainer = document.querySelector('.notes-container');
const notes = document.querySelectorAll('.input-box');

function getNotes() {
	notesContainer.innerHTML = localStorage.getItem('notes')
}
getNotes()
function updateStorage() {
	localStorage.setItem('notes', notesContainer.innerHTML)
}


createBtn.addEventListener('click', () => {
  const inputBox = document.createElement('p');
	const img = document.createElement('img');
	
	inputBox.className = 'input-box';
	inputBox.setAttribute('contenteditable', true);
	img.src = 'images/delete.png';
	notesContainer.appendChild(inputBox).appendChild(img)
	updateStorage()
});

notesContainer.addEventListener('click', (e) => {
	if (e.target.tagName === 'IMG') {
		e.target.parentElement.remove()
		updateStorage()
	} else if (e.target.tagName === "P") {
		const notes = document.querySelectorAll('.input-box');
		notes.forEach(nt => {
			nt.onkeyup = function () {
				updateStorage()
			}
		})
	}
})


document.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		document.execCommand('insertLineBreak');
		e.preventDefault()
	}
})


