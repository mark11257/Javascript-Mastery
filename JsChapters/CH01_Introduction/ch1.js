// CH01: Introduction - External JS + Console + Events
console.log('%c🚀 SMART HUB LOADED', 'color: #03dac6; font-size: 20px; font-weight: bold; text-shadow: 2px 2px #000;');

/**
 * THE SMART SWITCH LOGIC
 * We select the elements and add a "Listener" - a piece of code that waits for a click.
 */
const lightSwitch = document.getElementById('light-switch');
const roomStatus = document.getElementById('room-status');

if (lightSwitch) {
    lightSwitch.addEventListener('click', function() {
        // Toggle Logic
        if (roomStatus.innerText.includes('OFF')) {
            roomStatus.innerText = 'ON 💡';
            roomStatus.style.color = '#bb86fc'; // Using your purple color
            roomStatus.style.background = 'rgba(187, 134, 252, 0.2)';
            console.log('%c[System]: Light turned ON', 'color: #bb86fc');
        } else {
            roomStatus.innerText = 'OFF 🌑';
            roomStatus.style.color = '#03dac6'; // Using your teal color
            roomStatus.style.background = 'rgba(3, 218, 198, 0.1)';
            console.log('%c[System]: Light turned OFF', 'color: #03dac6');
        }
        
        alert('External JS Alert: The Hub received your command!');
    });
}

/**
 * CONSOLE DEMONSTRATION
 * Helping the user understand the different "Security Levels" of logs.
 */
console.group('🛠️ Developer Diagnostic Log');
console.log('%cINFO: Application started successfully.', 'color: #03dac6');
console.warn('%cWARN: Running in demo mode. Some features may be limited.', 'color: #ffb74d');
console.error('%cERROR: Critical system check failed (Just kidding, this is a demo!)', 'background: #cf6679; color: white; padding: 2px 5px; border-radius: 4px;');

// Inspection Tool
console.debug('Inspecting the Light Switch element:');
console.dir(lightSwitch); 
console.groupEnd();

console.log('%c✅ CH1 Ready. Interact with the elements above!', 'color: #bb86fc; font-weight: bold');