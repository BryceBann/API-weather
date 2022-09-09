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

    var key = "104b3d87a3f27b63c86227e77149ab4c"
    var units = "imperial"
    var lang = "en"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&unit=${units}&lang=${lang}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        var currrentCityValue = data['name']
        var currentTempvalue = data['main']['temp']
        var currentWindValue = data['wind']['speed']
        var currentHumidityValue = data['main']['humidity']

        currrentCity = currrentCityValue;
        currentTemp = currentTempvalue;
        currentWind = currentWindValue
        currentHumidity = currentHumidityValue

        $('#currentCity').append(currrentCity)
        $('#temp').append(currentTemp)
        $('#wind').append(currentWind)
        $('#humidity').append(currentHumidity)
  })
  //currently not woking
    // fetch(`https://api.openweathermap.org/data/2.5/uvi?appid=104b3d87a3f27b63c86227e77149ab4c`)
    // .then(response => response.json())
    // .then(data =>{
    //   console.log(data)
    // })
})

//possibly needs more work
//possibly function to pull old data
// previousSearch(previousCity);
//     function previousSearch(previousCity) {
//         var key = "104b3d87a3f27b63c86227e77149ab4c"
//         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${previousCity[1]}&appid=${key}&unit=imperial`)
//         .then(response => response.json())
//         .then(data =>{
//             console.log(data)
//         })
      
//         }


