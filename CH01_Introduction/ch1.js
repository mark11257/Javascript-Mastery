const javascriptt = document.querySelector(".ht1");
javascriptt.addEventListener("click", function(){
    alert("this is an external Alert javascript message !");
});

// Console Methods
console.debug(javascriptt);
console.dir(javascriptt);
console.error("%c this is an error message","color:yellow;background:green");
console.warn("This is a warn message");