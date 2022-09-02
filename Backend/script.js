//grbas local storage for previos cities searched
function grabLocalStroage(){
    let data = localStorage.getItem(key)
    if(data){
        $(`#text${key}`).text(data);
    }
}

$(document).ready(function(){

    for(let i = 0; i < 4; i++){

    var cityLookUp = $(`<div class="col"`)
    var searchBar = $(`<div class="search" id="searchBar"><textarea id="cityInput" class="userInput" placeholder="Search city here"></textarea>`);

    cityLookUp.append(searchBar);
    $(".container").append(cityLookUp);
    }
});

