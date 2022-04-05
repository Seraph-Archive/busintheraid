var APIKey = "dd105505f7745d31dfec186e0ed74a1e";
var APIKey2 = '04d735e16f8d15e720871fe703da1f01';
var searchButton = document.querySelector('#search-button');
var bigForecast = document.querySelector('#big-forecast');
var bigCityName = document.querySelector('#city-name-big');
var bigCityWeather = document.querySelector('#big-city-weather');
var bigCityStuff = document.querySelector('#big-city-stuff');
var now = moment().format('Do MMM');
var day1 = document.querySelector('#day1');
var day1Forecast = document.querySelector('#day1-forecast');
var day1Wind = document.querySelector('#day1-wind');
var day2 = document.querySelector('#day2');
var day2Forecast = document.querySelector('#day2-forecast');
var day2Wind = document.querySelector('#day2-wind');
var day3 = document.querySelector('#day3');
var day3Forecast = document.querySelector('#day3-forecast');
var day3Wind = document.querySelector('#day3-wind');
var day4 = document.querySelector('#day4');
var day4Forecast = document.querySelector('#day4-forecast');
var day4Wind = document.querySelector('#day4-wind');
var day5 = document.querySelector('#day5');
var day5Forecast = document.querySelector('#day5-forecast');
var day5Wind = document.querySelector('#day5-wind');

function weatherCall() {
    var cityInput = document.querySelector("#cityInput");
    var city = cityInput.value;
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + APIKey;
    var queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&cnt=5&appid=" + APIKey2;

    fetch(queryURL) 
        .then(function(data) {
            return data.json();
        })
        .then(function (data) {
            console.log(data);
            bigCityName.innerHTML = data.name + ' ' + now;
            bigCityWeather.innerHTML = data.weather[0].description + data.weather[0].icon;
            bigCityStuff.innerHTML = 'Temperature: ' + data.main.temp + 'c' + '\nWind: ' + data.wind.speed + 'kph';

        })


    fetch(queryURL2)
        .then(function(data) {
            return data.json();
        })
        .then(function (data) {
            console.log(data)
            for (i = 0; i < data.list.length; i++) {
                console.log(data.list[i])
            }
            day1.innerHTML = moment().nextDay
            day1Forecast.innerHTML = data.list[0].weather[0].description;
            day1Wind.innerHTML = 'Wind: ' + data.list[0].wind.speed + 'kph' + '\nTemperature: ' + data.list[0].main.temp + 'c'

            day2.innerHTML = moment().nextDay
            day2Forecast.innerHTML = data.list[1].weather[0].description;
            day2Wind.innerHTML = 'Wind: ' + data.list[1].wind.speed + 'kph' + '\nTemperature: ' + data.list[1].main.temp + 'c'

            day3.innerHTML = moment().nextDay
            day3Forecast.innerHTML = data.list[2].weather[0].description;
            day3Wind.innerHTML = 'Wind: ' + data.list[2].wind.speed + 'kph' + '\nTemperature: ' + data.list[2].main.temp + 'c'

            day4.innerHTML = moment().nextDay
            day4Forecast.innerHTML = data.list[3].weather[0].description;
            day4Wind.innerHTML = 'Wind: ' + data.list[3].wind.speed + 'kph' + '\nTemperature: ' + data.list[3].main.temp + 'c'

            day5.innerHTML = moment().nextDay
            day5Forecast.innerHTML = data.list[4].weather[0].description;
            day5Wind.innerHTML = 'Wind: ' + data.list[4].wind.speed + 'kph' + '\nTemperature: ' + data.list[4].main.temp + 'c'
        })
}


searchButton.addEventListener("click", weatherCall);
