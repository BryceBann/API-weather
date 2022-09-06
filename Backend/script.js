var city = "";

var searchCity = $("#citySearch");
var searchBtn = $("#search-button");
var searchClear = $("#clearSearch");
var currrentCity = $("#currentCity");
var currentTemp = $("#temp");
var curretnWind = $("#wind");
var currentHumidity  = $("#humidity");
var currentUv = $("#uvIndex");
var pastCity = [];
//Checks to see if the city has previously been searched
function find(p){
    for(var i=0; i<pastCity.lengeth; i++) {
        if(p.toUpperCase() === pastCity[i]){
            return -1;
        }
    }
    return 1;
}
//set up thr API key used to find data
var APIkey = "104b3d87a3f27b63c86227e77149ab4c"

//function to display the data for city input by user
function showCurrentWeather(event){
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        showCurrentWeather(city);
    }
}

