document.getElementById('search-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const input = inputField.value ;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=ba4fe921a6df88f74a049bc77ce7c63f`)
    .then(res => res.json())
    .then(data => displayWeather(data))
    inputField.value = '';
})


const displayWeather = weather => {
    
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.innerHTML = `
    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
    <h1>${weather.name}</h1>
    <h1>${parseInt(weather.main.temp) - 273}&deg;C</h1>
    <h1 class="lead">${weather.weather[0].main}</h1>
    `
}