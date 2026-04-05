// CH03: Functions - Button-triggered demos
console.log('%c🚀 CH3 LOADED - Click buttons for function demos!', 'color: #f39c12; font-size: 16px;');

// Demo functions for HTML buttons
function showFunctionTypes() {
    const output = document.querySelector('.value1');
    output.innerHTML = `📝 Function Types Demo:
Declaration: ${greet('User')}
Expression: ${add(5, 3)}
Arrow: ${multiply(4, 6)}
    
✅ All 3 types work!

F12 Console → Full execution trace`;
}



function showDefaultParams() {
    const output = document.querySelector('.value2');
    function welcome(user = 'Guest', time = 'day') {
        return `Good ${time}, ${user}!`;
    }
    output.innerHTML = `⚙️ Default Parameters:
Default: ${welcome()}
Partial: ${welcome('Mark')}
Full: ${welcome('Mark', 'evening')}

✅ Defaults work automatically!

F12 → Console details`;
}


function showScope() {
    console.group('%c🌍 Scope & Shadowing', 'color: #3498db; font-size: 16px;');
    
    let globalVar = 'global';
    
    function outer() {
        let outerVar = 'outer';
        console.log('Global:', globalVar);
        console.log('Outer:', outerVar);
        
        function inner() {
            let innerVar = 'inner';
            let outerVar = 'shadowed'; // Shadowing!
            console.log('Inner:', innerVar);
            console.log('Shadowed outerVar:', outerVar);
        }
        inner();
    }
    outer();
    
    console.groupEnd();
}

function showCallApplyBind() {
    console.group('%c🔗 call/apply/bind', 'color: #2ecc71; font-size: 16px;');
    
    function introduce(age, city) {
        console.log(`Hi, I'm ${this.name}, ${age} years old from ${city}`);
    }
    
    const person = { name: 'Alice' };
    
    introduce.call(person, 25, 'NYC');
    introduce.apply(person, [30, 'LA']);
    
    const bound = introduce.bind(person, 35, 'SF');
    bound();
    
    console.groupEnd();
}

function showIIFEClosure() {
    console.group('%c🔒 IIFE & Closure', 'color: #e67e22; font-size: 16px;');
    
    // IIFE
    (function() {
        console.log('IIFE runs immediately!');
    })();
    
    // Closure
    function counter() {
        let count = 0;
        return function() {
            count++;
            console.log('Count:', count);
        }
    }
    const myCounter = counter();
    myCounter();
    myCounter();
    
    console.groupEnd();
}

// Ready message
setTimeout(() => {
    console.log('%c✅ CH3 Functions ready! Click HTML buttons!', 'color: #27ae60; font-size: 14px;');
}, 500);

