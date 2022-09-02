//grbas local storage for previos cities searched
function grabLocalStroage(){
    let data = localStorage.getItem(key)
    if(data){
        $(`#text${key}`).text(data);
    }
}

$(document).ready(function(){

    for(let i = 0; i < searchHistory.length; i++){

    var searchBar = $(`<div class="" id="searchBar"><textarea id="" class="" placeholfer="Search city here"></textarea>`);

    searchHistory.append(seachBar);
    $("#container").append(searchHistory);
    }
});

