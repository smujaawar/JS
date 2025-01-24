// __________________________________07/10/2024


// let a=20;
// let b=50;
//  a=b;
//  console.log(a);


//  let ab={
//     name:"sameer",
//     address:"bangalore",
//  }

//  let ba={
// name:"aamer",
// address:"raichur"
//  }

//  ab.name=ba.name
//  ab.address=ba.address 

//  console.log(ab);

//  _________________________________________________________________08/10/2024

// The ternary operator in JavaScript is a concise way to perform conditional expressions. 
// It has the following syntax:

// javascript
// condition ? expressionIfTrue : expressionIfFalse;
// ```

// ### Example

// Here's a simple example that demonstrates how to use the ternary operator:

// javascript
// let age = 18;

// let canVote = age >= 18 ? "You can vote." : "You cannot vote.";

// console.log(canVote); // Output: You can vote.

// let agee = 18; 

// let canVotee = agee >= 18 ? "YOu can vote." : "You cannot vote";


// let ageee = 10;

// let canVoteee = ageee >= 20 ? "You can vote." : "You cannot vote";
// console.log(canVote);


// ```

// ### Explanation

// - **Condition**: `age >= 18` checks if the age is 18 or older.
// - **If true**: If the condition is true, it returns `"You can vote."`.
// - **If false**: If the condition is false, it returns `"You cannot vote."`.

// ### Another Example with Function

// You can also use the ternary operator in functions:

// ```javascript
// function checkEvenOrOdd(number) {
//     return number % 2 === 0 ? "Even" : "Odd";
// }

// console.log(checkEvenOrOdd(4)); // Output: Even
// console.log(checkEvenOrOdd(5)); // Output: Odd


// let student = 83;

// let  result = student <=0 ?  "enter a valid percentage" : student < 30 ? "Fail" : student <= 50 ? "2nd class" : student <=70 ? "1st class" : 
// student <= 85 ? "distinction" : student <=100 ? "outstanding" : student >100 ? "enter valid percentage" : "";

// console.log(result);




// In this function, the ternary operator checks if a number is even or odd and returns the appropriate string.


// ____________Logical operators___________________
// && ( and) || (or)  !(not)

// let res = ((20 == 40)) && ((10<5)) ? ture  : false;

// const myObj = {
//    course1 : "html",
//    course2 : "css",
//    course3 : "javaScript"
// }


// const myObject = new Object ();
// myObject.name = "Sameer",
// myObject.age = "27"

// console.log(myObj);




// const myArray = ["hello", 45 , 45, {name:"sameer", age:27}]
// console.log(myArray [1], "this is my obj in array");

// ________________________________________________09/10/2024


// In JavaScript, a function is a block of code designed to perform a particular task. Functions can take inputs (known as parameters), execute code, and return outputs. They are essential for organizing and reusing code.

// ### Types of Functions in JavaScript

// 1. **Function Declarations**:
//    ```javascript
//    function greet(name) {
//        return `Hello, ${name}!`;
//    }
//    ```
//    - Defined using the `function` keyword.
//    - Can be called before they are defined due to hoisting.

// 2. **Function Expressions**:
//    ```javascript
//    const greet = function(name) {
//        return `Hello, ${name}!`;
//    };
//    ```
//    - Functions assigned to variables.
//    - Not hoisted, so they must be defined before they are called.

// 3. **Arrow Functions**:
//    ```javascript
//    const greet = (name) => {
//        return `Hello, ${name}!`;
//    };
//    ```
//    - A more concise syntax for writing functions.
//    - Does not have its own `this`, which can be beneficial in certain contexts.

// 4. **Anonymous Functions**:
//    ```javascript
//    setTimeout(function() {
//        console.log("Time's up!");
//    }, 1000);
//    ```
//    - Functions without a name, often used as arguments for other functions.

// 5. **Immediately Invoked Function Expressions (IIFE)**:
//    ```javascript
//    (function() {
//        console.log("I am executed immediately!");
//    })();
//    ```
//    - A function that runs as soon as it is defined.

// 6. **Higher-Order Functions**:
//    ```javascript
//    function applyFunction(fn, value) {
//        return fn(value);
//    }
//    ```
//    - Functions that take other functions as arguments or return functions.

// ### Function Properties

// - **Parameters**: Input values for the function.
// - **Return Value**: The output value that the function produces.
// - **Scope**: Functions create their own scope, which helps with variable management.

// ### Example

// Here’s a simple example that incorporates a few types of functions:

// ```javascript
// // Function Declaration
// function add(a, b) {
//     return a + b;
// }

// // Function Expression
// const multiply = function(a, b) {
//     return a * b;
// };

// // Arrow Function
// const subtract = (a, b) => a - b;

// // Usage
// console.log(add(5, 3));      // Output: 8
// console.log(multiply(5, 3)); // Output: 15
// console.log(subtract(5, 3)); // Output: 2
// ```

// Functions in JavaScript are versatile and foundational for building complex applications, making them a core concept to understand.



// function addFunction1() {
//    const res = 10 + 20;
//    return res;
// }
// console.log(addFunction1());




// function addFunction2(val) {
//    const res2 = val + val;
//    return res2;
// }
// console.log(addFunction2(20));




// const addfn3 = function (val) {
//    const res3 = val + 20;
//    return res3;
// }
// console.log(addfn3(5));


// const addfn4 = (val) => {
//    const res4 = val + 40;
//    return res4;
// }
// console.log(addfn4(10));


// function a() {
//    let a = 20;
//    function b() {
//       console.log(a);
//       return b;
//    }
//    b();
// }
// a();


// function myFn (val){
//    let a = val + 10;
//    let b = val + 20; 
//    let c = val + 30;
// return a + b + c 
// }

// console.log(myFn(10));


// .........Array

// push method
// let myArr1 = [ 1,2,3,4,5,6,7]

// let updateArr1 = myArr1.push(1,2,3)

// console.log(myArr1);


// pop method
// let myArr2 = [ 1,2,3,4,5,6,7]

// let updateArr2 = myArr2.pop()

// console.log(myArr2);

//shift
// let myArr2 = [ 1,2,3,4,5,6,7]

// let updateArr2 = myArr2.shift()

// console.log(myArr2);


//unshift
// let myArr2 = [ 1,2,3,4,5,6,7]

// let updateArr2 = myArr2.unshift(10)

// console.log(myArr2);


// let myArr2 = [ 1,2,3,4,5,6,7]
// let arr2 = [9,8,9]
// let updateArr2 = myArr2.concat(myArr2 , arr2)

// console.log(updateArr2);



//Reduce Method

// let arr = [ 1,2,3,4]

// const add = (acc, current) => acc + current;

// arr.reduce( add , 0 );

// let res = arr.reduce(add, 0)

// console.log(res + " is my value" );


let arr = [1,2,3,4]

let res = arr.reduce((acc,current) => acc + current , 3);

console.log(res);





//Types of Functions in JavaSCript

// 1.Named Functions

// function greet() {
//     console.log("Hello, World!");
// }
// greet();


// 2.Anonymous Functions

// setTimeout(function() {
//     console.log("This will be logged after 2 seconds.");
//   }, 2000);
  

// 3.Higher-Order Functions

// function higherOrder(fn) {
//     return fn();
// }
// higherOrder(() => console.log("Higher-Order Function!"));

// 4.Function Expression

// const square = function(number) {
//     return number * number;
//   }
//   console.log(square(4));
  

// 5.Arrow Functions

// const add = (a, b) => {
//     return a + b;
//   };
//   console.log(add(10,20));
  
//  6.Callback Functions

// function fetchData(callback) {
//     // Simulate fetching data
//     setTimeout(() => {
//       const data = "Data from server";
//       callback(data);
//     }, 2000);
//   }
  
//   fetchData(data => {
//     console.log(data);
//   });
  
  

  
  


  




