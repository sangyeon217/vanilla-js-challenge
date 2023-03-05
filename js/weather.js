const weather = document.querySelector("#today-weather");

function paintGeo(regionName, regionWeather) {
    weather.innerText = `${regionName} ${regionWeather}`;
}

function onGeoSuccess(position) {
    const latitude = position.coords.latitude.toFixed(2);
    const longitude = position.coords.longitude.toFixed(2);
    const API_KEY = ""  // API KEY 비공개
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const regionName = data.name;
            const regionWeather = data.weather[0].main;
            paintGeo(regionName, regionWeather);
        })
        .catch(() => {
            handleError();
        })
}

function onGeoError() {
    handleError();
}

function handleError() {
    weather.innerText = "날씨 정보 없음";
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);