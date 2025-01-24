// Here’s a concise list of **looping** and **conditional statements** in JavaScript with simple examples to help you get started.

// **********************************************************************************************

// ## **1. Conditional Statements**

// ### **if Statement**  
// Executes code if the condition is true.  

// ```javascript
// let age = 18;
// if (age >= 18) {
//   console.log("You are an adult.");
// }

// let age2 = 28;
// if (age2 >= 20) {
//     console.log("you are eligible to vote");
//     }

// ```

// **********************************************************************************************
// ### **if-else Statement**  
// Provides an alternative block if the condition is false.

// ```javascript
// let age = 16;
// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }
// ```

// **********************************************************************************************
// ### **if-else if-else Statement**  
// Tests multiple conditions.

// ```javascript
// let score = 75;
// if (score >= 90) {
//   console.log("A grade");
// } else if (score >= 75) {
//   console.log("B grade");
// } else {
//   console.log("C grade");
// }
// ```

// **********************************************************************************************
// ### **switch Statement**  
// Selects code to execute based on matching cases.

// ```javascript

// let fruit = "apple";
// switch (fruit) {
//   case "banana":
//     console.log("I like bananas.");
//     break;
//   case "apple":
//     console.log("I like apples.");
//     break;
//   default:
//     console.log("I like all fruits.");
// }
// ```

// ---

// **********************************************************************************************
// ## **2. Looping Statements**

// ### **for Loop**  
// Repeats code a specific number of times.

// ```javascript
// for (let i = 1; i <= 5; i++) {
//   console.log("Number:", i);
// }
// ```

// ### **while Loop**  
// Repeats code while the condition is true.

// ```javascript
// let count = 1;
// while (count <= 5) {
//   console.log("Count:", count);
//   count++;
// }
// ```

// **********************************************************************************************
// ### **do-while Loop**  
// Executes the code block at least once, even if the condition is false.

// ```javascript
// let number = 6;
// do {
//   console.log("Number is:", number);
//   number++;
// } while (number <= 5);
// ```

// **********************************************************************************************
// ### **for...of Loop**  
// Loops through elements of an iterable (like arrays).

// ```javascript
// let colors = ["red", "green", "blue"];
// for (let color of colors) {
//   console.log(color);
// }
// ```

// **********************************************************************************************
// ### **for...in Loop**  
// Loops through the properties of an object.

// ```javascript
// let person = { name: "John", age: 25, city: "New York" };
// for (let key in person) {
//   console.log(key + ":", person[key]);
// }
// ```

// ---

// **********************************************************************************************
// ## **break and continue Statements**  
// - **`break`**: Exits the loop immediately.
// - **`continue`**: Skips the current iteration and moves to the next.

// ### Example with `break`:
// ```javascript
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) break;
//   console.log(i);  // 1, 2
// }
// ```

// **********************************************************************************************
// ### Example with `continue`:
// ```javascript
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);  // 1, 2, 4, 5
// }
// ```

// ---

// This should give you a solid understanding of how to use conditional and looping statements in JavaScript with examples!