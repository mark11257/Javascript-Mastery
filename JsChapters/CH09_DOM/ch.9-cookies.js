// CH09: Cookie Mastery Logic
console.log('%c🍪 Cookie Manager: Active', 'color: #ff9800; font-weight: bold;');

// Helper to write to the UI (matches your previous style)
function writeLine(selector, text, isWarn = false) {
    const area = document.querySelector(selector);
    if (!area) return;
    const color = isWarn ? "#ffeb3b" : "#ff9800";
    area.innerHTML += `<p style="color: ${color}; font-family: monospace; margin: 5px 0;">>> ${text}</p>`;
}

function resetArea(selector, title) {
    const area = document.querySelector(selector);
    if (area) area.innerHTML = `<h3>${title}</h3>`;
}

// SECTION 6 & 7: Saving with the "General Rule"
function saveInfo(e) {
    e.preventDefault();
    const area = '.value8'; // We will output status here
    resetArea(area, "Output: Cookie Action");

    var form = document.forms["myForm"];
    var username = form.elements.username.value;
    var userpassword = form.elements.password.value;
    var usergender = form.querySelector(".gender:checked").value;

    var date = new Date();
    date.setMonth(date.getMonth() + 2); 
    const expires = date.toUTCString();

    // Applying the General Rule: Name=Value; expires=Date; path=/; Secure; SameSite=Lax
    document.cookie = `UserNameCookie=${username}; expires=${expires}; path=/; Secure; SameSite=Lax`;
    document.cookie = `UserPassCookie=${userpassword}; expires=${expires}; path=/; Secure; SameSite=Lax`;
    document.cookie = `UserGenderCookie=${usergender}; expires=${expires}; path=/; Secure; SameSite=Lax`;

    writeLine(area, "Success: Data saved for " + username);
    writeLine(area, "Expires: " + expires, true);
}

// SECTION 8: The Grand Reveal (Reading all cookies)
function showAllStoredData() {
    const area = '.value10';
    resetArea(area, "Output: Full Record");

    if (document.cookie.length === 0) {
        writeLine(area, "No cookies found!", true);
        return;
    }

    // Helper to extract specific cookie by name
    function getCookieValue(name) {
        let cookieArray = document.cookie.split(";");
        for(let i = 0; i < cookieArray.length; i++) {
            let cookiePair = cookieArray[i].trim();
            if(cookiePair.startsWith(name + "=")) {
                return cookiePair.split("=")[1];
            }
        }
        return "Not Found";
    }

    const user = getCookieValue("UserNameCookie");
    const pass = getCookieValue("UserPassCookie");
    const gen  = getCookieValue("UserGenderCookie");

    writeLine(area, "USER: " + user);
    writeLine(area, "PASS: " + "*".repeat(pass.length) + " (Stored)");
    writeLine(area, "GENDER: " + gen, true);
}

// SECTION 8: Deleting
function deleteInfo(name) {
    const area = '.value10';
    resetArea(area, "Output: Full Record");
    // Setting date to 1970 to kill the cookie
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    writeLine(area, `Cookie [${name}] deleted.`, true);
}