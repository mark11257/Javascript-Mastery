// CH08: Browser Object Model (BOM) Logic
console.log('%c🌐 BOM Engine: System Online', 'color: #03dac6; font-weight: bold;');

function writeLine(selector, text, isWarn = false) {
    const area = document.querySelector(selector);
    const color = isWarn ? "#ffeb3b" : "#03dac6";
    area.innerHTML += `<p style="color: ${color}; font-family: monospace; margin: 5px 0;">>> ${text}</p>`;
}

function resetArea(selector, title) {
    document.querySelector(selector).innerHTML = `<h3>${title}</h3>`;
}

// 1. Window Demo
function demoWindow() {
    const area = '.value1';
    resetArea(area, "Output: Window");

    writeLine(area, `Viewport Width: ${window.innerWidth}px`);
    writeLine(area, `Viewport Height: ${window.innerHeight}px`);
    writeLine(area, "Accessing global document through window...");
    writeLine(area, `Document Title: ${window.document.title}`, true);
}

// 2. Location Demo
function demoLocation() {
    const area = '.value2';
    resetArea(area, "Output: Navigation");

    // Using John Doe as a data example for a mock URL check
    const mockURL = "https://example.com/profile/JohnDoe";
    writeLine(area, "Mock Search: Checking profile for John Doe...");

    writeLine(area, `Current Protocol: ${location.protocol}`);
    writeLine(area, `Domain: ${location.hostname}`);
    writeLine(area, `Current Path: ${location.pathname}`, true);
    
    writeLine(area, "Note: History length is currently " + history.length + " pages.");
}

// 3. Navigator Demo
function demoNavigator() {
    const area = '.value3';
    resetArea(area, "Output: Identity");

    writeLine(area, `Browser Engine: ${navigator.userAgent}`);
    writeLine(area, `System Language: ${navigator.language}`);
    
    if(navigator.onLine) {
        writeLine(area, "Connection Status: ONLINE", true);
    } else {
        writeLine(area, "Connection Status: OFFLINE", true);
    }
}