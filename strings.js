// Strings in JavaScript are a sequence of characters used to represent text. They can be created using single quotes (`'`), double quotes (`"`), or backticks (`` ` `` for template literals). Strings are immutable, meaning that once created, their values cannot be changed. However, you can perform various operations on strings using built-in methods.

// ### Common String Methods

// Here’s a list of common string methods along with simple examples for each:

// 1. **`length`**
//    - Returns the length of the string.
//    javascript
//    let str = "Hello, world!";
//    console.log(str.length); // Output: 13
   

// 2. **`charAt(index)`**
//    - Returns the character at the specified index.
//    javascript
//    let str = "Hello";
//    console.log(str.charAt(1)); // Output: "e"
   

// 3. **`toUpperCase()`**
//    - Converts the string to uppercase.
//    javascript
//    let str = "hello";
//    console.log(str.toUpperCase()); // Output: "HELLO"
   

// 4. **`toLowerCase()`**
//    - Converts the string to lowercase.
//    javascript
//    let str = "HELLO";
//    console.log(str.toLowerCase()); // Output: "hello"
   

// 5. **`substring(start, end)`**
//    - Extracts a substring from the string.
//    javascript
//    let str = "Hello, world!";
//    console.log(str.substring(0, 5)); // Output: "Hello"
   

// 6. **`indexOf(searchValue)`**
//    - Returns the index of the first occurrence of the specified value, or -1 if not found.
//    javascript
//    let str = "Hello, world!";
//    console.log(str.indexOf("world")); // Output: 7
   

// 7. **`lastIndexOf(searchValue)`**
//    - Returns the index of the last occurrence of the specified value.
//    javascript
//    let str = "Hello, world! Hello!";
//    console.log(str.lastIndexOf("Hello")); // Output: 14
   

// 8. **`replace(searchValue, newValue)`**
//    - Replaces the first occurrence of the specified value with a new value.
//    javascript
//    let str = "Hello, world!";
//    console.log(str.replace("world", "JavaScript")); // Output: "Hello, JavaScript!"
   

// 9. **`split(separator)`**
//    - Splits the string into an array of substrings based on a specified separator.
//    javascript
//    let str = "apple,banana,cherry";
//    console.log(str.split(",")); // Output: ["apple", "banana", "cherry"]
   

// 10. **`trim()`**
//     - Removes whitespace from both ends of the string.
//     javascript
//     let str = "   Hello, world!   ";
//     console.log(str.trim()); // Output: "Hello, world!"
    

// 11. **`startsWith(searchString)`**
//     - Checks if the string starts with the specified substring.
//     javascript
//     let str = "Hello, world!";
//     console.log(str.startsWith("Hello")); // Output: true
    

// 12. **`endsWith(searchString)`**
//     - Checks if the string ends with the specified substring.
//     javascript
//     let str = "Hello, world!";
//     console.log(str.endsWith("world!")); // Output: true
    

// 13. **`slice(start, end)`**
//     - Extracts a section of the string and returns it as a new string.
//     javascript
//     let str = "Hello, world!";
//     console.log(str.slice(7, 12)); // Output: "world"
    

// 14. **`includes(searchString)`**
//     - Checks if the string contains the specified substring.
//     javascript
//     let str = "Hello, world!";
//     console.log(str.includes("world")); // Output: true
    

// 15. **`repeat(count)`**
//     - Returns a new string with a specified number of copies of the original string.
//     javascript
//     let str = "abc";
//     console.log(str.repeat(3)); // Output: "abcabcabc"
    

// ### Summary

// Strings in JavaScript are versatile and come with numerous methods that allow you to manipulate and query them effectively. Understanding these methods will help you work with text data in your applications!






// ************************************ slice splice Difference****************************************






// In JavaScript, `slice` and `splice` are two different methods used for manipulating arrays (and strings in the case of `slice`). Here's a detailed comparison of the two:

// ### `slice`

// - **Purpose**: Used to create a shallow copy of a portion of an array (or a string) into a new array (or string) without modifying the original array.
// - **Syntax**: `array.slice(start, end)`
//   - **`start`**: The index at which to begin extraction (inclusive).
//   - **`end`**: The index at which to end extraction (exclusive). This parameter is optional; if omitted, it slices to the end of the array.
// - **Returns**: A new array (or string) containing the extracted elements.

// #### Example of `slice`

// ```javascript
// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// let citrus = fruits.slice(1, 3); // Extracts from index 1 to 2 (exclusive of index 3)
// console.log(citrus); // Output: ["banana", "cherry"]
// console.log(fruits); // Output: ["apple", "banana", "cherry", "date", "elderberry"] (original array unchanged)
// ```

// ### `splice`

// - **Purpose**: Used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// - **Syntax**: `array.splice(start, deleteCount, item1, item2, ...)`
//   - **`start`**: The index at which to start changing the array.
//   - **`deleteCount`**: The number of elements to remove from the array (if any).
//   - **`item1, item2, ...`**: Elements to add to the array, starting at the `start` index.
// - **Returns**: An array containing the removed elements (if any).

// #### Example of `splice`

// ```javascript
// let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// let removed = fruits.splice(1, 2, "orange", "kiwi"); // Starts at index 1, removes 2 elements, and adds "orange" and "kiwi"
// console.log(removed); // Output: ["banana", "cherry"]
// console.log(fruits); // Output: ["apple", "orange", "kiwi", "date", "elderberry"] (original array modified)
// ```

// ### Key Differences

// 1. **Functionality**:
//    - **`slice`**: Extracts a portion of the array (or string) without modifying the original.
//    - **`splice`**: Modifies the original array by removing or adding elements.

// 2. **Return Value**:
//    - **`slice`**: Returns a new array (or string) containing the sliced elements.
//    - **`splice`**: Returns an array of the removed elements.

// 3. **Parameters**:
//    - **`slice`**: Takes start and end indices.
//    - **`splice`**: Takes start index, number of elements to remove, and optional elements to add.

// ### Summary

// - Use **`slice`** when you want to create a new array (or substring) from a portion of an existing array (or string) without altering the original.
// - Use **`splice`** when you need to remove, replace, or add elements to an existing array.






// ********************************** substring and slice Difference*********************************





// In JavaScript, both `substring` and `slice` are methods used to extract portions of a string, but they have some differences in their behavior and usage. Here’s a detailed comparison:

// ### `substring()`

// - **Purpose**: Extracts characters from a string between two specified indices.
// - **Syntax**: `string.substring(startIndex, endIndex)`
//   - **`startIndex`**: The index at which to start extraction (inclusive).
//   - **`endIndex`**: The index at which to end extraction (exclusive). If omitted, it extracts to the end of the string.
// - **Behavior**: 
//   - If `startIndex` is greater than `endIndex`, `substring` swaps the two values.
//   - If either `startIndex` or `endIndex` is less than 0, it is treated as 0.
//   - If `endIndex` is greater than the string length, it is treated as the string length.

// #### Example of `substring`

// ```javascript
// let str = "Hello, world!";
// console.log(str.substring(0, 5)); // Output: "Hello"
// console.log(str.substring(7, 12)); // Output: "world"
// console.log(str.substring(5, 0));  // Output: "Hello" (swaps indices)
// ```

// ### `slice()`

// - **Purpose**: Extracts a section of a string and returns it as a new string.
// - **Syntax**: `string.slice(startIndex, endIndex)`
//   - **`startIndex`**: The index at which to start extraction (inclusive).
//   - **`endIndex`**: The index at which to end extraction (exclusive). If omitted, it extracts to the end of the string.
// - **Behavior**: 
//   - If `startIndex` is greater than `endIndex`, it returns an empty string.
//   - If either `startIndex` or `endIndex` is negative, it counts from the end of the string.
//   - If `startIndex` is negative and `endIndex` is omitted, it starts extraction from the negative index to the end of the string.

// #### Example of `slice`

// ```javascript
// let str = "Hello, world!";
// console.log(str.slice(0, 5));     // Output: "Hello"
// console.log(str.slice(7, 12));    // Output: "world"
// console.log(str.slice(5, 0));     // Output: "" (returns an empty string)
// console.log(str.slice(-6));       // Output: "world!" (counts from the end)
// ```

// ### Key Differences

// 1. **Index Handling**:
//    - **`substring`**: Swaps indices if `startIndex` is greater than `endIndex`, and does not handle negative indices.
//    - **`slice`**: Returns an empty string if `startIndex` is greater than `endIndex` and supports negative indices.

// 2. **Behavior with Negative Indices**:
//    - **`substring`**: Negative values are treated as 0.
//    - **`slice`**: Negative values count from the end of the string.

// 3. **Return Value**:
//    - Both methods return a new string, but their handling of indices affects the content of that string.

// ### Summary

// - Use **`substring`** when you want to extract a portion of a string and don’t need to handle negative indices or care about the order of the indices.
// - Use **`slice`** when you want more flexibility with negative indices and want to explicitly handle cases where the start index may be greater than the end index.