/*Cookies are a way to store informmation like sessionID or anything needed at client side
you can store in a cookie and read a cookie and delete a cookie */

// storing in a cookie
function saveInfo(e){
    e.preventDefault();
    var username = document.querySelector(".username").value;
    var userpassword = document.querySelector(".password").value; // catch the input from html
    var usergender = document.querySelector(".gender:checked").value; // catch the input from html
    var date = new Date(); // specify the date od the cookie
    date.setMonth(date.getMonth()+2); // set month of date to 2 months from initialized date
    document.cookie = `UserNameCookie=${username}; expires=${date.toUTCString()}`; // store in cookie one info by one
    document.cookie = `UserPassCookie=${userpassword}; expires=${date.toUTCString()}`; // store in cookie one info by one
    document.cookie = `UserGenderCookie=${usergender}; expires=${date.toUTCString()}`; // store in cookie one info by one
      console.log(document.cookie);
      console.log(date.toUTCString());
}


function readInfo(string){
    var target = document.cookie.split(";"); // split the cookie by ; in an array
    let cookieName;
    for(var i=0;i<target.length;i++){ // loop through the array
         cookieName = target[i].trim(); // trim to remove space after semicolon to avoid errors
        if(cookieName.startsWith(string+"=")){ // if trimmed string from array starts with desired string + '=' then it is the cookie we want 
            cookieName = cookieName.split("=")[1]; //split on = and put [0] to get cookie name; or [1] to get cookie info
            break;
        }
    }
    console.log(cookieName);
}

function deleteInfo(name){ //delete cookie by setting it's date to past.
    // Hint: 1970 is the magic year
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    console.log(document.cookie);
}

