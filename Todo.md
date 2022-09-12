GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
Mock-Up

currentWeather function to take the user input and run that through the api
make weathe and wind speed change to proper measurements
function for uv index/color code the conditions
function to display next 5 day forecast
function to show current weather after clicked in serach history
function to clear serach history
display last serached city after close to reopen


previousCity is displaying data form api but city is not need to iterrate through array for city value after new serach or click on list item 

show previous city serached weather if any
make previous city link clickable 
pull forecast api and dispaly on page
convert all data to input
pull icon api data as well as display for forecast
need currentweather function to only dispaly one city 

make forecast display next 5 day data
history li clickable 
only show current searched city
