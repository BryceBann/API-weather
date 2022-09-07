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
//tkaes the user input adds it to the list and adds to the local, value not showing city
$("#search-button").on("click", function(event){
    event.preventDefault();
    var city = $("#citySearch").val().trim();
    if(!pastCity.includes(city)) {
        pastCity.push(city);
        searchedList = $(`<li class="list-group-item list-group-item-secondary">${city.toUpperCase()}</li>`);
        $("#search-history").append(searchedList);
    }
    localStorage.setItem("city", JSON.stringify(searchedList));
    console.log(searchedList)
})




//function to display the data for city input by user
// function showCurrentWeather(event){
//     if(searchCity.val().trim()!==""){
//         city=searchCity.val().trim();
//         showCurrentWeather(city);
        
//     }
// }