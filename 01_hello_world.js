// ============================================
// JavaScript Mastery - Starter File
// ============================================

// Chapter 1: Introduction
// ----------------------
// Running JavaScript in Browser Console
console.log("Hello, World!");
console.log("Welcome to JavaScript Mastery from Mahartech!");

// Variables (Chapter 2)
let name = "JavaScript Learner";
const course = "JavaScript Mastery";
var version = "ES6+";

console.log(`Learning ${course} - ${name}`);

// Data Types
let stringExample = "Hello";        // String
let numberExample = 42;             // Number
let booleanExample = true;          // Boolean
let arrayExample = [1, 2, 3];       // Array
let objectExample = { key: "value" }; // Object

console.log(typeof stringExample);
console.log(typeof numberExample);
console.log(typeof booleanExample);
console.log(typeof arrayExample);
console.log(typeof objectExample);

// Operators
let a = 10, b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

// Conditional Statement
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("b is greater than or equal to a");
}

// Loop
for (let i = 1; i <= 5; i++) {
    console.log("Loop iteration:", i);
}

// Function
function greet(message) {
    return `Message: ${message}`;
}

console.log(greet("Welcome to the course!"));

// Arrow Function
const add = (x, y) => x + y;
console.log("Arrow function - Add:", add(5, 3));

// Array Methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const filtered = numbers.filter(n => n > 2);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Filtered (>2):", filtered);
console.log("Sum:", sum);

// String Methods
let text = "JavaScript";
console.log("Upper:", text.toUpperCase());
console.log("Lower:", text.toLowerCase());
console.log("Slice:", text.slice(0, 4));

// Object
const person = {
    name: "John",
    age: 25,
    greet: function() {
        return `Hi, I'm ${this.name}`;
    }
};

console.log(person.name);
console.log(person.greet());

// Date
const now = new Date();
console.log("Current Date:", now.toDateString());

console.log("✅ Starter file loaded successfully!");
console.log("Start learning Chapter 1: Introduction");
