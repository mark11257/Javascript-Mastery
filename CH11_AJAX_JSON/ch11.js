var show = document.querySelector(".text");
var xhr = new XMLHttpRequest();
var txt ="";

function displayInfo(){
    xhr.open("GET","profile.json");
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // MOVE THE UPDATE HERE
            txt = JSON.stringify(xhr.responseText)
            show.innerHTML = txt; 
            console.log("Data received and displayed!");
        }
    }
}

function updateInfo(e){
    e.preventDefault();
    var input = document.querySelector("#ajax");
    xhr.open("PUT","ajaxtest.txt");
    xhr.send(input.value);
    console.log("data added");
}