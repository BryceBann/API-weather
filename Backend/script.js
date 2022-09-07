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

//Checks to see if the city has previously been searched
// function find(){
//     previousCity.forEach(city =>  {
//         if(city.toUpperCase() === previousCity[i]){
//             return -1;
//         }
//         return 1;
//     }
   
// )}
//takes the user input adds it to the list and adds to the local, value not showing city
$("#search-button").on("click", function(event){
    event.preventDefault();
    var city = $("#citySearch").val().trim();
        previousCity.push(city);
        searchedList = $(`<li class="list-group-item list-group-item-secondary">${city.toUpperCase()}</li>`);
        $("#search-history").append(searchedList);
        console.log(pastCity)
    
    localStorage.setItem("previousCity", JSON.stringify(previousCity));
    console.log(city)
})

fetchWeather: (event) => {
    var selectedCity = document.getElementById('citySearch').value;
    var key = "104b3d87a3f27b63c86227e77149ab4c"
    var lang = 'en'
    var units = 'imperial'
    var url = `https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=${key}&lang=${lang}&units=${units}`;
    fetch(url)
    .then(resp=> console.log(resp))
    //     if(!resp.ok) throw new Error(resp.statusText);
    //     return resp.json();
        
    // })
    // console.log(resp)
    // .then(data=>{

    // })
    // .catch(console.err);
    


}

//function to display the data for city input by user
// function showCurrentWeather(event){
//     if(searchCity.val().trim()!==""){
//         city=searchCity.val().trim();
//         showCurrentWeather(city);
        
//     }
// }