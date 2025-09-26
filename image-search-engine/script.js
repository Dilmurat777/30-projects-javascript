const accessKey = 'cXK-eb2v0p0F3uosqya6M1dm64gbY22K7LVXmWxr6NM';

let searchForm = document.getElementById('search-form');
let searchInput = document.getElementById('search-input');
let searchResults = document.getElementById('search-results');
let showMoreBtn = document.getElementById('show-more-btn');

let keyWord = '';
let page = 1;

async function searchImages() {
	keyWord = searchInput.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${accessKey}&per_page=12`;
  const response = await fetch(url);
	const data = await response.json();
	const results = data.results;

	if (page === 1) { 
		searchResults.innerHTML = '';
	}

	results.map((result) => {
		const image = document.createElement('img');
		image.src = result.urls.small
		const imageLink = document.createElement('a');
		imageLink.href = result.links.html;
		imageLink.target = '_blank'

		imageLink.appendChild(image);
		searchResults.appendChild(imageLink)
	})
showMoreBtn.style.display = "block"
  
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener('click', () => {
  page++;
  searchImages();
})

// https://api.unsplash.com/search/photos?page=1&query=office;
// Access Key
// cXK-eb2v0p0F3uosqya6M1dm64gbY22K7LVXmWxr6NM

// Secret key
// oRjfwS5bU30h3_jTX0JkSgJYzSD1e1gZnQ_5OOX57d4
