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



var previousCity = JSON.parse(localStorage.getItem("previousCity")) || pastCity;
console.log(previousCity)
previousCity.forEach(city => {
    searchedList = $(`<li class="list-group-item list-group-item-secondary">${city.toUpperCase()}</li>`);
    $("#search-history").append(searchedList);
});

$("#search-button").on("click", function(event){
    event.preventDefault();
      city = $("#citySearch").val().trim();
        previousCity.push(city);
        searchedList = $(`<li class="list-group-item list-group-item-secondary">${city.toUpperCase()}</li>`);
        $("#search-history").append(searchedList);
        console.log(pastCity)
    
    localStorage.setItem("previousCity", JSON.stringify(previousCity));
    console.log(city)
})

console.log(city)

function currentWeather() {
var key = "104b3d87a3f27b63c86227e77149ab4c"
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
.then(response => response.json())
.then(data =>{
    console.log(data)
})
}