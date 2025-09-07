let galleryContainer = document.querySelector('.gallery');
let backBtn = document.querySelector('#backBtn');
let nextBtn = document.querySelector('#nextBtn');


galleryContainer.addEventListener('wheel', (e) => {
	e.preventDefault()
	galleryContainer.style.scrollBehavior = 'smooth'
	galleryContainer.scrollLeft += e.deltaY;
});


backBtn.addEventListener('click', () => {
	galleryContainer.style.scrollBehavior = 'smooth'
	galleryContainer.scrollLeft -= 900;
})
nextBtn.addEventListener('click', () => {
	galleryContainer.style.scrollBehavior = 'smooth'
	galleryContainer.scrollLeft += 900;
})

