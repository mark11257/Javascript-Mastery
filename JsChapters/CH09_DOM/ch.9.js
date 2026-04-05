// DOM

// selecting element from DOM
    // by  ID
    var elem = document.getElementById("firsth");
    console.log(elem);

    // by class
    var elem = document.getElementsByClassName("ht1");
    console.log(elem);

    // by tagname
    var elem = document.getElementsByTagName("div");
    console.log(elem);

    // or unified selector to get by class or id
    var elem =  document.querySelector(".ht1"); // use . for class
    console.log(elem);

    var elem = document.querySelector("#firsth"); // ise # for id
    console.log(elem);

    // innerHTML
    elem.innerHTML = "<b>test InnerHTML</b>"; //can write html in
    elem.innerText = "<b>test InnerHTML</b>";// deals with it as literal string.

    // creating nodes - create new HTML elements
    var newDiv = document.createElement("div"); // create new div element
    newDiv.innerText = "I am a new div";        // add text content
    newDiv.className = "new-class";             // add CSS class
    document.body.appendChild(newDiv);          // add to end of body

    // appendchild() - adds element as last child of parent
    var parent = document.getElementById("firsth");
    var child = document.createElement("p");
    child.innerText = "New paragraph";
    parent.appendChild(child);

    // insertBefore() - adds element before specified child
    var refChild = parent.firstChild;
    var newChild = document.createElement("span");
    newChild.innerText = "Inserted before";
    parent.insertBefore(newChild, refChild);

// dom collection accessing methods
    // getElementsByName - get elements by name attribute
    var items = document.getElementsByName("username");
    console.log(items);

    // children - get child elements only (not text nodes)
    var children = parent.children;
    console.log(children);

    // firstChild / lastChild - get first/last child
    console.log(parent.firstChild);
    console.log(parent.lastChild);

    // nextSibling / previousSibling - get adjacent siblings
    console.log(elem.nextSibling);
    console.log(elem.previousSibling);

// form collection and elements collection calling inside each form
    // forms collection - access all forms in page
    var firstForm = document.forms[0];          // first form
    var formByName = document.forms["myForm"];   // form by name
    console.log(firstForm);

    // elements collection - access form inputs
    var input = firstForm.elements[0];              // first input
    var inputByName = firstForm.elements.username;  // input by name
    console.log(input.value);                        // get input value
    input.value = "new value";                      // set input value

