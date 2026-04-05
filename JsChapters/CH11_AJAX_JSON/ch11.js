// CH11: AJAX & XHR Engine
console.log('%c🌐 AJAX Engine: Online', 'color: #4caf50; font-weight: bold;');

/**
 * CORE AJAX FUNCTION
 * This function targets the profile.json file in your root directory.
 */
function fetchProfile() {
    const area = document.getElementById('profileResult');
    const status = document.getElementById('statusIndicator');
    
    // 1. Create the Request Object
    const xhr = new XMLHttpRequest();

    // 2. Configure it: (Method, Path, Asynchronous?)
    // We are looking for "profile.json" in your project root
    xhr.open('GET', '../../profile.json', true);

    // 3. Track the Progress (ReadyState Change)
    xhr.onreadystatechange = function() {
        console.log(`Current ReadyState: ${this.readyState}`);
        
        if (this.readyState < 4) {
            status.innerText = "Connecting...";
            status.className = "status-badge status-idle";
        }

        // 4. Handle the Response
        if (this.readyState === 4) {
            if (this.status === 200) {
                // Success!
                status.innerText = "Success: 200 OK";
                status.className = "status-badge status-success";
                
                // Process the JSON string into a JS Object
                try {
                    const userData = JSON.parse(this.responseText);
                    displayData(userData);
                } catch (e) {
                    area.innerHTML = "<p style='color:red'>Error parsing JSON file.</p>";
                }
            } else {
                // Error (e.g., 404 or 500)
                status.innerText = `Error: ${this.status}`;
                status.style.backgroundColor = "#b71c1c";
                area.innerHTML = `<h3>Server Error</h3><p>Could not find profile.json. Ensure the file exists in your project root.</p>`;
            }
        }
    };

    // 5. Fire the request
    xhr.send();
}

/**
 * HELPER: Displaying the data in the UI
 */
function displayData(data) {
    const area = document.getElementById('profileResult');
    area.innerHTML = `<h3>Profile Loaded</h3>`;
    
    // Create a list to show the JSON properties
    const list = document.createElement('ul');
    list.style.listStyle = "none";
    list.style.padding = "0";

    // Loop through the object keys (name, role, etc. from your JSON)
    for (let key in data) {
        const li = document.createElement('li');
        li.style.margin = "8px 0";
        li.innerHTML = `<strong style="color:#4caf50; text-transform: capitalize;">${key}:</strong> ${data[key]}`;
        list.appendChild(li);
    }
    
    area.appendChild(list);
}