// CH06: Objects - Logic synchronized with Explanation
console.log('%c💎 CH6: Object Engine Online', 'color: #4caf50; font-weight: bold;');

function writeLine(selector, text, isWarn = false) {
    const area = document.querySelector(selector);
    const color = isWarn ? "#ffeb3b" : "#4caf50";
    area.innerHTML += `<p style="color: ${color}; font-family: 'Courier New', monospace; margin: 8px 0;">>> ${text}</p>`;
}

function resetArea(selector, title) {
    document.querySelector(selector).innerHTML = `<h3>${title}</h3>`;
}

// 1. Creation Demo
function demoCreation() {
    const area = '.value1';
    resetArea(area, "Output: Creation");

    // By Constructor
    var myobj = new Object();
    myobj.message = "Object made by Constructor (new Object())";
    writeLine(area, myobj.message);

    // By Literal (Most Common)
    var literalObj = { info: "Object made by Literal ({})" };
    writeLine(area, literalObj.info);
}

// 2. Methods Demo
function demoMethods() {
    const area = '.value2';
    resetArea(area, "Output: Methods");

    var user = {
        firstName: "John ",
        lastName: "Doe",
        fullName: function() {
            return `${this.firstName} ${this.lastName}`;
        }
    };

    writeLine(area, "Accessing Property: " + user.firstName);
    writeLine(area, "Calling Method: " + user.fullName(), true);
}

// 3. Iteration Demo
function demoIteration() {
    const area = '.value3';
    resetArea(area, "Output: Iteration");

    var customObj = {
        username: "John Doe",
        role: "Developer",
        status: "Ready"
    };

    writeLine(area, "Starting for...in loop:");
    for (const key in customObj) {
        // We use bracket notation customObj[key] because 'key' is a string
        writeLine(area, `${key.toUpperCase()}: ${customObj[key]}`);
    }
}