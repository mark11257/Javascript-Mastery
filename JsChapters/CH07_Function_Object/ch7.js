// IIFE invokes a function only one time and used to test an environment
(function(){
    console.log("IIFE--> immediatly invoked function expression");
})()

//hoisting function call 
summ();


// anonymous function
// function declared without a name and assigned to a variable 
// is not hoisted (cannot call it before compiler reach the function declaration and code)
let sum = function(){
    return "5";
};

// function statement
// is  hoisted (can call it before compiler reach the function declaration and code)
function summ(){
    console.log("tested ");
};

 /* you can pass arguments to a function without parameters and 
 catch it with collective argument (array like) but cannot perform operationss on*/
 function returnSumWithoutArguments(){
    var sum = 0;
    for(var i=0;i<arguments.length;i++){
        sum+= arguments[i];
    }
    console.log(sum);
};
returnSumWithoutArguments(1,2,3);
returnSumWithoutArguments(1,2);
returnSumWithoutArguments(1,2,3,4,5,6);

/*-----------------------Function borrowing----------------*/

// when you want to borrow a function from a class to another class to use you use apply or call or bind
// it works by saying whicch class you need to borrow from . which method . [apply or call or bind]
// apply
var str = "Javascript string";
// str.join(); //str.join is not a function in string class but array class
// you can call an array by initializing one or by using empty [] as alias calling for array
var arr = [1,2,"abc"];
console.log("using Apply method");
console.log(arr.join("-_-"));
console.log(arr.join.apply(str));
console.log(arr.join.apply(str,["-_-"])); // using apply with arr variable
console.log([].join.apply(str,["_"])); // using apply with []

// call
console.log("using Call method");
console.log([].join.call(str,"*")); // using apply with []

//bind
console.log("using bind method");
var stringJoin = [].join.bind(str); // using bind return new form for the function
console.log(stringJoin("--")); // use the function and add which splitter you want to join the string with in the arguments
