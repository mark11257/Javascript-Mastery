// CH03: Functions - Logic synchronized with Explanation
console.log('%c⚙️ CH3: Logic Engines Active', 'color: #bb86fc; font-weight: bold;');

// Standard UI Helper
function writeLine(selector, text, isError = false) {
    const area = document.querySelector(selector);
    const color = isError ? "#cf6679" : "#03dac6";
    area.innerHTML += `<p style="color: ${color}; font-family: 'Courier New', monospace; margin: 8px 0;">>> ${text}</p>`;
}

function resetArea(selector, title) {
    document.querySelector(selector).innerHTML = `<h3>${title}</h3>`;
}

// 1. Function Types
function showFunctionTypes() {
    const area = '.value1';
    resetArea(area, "Output: Types");
    
    function sayHi() { return "Declaration: Hi! (Called via Hoisting)"; }
    const square = (n) => `Arrow: Square of ${n} is ${n * n}`;

    writeLine(area, sayHi());
    writeLine(area, square(5));
}

// 2. Default Parameters
function showDefaultParams() {
    const area = '.value2';
    resetArea(area, "Output: Defaults");

    function calcTotal(price, tax = 0.1) {
        return `Total for $${price} with ${tax*100}% tax: $${price + (price * tax)}`;
    }

    writeLine(area, calcTotal(100));      // Default 0.1
    writeLine(area, calcTotal(100, 0.2)); // Custom 0.2
}

// 3. Scope & Shadowing
function showScope() {
    const area = '.value3';
    resetArea(area, "Output: Scope");

    let mode = "Global";
    
    function changeMode() {
        let mode = "Local"; // Shadowing
        return mode;
    }

    writeLine(area, `Function call result: ${changeMode()}`);
    writeLine(area, `Actual Global variable: ${mode}`);
}

// 4. Binding
function showCallApplyBind() {
    const area = '.value4';
    resetArea(area, "Output: Binding");

    const person = { name: "John Doe" };
    function intro(age, city) {
        writeLine(area, `${this.name} | Age: ${age} | City: ${city}`);
    }

    writeLine(area, "Running .call() (Individual args):");
    intro.call(person, 25, "NYC");
    
    writeLine(area, "Running .apply() (Array args):");
    intro.apply(person, [30, "Cairo"]);
}

// 5. Closures
// This simulates the 'createCounter' in the "Copy & Try" section
let persistentCount = 0; 
function showIIFEClosure() {
    const area = '.value5';
    resetArea(area, "Output: Closure");

    persistentCount++;
    writeLine(area, `Counter Persistence: ${persistentCount}`);
    writeLine(area, "Variable 'persistentCount' is remembered by this function.");
}