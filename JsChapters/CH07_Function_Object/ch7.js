// CH07: Advanced Functions - Logic
console.log('%c⚡ Function Mastery Engine Active', 'color: #bb86fc; font-weight: bold;');

function writeLine(selector, text, isWarn = false) {
    const area = document.querySelector(selector);
    const color = isWarn ? "#ffeb3b" : "#bb86fc";
    area.innerHTML += `<p style="color: ${color}; font-family: 'Courier New', monospace; margin: 8px 0;">>> ${text}</p>`;
}

function resetArea(selector, title) {
    document.querySelector(selector).innerHTML = `<h3>${title}</h3>`;
}

// 1. Hoisting & IIFE
function demoHoisting() {
    const area = '.value1';
    resetArea(area, "Output: Hoisting");

    // IIFE Example
    (function(){
        writeLine(area, "IIFE triggered: Privacy scope created.");
    })();

    // Statement Hoisting
    writeLine(area, "Calling summ() before declaration...");
    summ(); 

    function summ(){
        writeLine(area, "Result: Function Statement was hoisted!", true);
    };

    // Expression (Note: We use try/catch to show why it fails if called early)
    writeLine(area, "Note: Anonymous expressions (let x = function) are NOT hoisted.");
}

// 2. Arguments Object
function demoArguments() {
    const area = '.value2';
    resetArea(area, "Output: Arguments");

    function flexibleSum() {
        var total = 0;
        for(var i=0; i < arguments.length; i++){
            total += arguments[i];
        }
        writeLine(area, `Processed ${arguments.length} arguments. Total: ${total}`);
    };

    flexibleSum(10, 20, 30);
    flexibleSum(5, 5);
}

// 3. Borrowing (Call, Apply, Bind)
function demoBorrowing() {
    const area = '.value3';
    resetArea(area, "Output: Borrowing");

    var nameExample = "John Doe";

    // Call
    writeLine(area, "Using .call('*'): " + [].join.call(nameExample, "*"), true);

    // Apply
    writeLine(area, "Using .apply(['_']): " + [].join.apply(nameExample, ["_"]), true);

    // Bind
    writeLine(area, "Using .bind() to create a custom formatter...");
    var dashJoiner = [].join.bind(nameExample);
    writeLine(area, "Bound Result: " + dashJoiner("--"));
}