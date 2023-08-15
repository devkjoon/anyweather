const appID = "b169b31281ffa2a2b70b9e8ac22c3e88l";

function load() {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let fiveDayURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&${long}&appid=76d52450ab94e81993d2613d091c301e&units=imperial`
        
        fetch(fiveDayURL)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            fiveDayWeather(data);
            localStorage.setItem("response", JSON.stringify(data.city.name));
            loadURL();
        })
    })
}

function loadURL() {
    let cityName = JSON.parse(localStorage.getItem("response"));

    let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=76d52450ab94e81993d2613d091c301e&units=imperial`
}
''



























let displayWeather = function(weatherData)