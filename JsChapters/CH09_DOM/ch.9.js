// CH09: DOM Mastery Logic
console.log('%c🌳 DOM Engine Online', 'color: #ff9800; font-weight: bold;');

function writeLine(selector, text, isWarn = false) {
    const area = document.querySelector(selector);
    const color = isWarn ? "#ffeb3b" : "#ff9800";
    area.innerHTML += `<p style="color: ${color}; font-family: monospace; margin: 5px 0;">>> ${text}</p>`;
}

function resetArea(selector, title) {
    document.querySelector(selector).innerHTML = `<h3>${title}</h3>`;
}

function demoSelection() {
    const area = '.value1';
    resetArea(area, "Output: Tradition");
    var elem = document.getElementById("firsth");
    writeLine(area, "Found via ID: " + elem.id);
    var tags = document.getElementsByTagName("p");
    writeLine(area, "Found " + tags.length + " total paragraphs.");
}

function demoQuery() {
    const area = '.value2';
    resetArea(area, "Output: Modern");
    var elem = document.querySelector(".name");
    writeLine(area, "QuerySelector (.name) caught: " + elem.innerText);
}

function demoContent() {
    const area = '.value3';
    resetArea(area, "Output: Content");
    writeLine(area, "Setting innerHTML to bold 'John Doe'...");
    // Use an internal element to demo
    writeLine(area, "<b>John Doe (Rendered)</b>");
}

function demoNodes() {
    const area = '.value4';
    resetArea(area, "Output: Nodes");
    var newDiv = document.createElement("div");
    newDiv.innerText = "Dynamic Node for John Doe";
    newDiv.style.color = "#ffeb3b";
    document.querySelector(area).appendChild(newDiv);
}

function demoTraversal() {
    const area = '.value5';
    resetArea(area, "Output: Family");
    var parent = document.getElementById("firsth").parentElement;
    writeLine(area, "Parent of H1 is: " + parent.tagName);
    writeLine(area, "First child of H1 is: " + document.getElementById("firsth").firstChild.nodeName);
}