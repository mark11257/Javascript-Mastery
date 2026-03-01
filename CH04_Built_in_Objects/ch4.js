var string = "This is Literal Creation String l"
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
console.log(string.repeat(4)); //repeat string for n times
console.log(string.replace("L","KKK")); //replace part with another part

// Regex expression
// used with replace function to not just replace first sequence appear but
// /[sequence] /g means replace this sequence across all the string globally
// /[sequence] /i means replace this sequence ignoring sensitive case sequence
// /[sequence] /m means replace this sequence across multiple lines
// you can combine regex with any order commonly ussed /[sequence]/gi to change globally ignoring sensitive case ones.
console.log(string.repeat(3).replace(/L/gi,"KKK")); //replace part with another part with regex


//Arrays creation

// literal creation 
const arr = [1,2,3, 4,55,6,56,'ad',false,,['one','two',3]];
console.log(arr.length);
console.log(arr[8][1]);
// if assign arr[20] = 1 all before it that are not assigned are empty
arr[20] =1;
console.log(arr);

// array methods 
console.log(arr.at(-1)); // value at this index
console.log(arr.join("*_*")); // join array values as one string with favoured splitter
console.log(arr);
console.log(arr.pop()); // delete and return the last element in array
console.log(arr.push("added value")); // add items from the last of the array
console.log(arr);
console.log(arr.shift()); // delete and return the first element in array
console.log(arr.unshift("new one")); // add items from the start of the array
console.log(arr);
arr.pop();
arr.shift();
console.log(arr);
console.log(arr.sort()); // default sort is according to unicode
console.log(arr.sort(function(a,b){
    return a-b;
})); // you add a helper function to help sort correctly with your logic (can be different than this)

// associative array
    // is an array but it's index is a key string instead 0f 0,1,2,3... 
    // that cannot use array methods and listed only using for in loop
const associativeArray=[];
associativeArray["name"] = "mark";
associativeArray["role"] = "Developer";
associativeArray["id"] = "1011";
for (i in associativeArray){
    console.log( i +": " + associativeArray[i]);
} 
console.log( associativeArray);

// it's upgrade is objects that holds key and values too
const userObject = {
    "name": "mark",
    "role": "Developer",
    "id": "1011"
};
// Adding one more later
userObject["country"] = "Egypt";
for (i in userObject){
    console.log(`${i} is ${userObject[i]}`);
} 
console.log(userObject);

// the newest upgrade is faster for frequent additions and, unlike Objects.
//  it remembers the order in which you added items.

// to initialize many values at once:
//You pass an array of arrays to the constructor.
const userMap = new Map([
    ["user","mark"],
    ["role","developer"],
    ["id","1011"],
    ["Country","Egypt"]
]);

// Adding one more using set
userMap.set("status", "Active");

// iterate  using for of loop for more than one variable intialization
for (const [key,value] of userMap){
    console.log(`${key} is ${value}`);
}
console.log(userMap);

// Date 
const today = new Date();
console.log(today);
console.log(today.getYear() +1900); // Get year 
console.log(today.getFullYear()); // Get the year + 1900 (starting year in date function)
console.log(today.getMonth() +1); //Gets the month, using local time jan --> 0 Dec --> 11
console.log(today.getDay() +1); // Get Day of the week Sun --> 0 sat --> 6
console.log(today.getHours() -12); //Get hour of the day 00:12 AM --> 0 11:00 PM -->23
console.log(today.toDateString()); // print date in string format

