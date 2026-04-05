// CH03: Functions - Logic for HTML integration
console.log('%c🚀 CH3 LOADED - UI Output Ready!', 'color: #f39c12; font-size: 16px;');

// 1. Function Types
function showFunctionTypes() {
    const output = document.querySelector('.value1');
    output.classList.add('output-area'); // Apply your CSS styling
    
    // Internal helper functions for the demo
    const greet = (name) => `Hello, ${name}`;
    function add(a, b) { return a + b; }
    const multiply = function(a, b) { return a * b; };

    output.innerHTML = `📝 **Function Types Demo:**
Declaration: ${greet('User')}
Expression: ${add(5, 3)}
Arrow: ${multiply(4, 6)}
    
✅ All 3 types work!`;
}

// 2. Default Parameters
function showDefaultParams() {
    const output = document.querySelector('.value2');
    output.classList.add('output-area');

    function welcome(user = 'Guest', time = 'day') {
        return `Good ${time}, ${user}!`;
    }

    output.innerHTML = `⚙️ **Default Parameters:**
Default: ${welcome()}
Partial: ${welcome('Mark')}
Full: ${welcome('Mark', 'evening')}

✅ Defaults handled successfully!`;
}

// 3. Scope & Shadowing
function showScope() {
    const output = document.querySelector('.value3');
    output.classList.add('output-area');
    
    let result = "🌍 **Scope & Shadowing Trace:**\n";
    let globalVar = 'Global';
    
    function outer() {
        let outerVar = 'Outer';
        result += `Outer function sees: ${globalVar} and ${outerVar}\n`;
        
        function inner() {
            let innerVar = 'Inner';
            let outerVar = 'Shadowed'; // Shadowing
            result += `Inner function sees: ${innerVar}, ${globalVar}, and ${outerVar} (shadowed!)\n`;
        }
        inner();
    }
    outer();
    output.innerText = result;
}

// 4. call/apply/bind
function showCallApplyBind() {
    const output = document.querySelector('.value4');
    output.classList.add('output-area');
    
    let result = "🔗 **Method Binding Trace:**\n";
    
    function introduce(age, city) {
        result += `Hi, I'm ${this.name}, ${age} years old from ${city}\n`;
    }
    
    const person = { name: 'Alice' };
    
    introduce.call(person, 25, 'NYC');       // Immediate
    introduce.apply(person, [30, 'LA']);    // Immediate with Array
    
    const bound = introduce.bind(person, 35, 'SF'); // Creates new function
    bound();
    
    output.innerText = result;
}

// 5. IIFE & Closure
// We keep the counter outside so it persists between clicks
let globalCounterCount = 0; 

function showIIFEClosure() {
    const output = document.querySelector('.value5');
    output.classList.add('output-area');
    
    let result = "";

    // IIFE Demo
    const iifeResult = (function() {
        return "IIFE: I ran and disappeared immediately!\n";
    })();
    
    // Closure Demo
    globalCounterCount++;
    
    result = `🔒 **IIFE & Closure Demo:**\n${iifeResult}`;
    result += `Closure Counter: ${globalCounterCount}\n`;
    result += `(The variable 'count' stays alive in memory!)`;

    output.innerText = result;
}