//grbas local storage for previos cities searched
function grabLocalStroage(){
    let data = localStorage.getItem(key)
    if(data){
        $(`#text${key}`).text(data);
    }
}

$(document).ready(function(){

    var cityLookUp = $(`<div class="col">`);
    var searchBar = $(`<div class="search" id="searchBar"><textarea id="cityInput" class="userInput" placeholder="Search city here"></textarea>`);
    var btn = $(`<div class="btn" id="save"><button class="saveBtn"></button>`);

    cityLookUp.append(searchBar);
    cityLookUp.append(btn)
    $(".container").append(cityLookUp);
    
});

     var saveBtn = $('.saveBtn');
     saveBtn.on('click',function(){
        let btnClicked = $(this).attr('id');
        let savedText = $(this).parent().siblings().children('.userInput').val();
        localStorage.setItem(btnClicked, savedText);
     })



