// What is the difference between addEventListener and inline event handling?
// Answer:

// addEventListener: This method allows you to attach multiple event listeners to the same element for the same event type without overwriting existing ones. It keeps JavaScript separate from HTML, which is a good practice for maintainability.

// Example:



button.addEventListener('click', function() {
    console.log('First listener');
});
button.addEventListener('click', function() {
    console.log('Second listener');
});



// Inline event handling: This method involves writing JavaScript directly within HTML attributes (e.g., onclick). It makes the code less maintainable and can lead to issues with reusability.

// Example:


<button onclick="alert('Button clicked!')">Click Me!</button>