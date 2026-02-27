var string = "This is Literal Creation String"
console.log(string +" That is " +string.length  +" chars long." );
var newstring = new String("This is string from constructor!");
console.log(newstring);
var teststring = String("This string from constructor without new keyword");
console.log(teststring);

// typeof keword
console.log("First string it's type is: "+ typeof string 
    + "\n Second string it's type is: "+ typeof newstring
    + "\n Third string it's type is "+ typeof teststring
);

// string methods
console.log(string.charAt(0)); //T
console.log(string.charAt(string.length-1)); //g
console.log(string.indexOf("i")); //2
console.log(string.lastIndexOf("i")); //28
console.log(string.substring(0,2)); //Th
console.log(string.split(" ")); //split by whitespace
console.log(string.split("")); //split every character in string