const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

function geoOk(position) {
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude;  //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url).then(response => response.json()).then(data => {
        const weatherCity = document.querySelector("#greeting__weather-main");
        //const weatherMain = document.querySelector("#greeting__weather div span");
        const weatherIcon = document.querySelector("#greeting__weather-icon");
        const weatherTemp = document.querySelector("#greeting__weather-temp");
        const weatherMax = document.querySelector("#greeting__weather-max");
        const weatherMin = document.querySelector("#greeting__weather-min");
        weatherCity.innerText = `Weather in ${data.name}`;
        //weatherMain.innerText = data.weather[0].main;
        icon = data.weather[0].icon;
        iconSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        weatherIcon.src = iconSrc;

        weatherTemp.innerText = `${data.main.temp}°C`;
        weatherMax.innerText = `${data.main.temp_max}°C`;
        weatherMin.innerText = `${data.main.temp_min}°C`;
    });
}

function geoError() {
    alert("Error")
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
