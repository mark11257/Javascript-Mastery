// CH05: Error Handling Logic
console.log('%c⚠️ CH5: Error Handling Shield Active', 'color: #ff7597; font-weight: bold;');

function writeLine(selector, text, isError = false) {
    const area = document.querySelector(selector);
    const color = isError ? "#ff7597" : "#03dac6";
    area.innerHTML += `<p style="color: ${color}; font-family: 'Courier New', monospace; margin: 8px 0;">>> ${text}</p>`;
}

function resetArea(selector, title) {
    document.querySelector(selector).innerHTML = `<h3>${title}</h3>`;
}

// 1. Throw Demo
function demoThrow() {
    const area = '.value1';
    resetArea(area, "Output: Errors");
    
    try {
        writeLine(area, "Manually throwing a Custom Error...");
        throw new Error("System Override Initiated!");
    } catch (e) {
        writeLine(area, `Caught: ${e.message}`, true);
    }
}

// 2. Try-Catch-Finally Demo
function demoTryCatch() {
    const area = '.value2';
    resetArea(area, "Output: Logic");

    let num = prompt("Enter a number between 5 and 20:");
    
    try {
        if (num === null) throw new Error("Input cancelled");
        if (num < 5) throw new RangeError("Too low!");
        if (num > 20) throw new RangeError("Too high!");
        
        writeLine(area, `Success: ${num} is in range.`);
    } catch (err) {
        writeLine(area, `Error: ${err.message}`, true);
    } finally {
        writeLine(area, "Finally: Process finished (Cleanup).");
    }
}

// 3. Specific Error Handling (The Species Test)
function demoSpecificError() {
    const area = '.value3';
    resetArea(area, "Output: Types");

    const tests = [
        () => { let x = y; },               // ReferenceError
        () => { let x = null; x.f(); },     // TypeError
        () => { (1).toPrecision(500); }     // RangeError
    ];

    // Pick a random error to demonstrate detection
    const randomTest = tests[Math.floor(Math.random() * tests.length)];

    try {
        randomTest();
    } catch (e) {
        if (e instanceof ReferenceError) {
            writeLine(area, "Detected: REFERENCE ERROR", true);
            writeLine(area, "Fix: Check if your variables are defined.");
        } 
        else if (e instanceof TypeError) {
            writeLine(area, "Detected: TYPE ERROR", true);
            writeLine(area, "Fix: You are treating a value like the wrong type.");
        }
        else if (e instanceof RangeError) {
            writeLine(area, "Detected: RANGE ERROR", true);
            writeLine(area, "Fix: The number is too large or small for this method.");
        }
    }
}

// 4. Custom Error Class Demo
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field; // Custom property
    }
}

function demoCustomError() {
    const area = '.value4';
    resetArea(area, "Output: Custom");

    try {
        writeLine(area, "Validating form field: 'Email'...");
        throw new ValidationError("Invalid email format", "user_email");
    } catch (e) {
        if (e instanceof ValidationError) {
            writeLine(area, `Caught: ${e.name}`, true);
            writeLine(area, `Message: ${e.message}`);
            writeLine(area, `Failed Field: ${e.field}`);
        }
    }
}