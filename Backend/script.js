//making variables through html
var city = "";
//possibly remove declared variables ask tutor
var searchedList = $("#search-history");
var searchCity = $("#citySearch");
var searchBtn = $("#search-button");
var searchClear = $("#clearSearch");
var currrentCity = $("#currentCity");
var currentTemp = $("#temp");
var currentWind = $("#wind");
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
    currrentCity=""
      city = $("#citySearch").val().trim();
        previousCity.push(city);
        searchedList = $(`<li class="list-group-item list-group-item-secondary">${city.toUpperCase()}</li>`);
        $("#search-history").append(searchedList);
        console.log(pastCity);
    localStorage.setItem("previousCity", JSON.stringify(previousCity));
    console.log(city);
//api key delcared fetching the data 
    var key = "104b3d87a3f27b63c86227e77149ab4c"
    var units = 'imperial'
    var lang = "en"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&unit=${units}&lang=${lang}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
//setting the fetched data to variables
        var currrentCityValue = data['name']
        var currentTempvalue = data['main']['temp']
        var currentWindValue = data['wind']['speed']
        var currentHumidityValue = data['main']['humidity']
        var currentLatValue = data['coord']['lat']
        var currentLonValue = data['coord']['lon']
        var weatherIconValue = data['weather'][0]['icon']
//Need to convert kelvin to farenhet
        currrentCity = currrentCityValue;
        currentTemp = Math.trunc(currentTempvalue);
        currentWind = Math.trunc(currentWindValue);
        currentHumidity = Math.trunc(currentHumidityValue)
        weatherIcon = weatherIconValue
        var Lat = currentLatValue
        var Lon = currentLonValue
        console.log(Lat)
        console.log(Lon)
        console.log(weatherIcon)

        currentTemp = ((currentTemp-273.15)*1.8)+32;
        currentTemp = Math.trunc(currentTemp)

 //displaying the current info on the html page
        $('#currentCity').append(" " + currrentCity)
        $('#temp').append(currentTemp)
        $('#wind').append(currentWind)
        $('#humidity').append(currentHumidity)
        $('#date').text(moment().format('L'));
        console.log(currentCity)
//fetching the uv index through different api 
        fetch(`https://api.openweathermap.org/data/2.5/uvi?appid=${key}&lat=${Lat}&lon=${Lon}`)
        .then(response => response.json())
        .then(data =>{
          console.log(data)
          var currentUvValue = data['value']

          currentUv = Math.trunc(currentUvValue);

          $("#uvIndex").append(currentUv)

          $(".weatherIcon").attr(
            "src",
            " http://openweathermap.org/img/wn/" + weatherIcon +"@2x.png"
            
           );
           fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Lon}&appid=${key}`)
           .then(response => response.json())
           .then(data =>{
             console.log(data)
           })
         })
     });
 })
//possibly function to pull old data
    function previousSearch(previousCity) {
        var key = "104b3d87a3f27b63c86227e77149ab4c"
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${previousCity[1]}&appid=${key}&unit=imperial`)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
        });
      
    }
//clear search history from the previousCity in local storage
    function clearHistory(event){
        event.preventDefault();
        pastCity=[];
        localStorage.removeItem("previousCity");
        document.location.reload();
    }

    $("#clearSearch").on("click",clearHistory);



