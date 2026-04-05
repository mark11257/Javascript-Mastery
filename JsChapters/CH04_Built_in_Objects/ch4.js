// CH04: Built-in Objects - Execution Logic
console.log('%c CH4: Power Tools Online', 'color: #03dac6; font-weight: bold;');

function writeLine(selector, text, isError = false) {
    const area = document.querySelector(selector);
    const color = isError ? "#cf6679" : "#03dac6";
    area.innerHTML += `<p style="color: ${color}; font-family: 'Courier New', monospace; margin: 8px 0;">>> ${text}</p>`;
}

function resetArea(selector, title) {
    document.querySelector(selector).innerHTML = `<h3>${title}</h3>`;
}

// 1. Strings Demo
function demoStrings() {
    const area = '.value1';
    resetArea(area, "Output: Strings");

    let str = "Learning JavaScript is Fun!";
    writeLine(area, `Original: ${str}`);
    writeLine(area, `Length: ${str.length} chars`);
    writeLine(area, `Character at 0: ${str.charAt(0)}`);
    writeLine(area, `Index of 'Java': ${str.indexOf("Java")}`);
    
    // Regex Demo
    let repeated = str.repeat(2).replace(/Fun/g, "Powerful");
    writeLine(area, `Regex Replace (Global): ${repeated}`);
}

// 2. Arrays Demo
function demoArrays() {
    const area = '.value2';
    resetArea(area, "Output: Arrays");

    const arr = [10, 20, 30, 40];
    writeLine(area, `Initial Array: [${arr.join(", ")}]`);
    
    arr.push(50); // Add end
    writeLine(area, `After Push(50): [${arr.join(", ")}]`);
    
    arr.shift(); // Remove start
    writeLine(area, `After Shift(): [${arr.join(", ")}]`);
    
    const reversed = [...arr].reverse(); // Clone and reverse
    writeLine(area, `Reversed Clone: [${reversed.join(", ")}]`);
}

// 3. Maps & Objects Demo
function demoMaps() {
    const area = '.value3';
    resetArea(area, "Output: Data");

    // Object
    const userObj = { name: "Mark", role: "Dev" };
    writeLine(area, `Object Key: userObj.name = ${userObj.name}`);

    // Map
    const userMap = new Map([
        ["id", "1011"],
        ["status", "Active"]
    ]);
    userMap.set("country", "Egypt");

    writeLine(area, "Iterating Map:");
    for (const [key, value] of userMap) {
        writeLine(area, `• ${key}: ${value}`);
    }
}

// 4. Date Demo
function demoDate() {
    const area = '.value4';
    resetArea(area, "Output: Time");

    const now = new Date();
    writeLine(area, `Full Date: ${now.toDateString()}`);
    writeLine(area, `Year: ${now.getFullYear()}`);
    writeLine(area, `Month (0-indexed): ${now.getMonth()}`); // 0 = Jan
    writeLine(area, `Day of Week: ${now.getDay()}`); // 0 = Sun
    writeLine(area, `Local Time: ${now.toLocaleTimeString()}`);
}