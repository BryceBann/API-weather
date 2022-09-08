//making variables through html
var city = "";
var searchedList = $("#search-history");
var searchCity = $("#citySearch");
var searchBtn = $("#search-button");
var searchClear = $("#clearSearch");
var currrentCity = $("#currentCity");
var currentTemp = $("#temp");
var curretnWind = $("#wind");
var currentHumidity  = $("#humidity");
var currentUv = $("#uvIndex");
var pastCity = [];


//if the local storage has cities add to array for use and display if empty us declaried array
var previousCity = JSON.parse(localStorage.getItem("previousCity")) || pastCity;
console.log(previousCity)
previousCity.forEach(city => {
    searchedList = $(`<li class="list-group-item list-group-item-secondary">${city.toUpperCase()}</li>`);
    $("#search-history").append(searchedList);
});
//on the click add the user input to the array and add the city to list to display
$("#search-button").on("click", function(event){
    event.preventDefault();
      city = $("#citySearch").val().trim();
        previousCity.push(city);
        searchedList = $(`<li class="list-group-item list-group-item-secondary">${city.toUpperCase()}</li>`);
        $("#search-history").append(searchedList);
        console.log(pastCity);
    localStorage.setItem("previousCity", JSON.stringify(previousCity));
    console.log(city);
    
})
currentWeather(city);

//fetching the weather with the api using city name and key 
function currentWeather(city) {
    var key = "104b3d87a3f27b63c86227e77149ab4c"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${previousCity[1]}&appid=${key}&unit=imperial`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    })
  
    }

//uv index api call seperatley from weather
// https://api.openweathermap.org/data/2.5/uvi?q=${city}&appid=${key}