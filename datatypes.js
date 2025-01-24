// In JavaScript, values can be classified into two main categories: **primitive types** and **non-primitive types**. Here’s a breakdown of the differences between them along with examples:

// ### Primitive Types

// Primitive types are the most basic data types in JavaScript. They are immutable (cannot be changed), and they hold a single value. The primitive types in JavaScript are:

// 1. **String**: Represents text data.
//    javascript
//    let name = "Alice";
//    

// 2. **Number**: Represents numeric values (both integers and floats).
//    javascript
//    let age = 30;
//    let price = 19.99;
//    

// 3. **Boolean**: Represents a logical entity and can be either `true` or `false`.
//    javascript
//    let isStudent = true;
//    

// 4. **Undefined**: A variable that has been declared but not assigned a value.
//    javascript
//    let notAssigned;
//    

// 5. **Null**: Represents an intentional absence of any object value.
//    javascript
//    let emptyValue = null;
//    

// 6. **Symbol**: A unique and immutable value primarily used as object property keys.
//    javascript
//    let uniqueKey = Symbol('key');
//    

// 7. **BigInt**: Represents integers with arbitrary precision.
//    javascript
//    let bigNumber = 1234567890123456789012345678901234567890n;
//    

// ### Non-Primitive Types

// Non-primitive types (also known as reference types) are more complex data structures that can hold collections of values or more complex entities. They are mutable (can be changed) and include:

// 1. **Object**: A collection of properties (key-value pairs).
//    javascript
//    let person = {
//        name: "Bob",
//        age: 25
//    };
//    

// 2. **Array**: A special type of object that holds ordered collections of values.
//    javascript
//    let fruits = ["apple", "banana", "cherry"];
//    

// 3. **Function**: A block of code that can be called and executed.
//    javascript
//    function greet() {
//        console.log("Hello!");
//    }
//    

// 4. **Date**: Represents dates and times.
//    javascript
//    let now = new Date();
//    

// ### Key Differences

// 1. **Mutability**:
//    - **Primitive**: Immutable (e.g., strings cannot be changed once created).
//    - **Non-Primitive**: Mutable (e.g., you can change properties of an object).

// 2. **Storage**:
//    - **Primitive**: Stored directly in the variable (value).
//    - **Non-Primitive**: Stored as a reference (the variable holds a reference to the object).

// 3. **Equality**:
//    - **Primitive**: Compared by value. 
//      javascript
//      let x = 10;
//      let y = 10;
//      console.log(x === y); // true
//      
//    - **Non-Primitive**: Compared by reference.
//      javascript
//      let obj1 = { key: "value" };
//      let obj2 = { key: "value" };
//      console.log(obj1 === obj2); // false
//      

// Understanding these differences is essential for effective programming in JavaScript, as it impacts how data is managed and manipulated within applications.


// *********************************************************************************************************


// Certainly! Let’s delve deeper into the concepts of immutability in primitive types and mutability in non-primitive types in JavaScript, along with detailed examples.

// ### Primitive Types: Immutability

// Primitive types in JavaScript are immutable, meaning that once a primitive value is created, it cannot be changed. If you attempt to change it, a new value is created instead.

// #### Example with Strings (a Primitive Type)

// javascript
// let greeting = "Hello, world!";
// console.log(greeting); // Output: "Hello, world!"

// // Attempting to change the string
// greeting[0] = "h"; // This will not change the original string
// console.log(greeting); // Output: "Hello, world!"

// // Instead, you can create a new string
// greeting = "hello, world!";
// console.log(greeting); // Output: "hello, world!"


// In this example, when we try to change the first character of the string `greeting`, it does not modify the original string. Instead, JavaScript creates a new string with the change when we assign it back to `greeting`. The original string remains unchanged.

// ### Non-Primitive Types: Mutability

// Non-primitive types, like objects and arrays, are mutable, which means you can change their properties or elements without creating a new instance.

// #### Example with Objects (a Non-Primitive Type)

// javascript
// let person = {
//     name: "Alice",
//     age: 30
// };

// console.log(person); // Output: { name: "Alice", age: 30 }

// // Changing a property of the object
// person.age = 31; 
// console.log(person); // Output: { name: "Alice", age: 31 }

// // Adding a new property
// person.city = "New York";
// console.log(person); // Output: { name: "Alice", age: 31, city: "New York" }

// // Deleting a property
// delete person.name;
// console.log(person); // Output: { age: 31, city: "New York" }


// In this example, we can directly modify the `person` object. We changed the `age` property, added a new `city` property, and even deleted the `name` property without needing to create a new object.

// ### Summary of Differences

// 1. **Immutability (Primitive)**:
//    - When you manipulate a primitive value, you create a new value.
//    - Example: Strings cannot be altered directly; any modification results in a new string.

// 2. **Mutability (Non-Primitive)**:
//    - You can directly change, add, or delete properties of non-primitive objects or arrays.
//    - Example: You can change the properties of an object without creating a new object.

// Understanding these concepts helps you manage state and data in your applications effectively. Mutable objects allow for flexibility and dynamic changes, while immutable primitives ensure consistency and predictability in your code.