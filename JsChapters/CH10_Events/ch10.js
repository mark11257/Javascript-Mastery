// CH10: Event Logic Mastery
console.log('%c⚡ Event Engine: Online', 'color: #f44336; font-weight: bold;');

// --- CORE UTILITY ---
// This function handles writing to the live areas. 
// It includes logic to enforce a maximum number of logs (FIFO) so the page doesn't stretch.
function writeLog(selector, text, maxLogs = 0) {
    const area = document.querySelector(selector);
    if (!area) return;

    // Create the new log paragraph
    const p = document.createElement('p');
    p.style.color = "#f44336";
    p.style.fontFamily = "monospace";
    p.style.margin = "4px 0";
    // Adding timestamp for clarity
    const time = new Date().toLocaleTimeString();
    p.textContent = `[${time}] >> ${text}`;
    
    // Append to the area
    area.appendChild(p);

    // If maxLogs is specified, remove the oldest log (the first <p> element after the <h3>)
    if (maxLogs > 0) {
        const logs = area.querySelectorAll('p');
        if (logs.length > maxLogs) {
            logs[0].remove(); // Omits the first log from the top
        }
    }
}


// --- 1. THE "THIS" KEYWORD ---
const thisBtn = document.getElementById('thisBtn');
thisBtn.addEventListener('click', function() {
    // 'this' targets the button directly without needing to select it again
    this.style.backgroundColor = this.style.backgroundColor === 'green' ? '#f44336' : 'green';
    this.innerText = "Look! My color changed.";
});


// --- 3. MOUSE EVENTS & SLIDESHOW ---
// Slideshow Logic
const slides = [
    { text: "Slide 1: Welcome", color: "#f44336" }, // Red
    { text: "Slide 2: To The", color: "#2196F3" }, // Blue
    { text: "Slide 3: DOM", color: "#4CAF50" },    // Green
    { text: "Slide 4: Mastery", color: "#FF9800" } // Orange
];
let currentSlide = 0;
const slideDisplay = document.getElementById('slideDisplay');

document.getElementById('nextBtn').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slides.length;
    slideDisplay.innerText = slides[currentSlide].text;
    slideDisplay.style.backgroundColor = slides[currentSlide].color;
});

document.getElementById('prevBtn').addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slideDisplay.innerText = slides[currentSlide].text;
    slideDisplay.style.backgroundColor = slides[currentSlide].color;
});

// Interactive Mouse Box
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', function() {
    this.style.borderColor = 'white';
    writeLog('.valueMouse', `Mouse ENTERED the box.`);
});
hoverBox.addEventListener('mouseout', function() {
    this.style.borderColor = '#f44336';
    writeLog('.valueMouse', `Mouse LEFT the box.`);
});
hoverBox.addEventListener('click', function(e) {
    // Extracting Event Properties
    writeLog('.valueMouse', `Box Clicked! Event Type: ${e.type} | X: ${e.clientX}, Y: ${e.clientY}`);
});


// --- 4. KEYBOARD EVENTS ---
const keyInput = document.getElementById('keyInput');
keyInput.addEventListener('keydown', function(e) {
    writeLog('.valueKey', `Key Down: "${e.key}" (Code: ${e.code})`);
    
    if (e.key === "Enter") {
        writeLog('.valueKey', `--> ENTER detected! Executing search...`);
    } else if (e.key === "Escape") {
        writeLog('.valueKey', `--> ESC detected! Clearing input...`);
        this.value = ""; // Clear input using 'this'
    }
});


// --- 5. FORM EVENTS (Focus, Blur, Change) ---
const formInput = document.getElementById('formInput');
// Notice the '5' at the end of writeLog! This ensures only the last 5 logs are kept.
formInput.addEventListener('focus', function() {
    this.style.backgroundColor = '#442222';
    writeLog('.valueForm', "Event: onfocus (User clicked in)", 5);
});
formInput.addEventListener('blur', function() {
    this.style.backgroundColor = '#2a2a2a';
    writeLog('.valueForm', "Event: onblur (User clicked away)", 5);
});
formInput.addEventListener('change', function() {
    writeLog('.valueForm', `Event: onchange (Value locked in as: "${this.value}")`, 5);
});


// --- 6. DROPDOWN (SELECT) PROPERTIES ---
document.getElementById('menuBtn').addEventListener('click', function() {
    var menu = document.getElementById("myMenu");
    // Grabbing the selected index
    var index = menu.selectedIndex;
    // Extracting the visible text and hidden value
    var selectedText = menu.options[index].text;
    var selectedValue = menu.options[index].value;
    
    writeLog('.valueMenu', `Selected: ${selectedText}`);
    writeLog('.valueMenu', `Hidden System Value: ${selectedValue}`);
});


// --- 7. FORM SUBMISSION & PREVENT DEFAULT ---
const myForm = document.getElementById('myForm');
myForm.addEventListener('submit', function(e) {
    // CRITICAL: Stops the page from refreshing
    e.preventDefault(); 
    writeLog('.valueSubmit', "e.preventDefault() called! Page refresh stopped.");
    writeLog('.valueSubmit', "Form data intercepted. Ready for manual processing.");
});


// --- 8. CAPTURING & BUBBLING ---
const parentBox = document.getElementById('parentBox');
const childBtn = document.getElementById('childBtn');

// Bubbling: False (Default). Fires child, then parent.
childBtn.addEventListener('click', function(e) {
    writeLog('.valueBubble', "1. Child Button Clicked!");
    // e.stopPropagation(); // Uncomment this line to stop it from reaching the parent!
}, false);

parentBox.addEventListener('click', function() {
    writeLog('.valueBubble', "2. Parent Div Clicked! (Event Bubbled Up)");
}, false);

// *Note: If we changed 'false' to 'true' on the parent listener, it would fire BEFORE the child (Capturing Phase).


// --- 9. CUSTOM EVENTS ---
// 1. Define the event and attach a 'detail' object payload
const seenEvent = new CustomEvent('seen', {
    detail: { 
        message: 'The custom event was successfully dispatched.',
        status: 'Active'
    }
});

// 2. Setup a listener waiting for this specific custom word ('seen')
document.addEventListener('seen', function(e) {
    writeLog('.valueCustom', `Custom Event Fired! Message: ${e.detail.message}`);
});

// 3. Fire the event manually when the button is clicked
document.getElementById('fireCustom').addEventListener('click', function() {
    document.dispatchEvent(seenEvent);
});