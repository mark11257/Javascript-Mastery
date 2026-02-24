//variable and sata types
// var function scoped
var x=10;
console.log(x);
console.log(typeof x);
// variable can take more than data type 
x = "hello";
console.log(x);
console.log(typeof x);

// let is script scoped
//const is constant script scoped variable
let y = "let variable";
console.log(y);
console.log(typeof y);
y = "let variable changed";
console.log(y);
console.log(typeof y);
const z = "const variable";
console.log(z);
console.log(typeof z);

//coercion

// ============================================
// COERCION - Automatic Type Conversion
// ============================================
// JavaScript automatically converts data types in certain operations
// Coercion follows a specific pattern: Boolean -> Number -> String

console.log("===== COERCION EXAMPLES =====");

// Boolean to Number coercion
// -----------------------
// false becomes 0, true becomes 1
console.log("--- Boolean to Number ---");
console.log("Number(false):", Number(false));  // 0
console.log("Number(true):", Number(true));    // 1
console.log("+false:", +false);              // 0
console.log("+true:", +true);                // 1

// Boolean coercion in arithmetic
console.log("false + 5:", false + 5);        // 5 (false -> 0)
console.log("true + 5:", true + 5);          // 6 (true -> 1)

// Number to String coercion
// -----------------------
console.log("--- Number to String ---");
console.log("String(123):", String(123));    // "123"
console.log("123 + '':", 123 + "");          // "123"
console.log("123 + 'abc':", 123 + "abc");    // "123abc"

// String to Number coercion
// -----------------------
console.log("--- String to Number ---");
console.log("Number('42'):", Number("42"));  // 42
console.log("Number('hello'):", Number("hello")); // NaN
console.log("parseInt('42'):", parseInt("42"));  // 42
console.log("+'42':", +"42");                  // 42

// Complete Coercion Chain: Boolean -> Number -> String
// -----------------------
console.log("--- Complete Coercion Chain ---");
let boolVal = true;
console.log("Original boolean:", boolVal);           // true
console.log("To Number:", Number(boolVal));          // 1
console.log("To String:", String(boolVal));         // "true"

boolVal = false;
console.log("Original boolean:", boolVal);          // false
console.log("To Number:", Number(boolVal));         // 0
console.log("To String:", String(boolVal));         // "false"

// ============================================
// EQUALITY OPERATORS
// ============================================

console.log("\n===== EQUALITY OPERATORS =====");

// Loose Equality (==) - performs coercion
// -----------------------
console.log("--- Loose Equality (==) ---");
console.log("5 == 5:", 5 == 5);                    // true
console.log("5 == '5':", 5 == '5');                // true (string '5' -> number 5)
console.log("0 == false:", 0 == false);            // true (false -> 0)
console.log("0 == '':", 0 == '');                  // true (empty string -> 0)
console.log("null == undefined:", null == undefined); // true
console.log("'hello' == 'hello':", 'hello' == 'hello'); // true
console.log("'5' == 5:", '5' == 5);                // true

// Strict Equality (===) - NO coercion
// -----------------------
console.log("--- Strict Equality (===) ---");
console.log("5 === 5:", 5 === 5);                  // true
console.log("5 === '5':", 5 === '5');               // false (different types)
console.log("0 === false:", 0 === false);          // false (different types)
console.log("0 === '':", 0 === '');                 // false (different types)
console.log("null === undefined:", null === undefined); // false (different types)
console.log("'hello' === 'hello':", 'hello' === 'hello'); // true

// ============================================
// COMPARISON OPERATORS
// ============================================

console.log("\n===== COMPARISON OPERATORS =====");

// Greater than (>) and Less than (<)
// -----------------------
console.log("--- > and < Operators ---");
console.log("10 > 5:", 10 > 5);                    // true
console.log("10 > '5':", 10 > '5');                // true ('5' -> 5)
console.log("'10' > '5':", '10' > '5');            // false (string comparison: '1' < '5')
console.log("true > false:", true > false);        // true (1 > 0)
console.log("'a' > 'b':", 'a' > 'b');              // false

// Greater than or Equal (>=) and Less than or Equal (<=)
// -----------------------
console.log("--- >= and <= Operators ---");
console.log("5 >= 5:", 5 >= 5);                    // true
console.log("5 >= '5':", 5 >= '5');                // true (coercion happens)
console.log("5 >= 6:", 5 >= 6);                   // false

// Not Equal (!=) and Strict Not Equal (!==)
// -----------------------
console.log("--- != and !== Operators ---");
console.log("5 != '5':", 5 != '5');                 // false (coercion, equal)
console.log("5 !== '5':", 5 !== '5');              // true (strict, different types)
console.log("0 != false:", 0 != false);            // false (coercion)
console.log("0 !== false:", 0 !== false);         // true (strict)

// ============================================
// COERCION IN PRACTICAL EXAMPLES
// ============================================

console.log("\n===== PRACTICAL COERCION EXAMPLES ---");

// Example 1: Boolean coercion in conditions
console.log("--- Boolean Coercion in Conditions ---");
console.log("if('hello'):", Boolean("hello"));     // true (non-empty string)
console.log("if(''):", Boolean(""));               // false (empty string)
console.log("if(42):", Boolean(42));               // true (non-zero number)
console.log("if(0):", Boolean(0));                 // false (zero)
console.log("if(null):", Boolean(null));           // false
console.log("if(undefined):", Boolean(undefined)); // false
console.log("if(NaN):", Boolean(NaN));             // false

// Example 2: Arithmetic operations with mixed types
console.log("--- Arithmetic with Coercion ---");
console.log("'5' + 3:", '5' + 3);                   // "53" (number -> string)
console.log("'5' - 3:", '5' - 3);                  // 2 (string -> number)
console.log("'5' * 3:", '5' * 3);                  // 15 (string -> number)
console.log("'5' / 3:", '5' / 3);                  // 1.666... (string -> number)
console.log("'5' + true:", '5' + true);            // "5true" (boolean -> string)
console.log("'5' - true:", '5' - true);            // 4 (true -> 1, then 5-1)

// Example 3: Comparison chain showing coercion order
console.log("--- Comparison Chain ---");
// Boolean -> Number -> String conversion order
console.log("true == 1:", true == 1);              // true (true -> 1)
console.log("true === 1:", true === 1);            // false (different types)
console.log("false == 0:", false == 0);            // true (false -> 0)
console.log("false === 0:", false === 0);          // false (different types)

// Example 4: null and undefined coercion
console.log("--- null and undefined ---");
console.log("null == 0:", null == 0);               // false (null only == undefined)
console.log("undefined == 0:", undefined == 0);    // false
console.log("null == '':", null == '');             // false
console.log("undefined == '':", undefined == '');  // false

// ============================================
// SUMMARY: COERCION FLOW
// ============================================

console.log("\n===== COERCION SUMMARY =====");
// When comparing with ==:
// 1. Boolean values convert to numbers (false=0, true=1)
// 2. Strings convert to numbers when comparing with numbers
// 3. null and undefined are equal to each other only

console.log("Boolean -> Number: false=0, true=1");
console.log("Number -> String: any number can become a string");
console.log("String -> Number: numeric strings become numbers, others become NaN");

let name = prompt("What is your name?", "");

try {
    // 1. Check if the user clicked "Cancel" (null) or left it empty ("")
    if (!name || name.trim() === "") {
        throw new Error("Empty name provided"); // This jumps straight to catch
    }

    document.querySelector(".name").innerHTML = "Hello " + name;
    console.log(name);

} catch (error) {
    // 2. This now runs because we "threw" the error above
    console.error("You have no name, dude. Error: " + error.message);
    name = "Stranger detected!";
    document.querySelector(".name").innerHTML = name;
}

// color choice
let color = prompt("Tell me "+name+" What is your fav color?");
 switch(color){
    case "red":
    case "RED":
    case "Red":
        var msg = "  your color is "+ color;
        break;
    case "blue":
    case "Blue":
    case "BLUE":
        var msg = "  your color is "+ color;
        break;
    case "Green":
    case "green":
    case "GREEN":
        var msg = "  your color is "+ color;
        break;
    default:
        var msg = " you have no color";
        break;
 }

 document.querySelector(".name").innerHTML += msg;

 //loops

 function forloop(){
    for(var i=0;i<=10;i++){
        document.querySelector(".loop").innerHTML += "I = "+i+"<br>"; 
    }
 }
 forloop();

function whileloop(){
    var i=10;
    while(i<=20){
        document.querySelector(".loop1").innerHTML += "I = "+i+"<br>"; 
        i++;
    }
 }
 whileloop();

function doloop(){
    var i=20;
    do{
       var response = prompt("Enter a Number:");
    }while(!response)
 }
 doloop();

 confirm("do you want to continue");
