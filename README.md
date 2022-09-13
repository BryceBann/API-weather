# API-weather

## About the page 
<p>This page is a weather dashboard wihich allow you to enter any city name and see the current weather and a five dat forecast. In the current weather display you can see the tempature, humidity,wind speed, and the uv index which is color coded to show the uv risk.</p>
<br>

## About the code
<p>With a HTML page set up through bootstrap, the usser is presented with a input to search for a city, after entering the city name and clicked the search button the page will begin the java functions. Starting with a function that will take the citty name setting it to a variable followed by appending the li item the HTML page. The city name is then saved to as JSON to the local storage. The city will then be passed to an api that will find the data regarding the city. The data taken from the api will then be set to a variable then displayed on the HTML page, there is a else if statement that will decide the color of the uv index for safe to not safe.</p>
<br>
<p>There is a second function that will then take the city entered and send it through another api that will pull the data for the next 5 days and display that acording to the for loop itterations. followed by a clear button function to clear the local storage of all the searched cities</p>

## Webpage
<img src="images\screenShot.PNG" height="200px" width="200px">
[Active link to page](https://brycebann.github.io/API-weather/)

## Resources
[Stackoverflow](https://stackoverflow.com/)<br>
[w3schools](https://www.w3schools.com/)<br>
[jquery](https://jquery.com/)<br>
[mommentjs](https://momentjs.com/)<br>
[openweather](https://openweathermap.org/)<br>
[Javapoint](https://www.javatpoint.com/)<br>