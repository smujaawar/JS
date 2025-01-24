// ### **Date and Math Objects in JavaScript**  
// JavaScript provides two built-in objects:  
// 1. **Date Object** – for working with dates and time.  
// 2. **Math Object** – for performing mathematical operations.  

// Let’s go through them with simple examples.

// ---

// ## **1. Date Object**  
// The `Date` object allows you to work with dates and times. You can create a new date using:

// ```javascript
// let today = new Date(); // Current date and time
// console.log(today); // Example: 2024-10-14T12:34:56.789Z
// ```

// ### **Creating Date Instances**
// - **Empty Date (Current Date and Time):**
//   ```javascript
//   let now = new Date();
//   console.log(now);
//   ```

// - **Specific Date:**
//   ```javascript
//   let birthday = new Date(1998, 9, 5); // Oct is month 9 (0-based)
//   console.log(birthday); // 1998-10-05T00:00:00.000Z
//   ```

// - **Using a Date String:**
//   ```javascript
//   let dateFromString = new Date("2024-12-25");
//   console.log(dateFromString); // 2024-12-25T00:00:00.000Z
//   ```

// ### **Useful Methods of Date Object**
// ```javascript
// let now = new Date();

// console.log(now.getFullYear());  // Year (e.g., 2024)
// console.log(now.getMonth());     // Month (0 = January, 1 = February)
// console.log(now.getDate());      // Day of the month (1-31)
// console.log(now.getDay());       // Day of the week (0 = Sunday, 6 = Saturday)
// console.log(now.getHours());     // Hours (0-23)
// console.log(now.getMinutes());   // Minutes (0-59)
// console.log(now.getSeconds());   // Seconds (0-59)
// console.log(now.getTime());      // Milliseconds since Jan 1, 1970
// ```

// ### **Setting Date Values**
// ```javascript
// let date = new Date();
// date.setFullYear(2025);  // Change the year to 2025
// date.setMonth(11);        // Change month to December (11)
// console.log(date);        // Example: 2025-12-14T12:34:56.789Z
// ```

// ---

// ## **2. Math Object**  
// The `Math` object provides mathematical constants and functions. 

// ### **Math Constants**
// ```javascript
// console.log(Math.PI);      // 3.141592653589793
// console.log(Math.E);       // 2.718281828459045
// ```

// ### **Math Methods**

// 1. **Rounding Values**:
//    ```javascript
//    console.log(Math.round(4.7));   // 5 (rounds to the nearest integer)
//    console.log(Math.floor(4.9));   // 4 (rounds down)
//    console.log(Math.ceil(4.1));    // 5 (rounds up)
//    console.log(Math.trunc(4.9));   // 4 (removes decimal part)
//    ```

// 2. **Generating Random Numbers**:
//    ```javascript
//    console.log(Math.random());  // Random number between 0 and 1
//    console.log(Math.random() * 10);  // Random number between 0 and 10
//    ```

// 3. **Power and Square Root**:
//    ```javascript
//    console.log(Math.pow(2, 3));  // 8 (2^3)
//    console.log(Math.sqrt(16));   // 4 (square root of 16)
//    ```

// 4. **Max and Min**:
//    ```javascript
//    console.log(Math.max(1, 5, 3));  // 5 (largest number)
//    console.log(Math.min(1, 5, 3));  // 1 (smallest number)
//    ```

// 5. **Absolute Value and Sign**:
//    ```javascript
//    console.log(Math.abs(-42));   // 42 (absolute value)
//    console.log(Math.sign(-5));   // -1 (negative)
//    console.log(Math.sign(0));    // 0
//    console.log(Math.sign(7));    // 1 (positive)
//    ```

// 6. **Trigonometric Functions**:
//    ```javascript
//    console.log(Math.sin(Math.PI / 2));  // 1
//    console.log(Math.cos(0));            // 1
//    console.log(Math.tan(Math.PI / 4));  // 1
//    ```

// ---

// ### **Summary Table**

// | **Date Methods**               | **Description**                     |
// |---------------------------------|-------------------------------------|
// | `getFullYear()`                 | Get the 4-digit year               |
// | `getMonth()`                    | Get the month (0 = January)        |
// | `getDate()`                     | Get the day of the month (1-31)    |
// | `getHours()`                    | Get the hour (0-23)                |
// | `getTime()`                     | Get milliseconds since 1970        |

// | **Math Methods**                | **Description**                     |
// |---------------------------------|-------------------------------------|
// | `Math.round()`                  | Round to the nearest integer       |
// | `Math.floor()`                  | Round down                         |
// | `Math.ceil()`                   | Round up                           |
// | `Math.random()`                 | Generate random number (0-1)       |
// | `Math.pow()`                    | Raise to a power                   |
// | `Math.sqrt()`                   | Get the square root                |

// ---

// These examples should give you a good understanding of the `Date` and `Math` objects in JavaScript! Let me know if you need further clarification.