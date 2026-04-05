// CH11: OOP Logic Engine
console.log('%c🏗️ OOP Engine: Active', 'color: #00bcd4; font-weight: bold;');

function writeOOP(id, text) {
    const area = document.getElementById(id);
    const p = document.createElement('p');
    p.style.color = "#00bcd4";
    p.style.margin = "5px 0";
    p.innerHTML = `>> ${text}`;
    area.appendChild(p);
}

// 1. CONSTRUCTOR FUNCTION (The Old Way)
function User(name, level) {
    this.username = name;
    this.level = level;
    this.login = function() {
        return `${this.username} logged in at level ${this.level}`;
    };
}

function demoConstructor() {
    const area = document.getElementById('out1');
    area.innerHTML = "<h3>Output: Constructor</h3>";
    
    const dev1 = new User("Mark", 99);
    const dev2 = new User("Sarah", 50);
    
    writeOOP('out1', dev1.login());
    writeOOP('out1', dev2.login());
}

// 2. CLASSES & CONSTRUCTORS (The Modern Way)
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDetails() {
        return `${this.name} costs $${this.price}`;
    }
}

function demoClass() {
    const area = document.getElementById('out2');
    area.innerHTML = "<h3>Output: Classes</h3>";
    
    const laptop = new Product("RTX Laptop", 1500);
    writeOOP('out2', laptop.getDetails());
}

// 3. ENCAPSULATION (Private Fields)
class BankAccount {
    #balance = 1000; // PRIVATE FIELD

    deposit(amount) {
        this.#balance += amount;
        return `Deposited $${amount}`;
    }

    getBalance() {
        return `Current Balance: $${this.#balance}`;
    }
}

function demoPrivate() {
    const area = document.getElementById('out3');
    area.innerHTML = "<h3>Output: Security</h3>";
    
    const myAcc = new BankAccount();
    writeOOP('out3', myAcc.deposit(500));
    writeOOP('out3', myAcc.getBalance());
    writeOOP('out3', "Attempting to access #balance directly...", true);
    writeOOP('out3', `Result: ${myAcc.balance} (Undefined - Safe!)`);
}

// 4. INHERITANCE (Extends & Super)
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() { return `${this.name} is eating...`; }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Must call parent constructor!
        this.breed = breed;
    }
    bark() { return `Woof! I am a ${this.breed}`; }
}

function demoInheritance() {
    const area = document.getElementById('out4');
    area.innerHTML = "<h3>Output: Family Tree</h3>";
    
    const myDog = new Dog("Rex", "Golden Retriever");
    writeOOP('out4', myDog.eat()); // Inherited
    writeOOP('out4', myDog.bark()); // Specific to Dog
}

// 5. POLYMORPHISM
class Shape {
    draw() { return "Drawing a generic shape"; }
}

class Circle extends Shape {
    draw() { return "Drawing a perfect CIRCLE ◯"; } // Overriding parent
}

class Square extends Shape {
    draw() { return "Drawing a solid SQUARE ▢"; } // Overriding parent
}

function demoPoly() {
    const area = document.getElementById('out5');
    area.innerHTML = "<h3>Output: Sounds</h3>";
    
    const shapes = [new Circle(), new Square(), new Shape()];
    shapes.forEach(s => {
        writeOOP('out5', s.draw());
    });
}