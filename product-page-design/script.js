let productImg = document.getElementById('productImg');
let btn = document.getElementsByClassName('btn');

btn[0].addEventListener('click', (e) => {
  productImg.src = './image/image1.png';
  for (let bt of btn) {
    bt.classList.remove('active');
  }
  e.target.classList.add('active');
});
btn[1].addEventListener('click', (e) => {
  productImg.src = './image/image2.png';
  for (let bt of btn) {
    bt.classList.remove('active');
  }
  e.target.classList.add('active');
});
btn[2].addEventListener('click', (e) => {
  productImg.src = './image/image3.png';
  for (let bt of btn) {
    bt.classList.remove('active');
  }
  e.target.classList.add('active');
});
