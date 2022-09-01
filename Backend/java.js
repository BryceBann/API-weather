//grbas local storage for previos cities searched
function grabLocalStroage(){
    let data = localStorage.getItem(key)
    if(data){
        $(`#text${key}`).text(data);
    }
}
