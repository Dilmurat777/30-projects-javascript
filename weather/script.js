let cityElement = document.querySelector('.city');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let wind = document.querySelector('.wind');
let searchBox = document.querySelector('.search input');
let searchBtn = document.querySelector('.search button');
let weatherIcon = document.querySelector('.weather-icon');
let weather = document.querySelector('.weather');
let error = document.querySelector('.error');

const apiKey = 'acd05f928340557a0e2890e151ee66e0';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
		error.style.display = 'block';
		weather.style.display = 'none';
	} else {
		 const data = await response.json();
    console.log(data);

    temp.innerHTML = Math.round(data.main.temp) + ' °C';
    cityElement.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + ' %';
    wind.innerHTML = data.wind.speed + ' km/h';

    if (data.weather[0].main == 'Clear') {
      weatherIcon.src = 'images/clear.png';
    } else if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = 'images/clouds.png';
    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = 'images/drizzle.png';
    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = 'images/mist.png';
    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = 'images/rain.png';
    } else if (data.weather[0].main == 'Snow') {
      weatherIcon.src = 'images/snow.png';
    }

		weather.style.display = 'block';
		error.style.display = 'none';
	}
    if (!response.ok) {
      throw new Error('Город не найден');
    }
   
  } catch (error) {
    console.error('Ошибка:', error);
    cityElement.innerHTML = 'Город не найден';
    temp.innerHTML = '-';
    humidity.innerHTML = '-';
    wind.innerHTML = '-';
  }
}

searchBtn.addEventListener('click', () => {
  if (searchBox.value.trim() !== '') {
    checkWeather(searchBox.value.trim());
  }
});

searchBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && searchBox.value.trim() !== '') {
    checkWeather(searchBox.value.trim());
  }
});
