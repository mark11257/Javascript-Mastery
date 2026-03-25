
// CH10 Events - Mouse, Keyboard, Form Events Examples

// Mouse Events - run this in a HTML page with buttons/images
document.addEventListener('click', function(e) {
  console.log('Mouse clicked at:', e.clientX, e.clientY);
});

// Mouse over/out example
var button = document.getElementById('myButton'); // assume <button id="myButton">Hover me</button>
button.addEventListener('mouseover', function() {
  this.style.backgroundColor = 'orange'; // change color on hover
});
button.addEventListener('mouseout', function() {
  this.style.backgroundColor = 'white'; // reset color
});

// Keyboard Events
document.addEventListener('keydown', function(e) {
  console.log('Key pressed:', e.key, 'Code:', e.code);
  if (e.key === 'Escape') {
    console.log('ESC pressed - closing menu');
  }
});

// Form Events
var form = document.getElementById('myForm'); // assume <form id="myForm">
form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent form submission
  console.log('Form submitted!');
});

var input = document.getElementById('myInput'); // assume <input id="myInput">
input.addEventListener('focus', function() {
  console.log('Input focused');
});
input.addEventListener('blur', function() {
  console.log('Input blurred');
});

// Change event
input.addEventListener('change', function() {
  console.log('Input value changed to:', this.value);
});

console.log('Event examples loaded - open console to see!');

// Dropdown properties

function displayInfo(){
    var menu = document.querySelector(".menu");
    var btn1 = document.querySelector(".btn1");
    var value = document.querySelector(".value");
    var text = document.querySelector(".text");
}
