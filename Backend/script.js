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
previousCity.forEach(city => {
    searchedList = $(`<li class="list-group-item list-group-item-secondary" id="work">${city.toUpperCase()}</li>`);
    $("#search-history").append(searchedList);
});
//on the click add the user input to the array and add the city to list to display
// $("#search-button").on("click", function(event){
    function displayCity(event){
    // event.preventDefault();
    console.log(event)
    // currrentCity=""
      city = $("#citySearch").val().trim();
        previousCity.push(city);
        searchedList = $(`<li class="list-group-item list-group-item-secondary" id="work">${city.toUpperCase()}</li>`);
        $("#search-history").append(searchedList);
    localStorage.setItem("previousCity", JSON.stringify(previousCity));
//api key delcared fetching the data 
    var key = "104b3d87a3f27b63c86227e77149ab4c"
    var units = 'imperial'
    var lang = "en"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&unit=${units}&lang=${lang}`)
    .then(response => response.json())
    .then(data =>{
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
        currentTemp = currentTempvalue;
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
        $('#currentCity').text(" " + currrentCity)
        $('#date').text(moment().format('L'));
        $('#temp').text(currentTemp)
        $('#wind').text(currentWind)
        $('#humidity').text(currentHumidity)
//fetching the uv index through different api 
        fetch(`https://api.openweathermap.org/data/2.5/uvi?appid=${key}&lat=${Lat}&lon=${Lon}`)
        .then(response => response.json())
        .then(data =>{
          var currentUvValue = data['value']

          currentUv = Math.trunc(currentUvValue);

          $("#uvIndex").text(currentUv)
        //   rund through if statements for color code uv level
          if (currentUv >= 0 && currentUv <= 2) {
            $("#uvIndex").css("background-color", "#3EA72D").css("color", "white");
        } else if (currentUv >= 3 && currentUv <= 5) {
            $("#uvIndex").css("background-color", "#FFF300");
        } else if (currentUv >= 6 && currentUv <= 7) {
            $("#uvIndex").css("background-color", "#F18B00");
        } else if (currentUv >= 8 && currentUv <= 10) {
            $("#uvIndex").css("background-color", "#E53210").css("color", "white");
        } else {
            $("#uvIndex").css("background-color", "#B567A4").css("color", "white"); 
        }; 
        // grabbing the weather icon for currebt weather 

          $(".weatherIcon").attr(
            "src",
            " http://openweathermap.org/img/wn/" + weatherIcon +"@2x.png"
            
           );
           //puling future data but not displaying needs work
           fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Lon}&appid=${key}&exclude=minutely,hourly`)
           .then(response => response.json())
           .then(data =>{
             var index = 0;
// forecast function pulling next 5 days and display upcoming weather and 
             for(let i =6; i < 40; i+=8) {
                var forecast = data.list[i]
                var [date] = forecast.dt_txt.split(" ")
                var futTemp = forecast.main.temp
                var futHum = forecast.main.humidity
                var futWind = forecast.wind.speed
                var icon = forecast.weather[0].icon
// convert the temp, remove decimal from wind and temp
                futTemp = ((futTemp-273.15)*1.8)+32;
                futTemp = Math.trunc(futTemp)
                futWind = Math.trunc(futWind)
// grabing the weather icon for forecast
                $("#img"+index).attr(
                    "src",
                    " http://openweathermap.org/img/wn/" + icon +"@2x.png"
                    
                   );
//displaying the future weather
                $('#date'+index).text(date);
                $('#temp'+index).text(futTemp);
                $('#hum'+index).text(futHum);
                $('#wind'+index).text(futWind);
                index++
            }
           })
         })
     });
 }
//clear search history from the previousCity in local storage
    function clearHistory(event){
        // event.preventDefault();
        pastCity=[];
        localStorage.removeItem("previousCity");
        document.location.reload();
    }

    // make li clickable a pull data
//  function getPreviousCity(event){
//      clearHistory()
//     var city = event.target.textContent.trim();
//    if(event.target.matches("li")){
// city = listEl.textContent.trim();
// displayCity(city);
//     }
//  }

// buttons on page and li clickable
    $("#clearSearch").on("click",clearHistory);
    $("#search-button").on("click",displayCity);
    $("#search-history").on("click",getPreviousCity);


