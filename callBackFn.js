// ### **What is a Callback Function?**  

// In JavaScript, a **callback function** is a function that is **passed as an argument** to another function and is **executed after the parent function completes** its task.  

// Callbacks are often used in **asynchronous operations** like fetching data, timers, or event handling.

// ---

// ### **Basic Example of a Callback Function**

// ```javascript
// function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback();  // Call the passed function
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// // Passing `sayGoodbye` as a callback to `greet`
// greet("Alice", sayGoodbye);
// ```

// **Output:**
// ```
// Hello, Alice!
// Goodbye!
// ```

// **Explanation:**  
// - `greet` is a function that takes two arguments: a `name` and a `callback` function.
// - After greeting the user, it **executes the callback function** (`sayGoodbye`).
// - This pattern ensures that **one function runs after another**.

// ---

// ### **Callback Example with `setTimeout` (Asynchronous Example)**

// ```javascript
// console.log("Start");

// setTimeout(function () {
//   console.log("This message is delayed by 2 seconds.");
// }, 2000);  // Runs the callback after 2 seconds

// console.log("End");
// ```

// **Output:**
// ```
// Start
// End
// This message is delayed by 2 seconds.
// ```

// **Explanation:**  
// - `setTimeout` takes a function (callback) and a delay in milliseconds.
// - The callback function runs **after the specified delay**, but the rest of the code continues to execute.

// ---

// ### **Example: Array Method Using Callback – `forEach`**

// ```javascript
// let numbers = [1, 2, 3, 4];

// numbers.forEach(function (number) {
//   console.log(number * 2);
// });
// ```

// **Output:**
// ```
// 2
// 4
// 6
// 8
// ```

// **Explanation:**  
// - The `forEach` method takes a **callback function** and applies it to each element of the array.

// ---

// ### **Why Use Callbacks?**  
// - Callbacks ensure that **certain code only runs after another operation completes**.
// - Useful in **asynchronous programming** to avoid blocking the main thread.

// Let me know if you'd like further examples or more detailed explanations!