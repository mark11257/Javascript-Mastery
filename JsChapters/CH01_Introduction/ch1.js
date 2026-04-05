// CH01: Introduction - External JS + Console + Events
console.log('%c🚀 CH1 JavaScript LOADED!', 'color: green; font-size: 16px; font-weight: bold');

// Step 1: Add event listener to ALL .ht1 elements (external JS)
document.querySelectorAll('.ht1').forEach(header => {
    header.addEventListener('click', function() {
        alert('🎉 EXTERNAL JS Alert! Clicked via addEventListener from ch1.js');
        console.log('Header clicked - External event listener working!');
    });
});

// Step 2: Console demonstrations (Open F12 → Console!)
console.log('%c📱 Step 2: Console Methods Demo', 'color: blue; font-weight: bold');
const demoHeader = document.querySelector('.special-header');
console.debug('🔍 Debug:', demoHeader);
console.dir(demoHeader);
console.error('%c❌ ERROR Message (Yellow box)', 'color: white; background: red; padding: 2px');
console.warn('%c⚠️ WARN Message (Orange)', 'color: white; background: orange; padding: 2px');

// Step 3: Confirm everything loaded
console.log('%c✅ All CH1 demos ready! Click headers & check console.', 'color: green; font-size: 14px;');

