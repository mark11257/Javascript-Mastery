// object creation
// by constructor
var myobj = new Object();
myobj.nameProp = 1; // you name the property and set it's value
myobj.message = "This is a message from an object made by a constructor"
console.log(myobj.message);

// literal creation
var obj = {};
//you also name the property and set it's value
obj.userFirstName = "Mark";
obj.userLastName = "Rafat";
// you can store a function inside a function property
obj.fullName = function(){
    return `Function stored and called from within the object to display full name which is ${this.userFirstName} ${this.userLastName}`;
};
 var res = obj.fullName();
 console.warn(res);

 // you can also deal with it like an associative array
 // by storing the property name as string in [] and assign it's value
 obj["status"] = "Ready";
 obj["role"] = "Developer";
 console.log(obj);
 // way to iterate the object
 for (const  key in obj){
    console.log(key, obj[key]);
 }

 // most used way
 var customObj = {
    username:"Mark",
    role:"developer",
    status:"ready",
    info: function(){
        return `${this.username} you are a ${this.role} and your status is ${this.status}`;
    },
 };

 var resyy = customObj.info();
 console.log(resyy);
