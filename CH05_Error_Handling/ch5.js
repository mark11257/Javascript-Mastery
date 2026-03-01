
// Error Class
let error = new Error("Custom error");
// throw error;

let number = prompt("enter a number between 5 and 20");
// if(number < 5)
//     throw new RangeError("less than 5");

// try catch finally

 try {
    if(number <5)
        throw new RangeError("Number less than 5 dude");
    else if(number>20)
        throw new RangeError("Number more than 20 dude");
    else
        alert(`number is ${number}`);
    console.warn("insisde try block");
 } catch (e) {
    if( e instanceof RangeError){
        console.warn("inside catch block\n")
        console.error(e);
    }
 }finally{
    console.warn("inside warn block");
 }