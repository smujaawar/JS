// In JavaScript, a **synchronous program** executes tasks one after the other, blocking further execution until the current task is complete. To improve efficiency, we can make programs **asynchronous**. 

// Here are **4 common ways** to make JavaScript programs asynchronous:

// ---

// ## **1. Using `setTimeout()`**
// The `setTimeout()` function executes code **after a specified delay**, allowing the rest of the code to continue running.

// ### Example:
// ```javascript
// console.log("Start");

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");
// ```

// **Output:**
// ```
// Start
// End
// This runs after 2 seconds
// ``` 

// **Explanation:**  
// - The code inside `setTimeout()` runs after 2 seconds, while the rest of the code continues executing.

// ---

// ## **2. Using `setInterval()`**
// The `setInterval()` function repeatedly calls a function at a specified interval.

// ### Example:
// ```javascript
// let counter = 0;
// const intervalId = setInterval(() => {
//   counter++;
//   console.log(`Counter: ${counter}`);
//   if (counter === 5) {
//     clearInterval(intervalId);  // Stop the interval
//   }
// }, 1000);
// ```

// **Output:**
// ```
// Counter: 1
// Counter: 2
// Counter: 3
// Counter: 4
// Counter: 5
// ```

// **Explanation:**  
// - `setInterval()` executes the callback every second until `clearInterval()` stops it.

// ---

// ## **3. Using Promises**  
// A **Promise** is an object representing a value that may be available now, later, or never. It allows non-blocking execution and better error handling.

// ### Example:
// ```javascript
// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Data fetched successfully!");
//     }, 2000);
//   });
// }

// console.log("Fetching data...");
// fetchData().then((message) => console.log(message));
// ```

// **Output:**
// ```
// Fetching data...
// Data fetched successfully!
// ```

// **Explanation:**  
// - `fetchData()` returns a Promise, and `then()` handles the resolved value once the operation completes after 2 seconds.

// ---

// ## **4. Using `async` and `await`**  
// The `async`/`await` syntax makes working with promises easier by writing asynchronous code as if it were synchronous.

// ### Example:
// ```javascript
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data fetched!");
//     }, 2000);
//   });
// }

// async function getData() {
//   console.log("Fetching...");
//   const data = await fetchData();
//   console.log(data);
// }

// getData();
// ```

// **Output:**
// ```
// Fetching...
// Data fetched!
// ```

// **Explanation:**  
// - The `await` keyword pauses the execution of `getData()` until `fetchData()` resolves, but the main thread isn't blocked.

// ---

// ## **Summary Table**

// | **Method**         | **Description**                                        | **Use Case**                            |
// |--------------------|--------------------------------------------------------|-----------------------------------------|
// | `setTimeout()`     | Delays execution of code by a given time               | Delayed actions or animations          |
// | `setInterval()`    | Repeats code at regular intervals                      | Timers or periodic updates             |
// | **Promises**       | Handles async operations with resolve/reject callbacks | Network requests or file operations    |
// | **async/await**    | Simplifies promise-based code                          | Fetching data or sequential async code |

// ---

// These methods make it easy to perform tasks **asynchronously** without blocking other operations. Let me know if you need further clarification!