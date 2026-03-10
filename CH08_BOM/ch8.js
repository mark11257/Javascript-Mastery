/*Browser Object Model (BOM) is a collection of objects that allow 
JavaScript to interact with the web browser and its environment,
 beyond the content of the web page itself */
 


 // location object - gives info about current page URL
console.log(location.href);       // full URL
console.log(location.hostname);   // domain name
console.log(location.pathname);   // path after domain
console.log(location.protocol);   // http or https

 // navigator object - gives info about the browser
console.log(navigator.userAgent);  // browser details
console.log(navigator.language);  // browser language
console.log(navigator.onLine);    // is browser online

 // window object - represents the browser window
console.log(window.innerWidth);   // window width
console.log(window.innerHeight);  // window height
window.alert("Hello from BOM");   // show alert
console.log(window.document);     // access to document

 // history object - manages browser history
console.log(history.length);      // number of pages in history
// history.back();                 // go to previous page
// history.forward();              // go to next page
// history.go(-1);                 // go back 1 page
