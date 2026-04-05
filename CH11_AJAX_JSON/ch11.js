var show = document.querySelector(".text");
var xhr = new XMLHttpRequest();
var txt ="";

/**
 * Fetches and displays profile data from profile.json using AJAX GET request.
 * Why: Demonstrates asynchronous data loading from a JSON file without page reload.
 * Logic: Opens GET request, sends it, sets up onreadystatechange callback to handle response
 * when ready (state 4) and successful (status 200). Parses JSON array and displays the
 * 3rd item (index 2) in formatted pre tag for readability.
 */
function displayInfo(){
    // Step 1: Initialize GET request to local JSON file
    xhr.open("GET","profile.json");
    // Step 2: Send the asynchronous request
    xhr.send();
    // Step 3: Callback triggered on state change
    xhr.onreadystatechange = function() {
        // Check if request is complete (readyState 4) and successful (status 200)
        // Why this check: Ensures data is fully loaded and server responded OK before processing
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Original note preserved
            // MOVE THE UPDATE HERE
            // Parse JSON string response into object array for structured access
            txt = JSON.parse(xhr.responseText)
            // Display 3rd profile (index 2) with formatting: null= no replacer, 4=indent spaces
            // Why stringify + pre: Pretty-prints JSON for human-readable display in DOM
            show.innerHTML = "<pre>"+JSON.stringify(txt[2], null, 4)+"</pre>"; 
            // Log success for debugging/confirmation
            console.log("Data received and displayed!");
        }
    }
}

/**
 * Updates a text file via AJAX PUT request with user input from form.
 * Why: Shows how to send data to server (here a txt file) using HTTP PUT method,
 * mimicking RESTful updates. Prevents page reload for SPA-like behavior.
 * Logic: Stops form submit, grabs input value, opens/sends PUT with data.
 * Note: Real servers needed for PUT; this demos client-side.
 * @param {Event} e - Form submit event
 */
function updateInfo(e){
    // Prevent default form submission to avoid page reload
    // Why: Enables AJAX-only update for seamless UX
    e.preventDefault();
    // Get user input value from element with id="ajax"
    var input = document.querySelector("#ajax");
    // Open PUT request to target txt file (server must support PUT)
    xhr.open("PUT","ajaxtest.txt");
    // Send the input value as request body
    xhr.send(input.value);
    // Log for user/debug feedback (no response handler here for simplicity)
    console.log("data added");
}
