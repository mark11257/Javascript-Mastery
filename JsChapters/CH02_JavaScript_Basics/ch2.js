// CH02: Language Basics - Technical Implementation
console.log('%c🚀 CH2: Engine Ready', 'color: #03dac6; font-weight: bold;');

// Universal helper for Live Output
function updateLiveArea(selector, message, type = "info") {
    const area = document.querySelector(selector);
    const color = type === "error" ? "#cf6679" : "#bb86fc";
    area.innerHTML += `<p style="color: ${color}; margin: 8px 0; font-family: monospace;">> ${message}</p>`;
}

function clearArea(selector, title) {
    document.querySelector(selector).innerHTML = `<h3>${title}</h3>`;
}

// 1. Variables Demo
window.demoVariables = function() {
    const area = '.value1';
    clearArea(area, "Live Output: Variables");

    const userId = 9921; // Immutable
    let userPoints = 50; // Changeable
    
    updateLiveArea(area, `Const userId: ${userId} (Locked)`);
    updateLiveArea(area, `Let userPoints: ${userPoints} (Initial)`);
    
    userPoints += 10;
    updateLiveArea(area, `Let userPoints: ${userPoints} (After increment)`);
};

// 2. Coercion Demo
window.demoCoercion = function() {
    const area = '.value2';
    clearArea(area, "Live Output: Coercion");

    updateLiveArea(area, `Checking 7 == "7": ${7 == "7"} (Loose)`);
    updateLiveArea(area, `Checking 7 === "7": ${7 === "7"} (Strict)`);
    updateLiveArea(area, `Adding "20" + 5: ${"20" + 5} (String result)`);
    updateLiveArea(area, `Subtracting "20" - 5: ${"20" - 5} (Number result)`);
};

// 3. Conditionals Demo
window.demoConditionals = function() {
    const area = '.value3';
    clearArea(area, "Live Output: Branching");

    const ageInput = prompt("Enter your age:");
    const age = Number(ageInput);

    if (isNaN(age) || ageInput === null) {
        updateLiveArea(area, "Error: You didn't enter a valid number.", "error");
    } else if (age >= 18) {
        updateLiveArea(area, `Age ${age}: Access Granted.`, "info");
    } else {
        updateLiveArea(area, `Age ${age}: Access Denied (Underage).`, "error");
    }
};

// 4. Loops Demo
window.demoLoops = function() {
    const area = '.value4';
    clearArea(area, "Live Output: Loops");

    updateLiveArea(area, "Executing 'For' loop 1 to 3:");
    for (let i = 1; i <= 3; i++) {
        updateLiveArea(area, `Processing item #${i}...`);
    }

    updateLiveArea(area, "Loop complete.");
};