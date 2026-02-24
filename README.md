Answers to Questions

 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

getElementById selects one element using an id.

getElementsByClassName selects many elements using a class name.

querySelector selects the first element that matches a CSS selector.

querySelectorAll selects all elements that match a CSS selector.


 2. How do you create and insert a new element into the DOM?

First, we create an element using document.createElement().

Then we add text or content inside it.

After that, we insert it into the page using appendChild() or append().


 3. What is Event Bubbling?

Event bubbling means when we click on a child element, the event also goes to its parent element.

For example, if we click a button inside a div, the div can also receive the click event.


 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation means adding one event listener to a parent element instead of adding many listeners to child elements.

It is useful because it saves memory and works for elements that are created later using JavaScript.


 5. What is the difference between preventDefault() and stopPropagation()?

preventDefault() stops the default action of an element, like stopping a form from submitting.

stopPropagation() stops the event from moving to parent elements.
