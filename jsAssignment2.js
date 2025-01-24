

//********************************JS2 Assignment Start*****************************************

// ### 1. **Converting Kilometers to Miles and Celsius to Fahrenheit**  
//
// // Kilometers to Miles
// function kmToMiles(km) {
//     return km * 0.621371;
// }
// console.log(kmToMiles(5)); // Output: 3.106855

// // Celsius to Fahrenheit
// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }
// console.log(celsiusToFahrenheit(30)); // Output: 86
// 
// - **Explanation:** The formulas are directly applied for the conversions.

// ---

// ### 2. **Checking if a Number is Positive, Negative, or Zero**  
//
// function checkNumber(num) {
//     if (num > 0) return "Positive";
//     else if (num < 0) return "Negative";
//     else return "Zero";
// }
// console.log(checkNumber(-10)); // Output: Negative
// 
// - **Explanation:** We use `if-else` statements to check the number's nature.

// ---

// ### 3. **Generating a Random Number**  
//
// let randomNum = Math.floor(Math.random() * 100) + 1;
// console.log(randomNum); // Random number between 1 and 100
// 
// - **Explanation:** `Math.random()` generates a number between 0 and 1, which we scale and convert to an integer.

// ---

// ### 4. **Checking Odd/Even and Prime Numbers**  
//
// function isEven(num) {
//     return num % 2 === 0;
// }
// console.log(isEven(5)); // Output: false

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// console.log(isPrime(11)); // Output: true
// 
// - **Explanation:** `%` operator helps check even/odd. The prime number check uses a loop up to the square root for efficiency.

// ---

// ### 5. **Finding the Largest Number Among Three Numbers**  
//
// function largestOfThree(a, b, c) {
//     return Math.max(a, b, c);
// }
// console.log(largestOfThree(3, 7, 5)); // Output: 7
// 
// - **Explanation:** `Math.max()` finds the largest number among given values.

// ---

// ### 6. **Finding the Factorial of a Number**  
//
// function factorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     return fact;
// }
// console.log(factorial(5)); // Output: 120
// 
// - **Explanation:** We multiply numbers from 1 to `num` to get the factorial.

// ---

// ### 7. **Finding Armstrong Numbers in an Interval**  
//
// function isArmstrong(num) {
//     let sum = 0, temp = num, digits = String(num).length;
//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += Math.pow(digit, digits);
//         temp = Math.floor(temp / 10);
//     }
//     return sum === num;
// }

// function armstrongInRange(start, end) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//         if (isArmstrong(i)) result.push(i);
//     }
//     return result;
// }
// console.log(armstrongInRange(100, 999)); // Output: [153, 370, 371, 407]
// 
// - **Explanation:** Armstrong numbers are found by summing each digit raised to the power of the number of digits.

// ---

// ### 8. **Checking if Numbers Have the Same Last Digit**  
//
// function hasSameLastDigit(a, b) {
//     return a % 10 === b % 10;
// }
// console.log(hasSameLastDigit(123, 83)); // Output: true
// 
// - **Explanation:** We use the remainder `%` operator to compare the last digits.

// ---

// ### 9. **Checking if a String is a Palindrome**  
//
// function isPalindrome(str) {
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }
// console.log(isPalindrome("madam")); // Output: true
// 
// - **Explanation:** The string is reversed and compared with the original.

// ---

// ### 10. **Everything About Any String**  
//
// let str = "Hello World";
// console.log(str.length);            // Length of the string
// console.log(str.toUpperCase());     // Convert to uppercase
// console.log(str.toLowerCase());     // Convert to lowercase
// console.log(str.includes("World")); // Check if substring exists
// console.log(str.indexOf("o"));      // Find first occurrence of 'o'
// console.log(str.replace("World", "JS")); // Replace substring
// console.log(str.split(" "));        // Split by spaces
// 
// - **Explanation:** Shows different string operations.

// ---

// ### 11. **Finding Armstrong Numbers Between Intervals**  
// Refer to **point 7** (same logic).

// ---

// ### 12. **Finding Factors of a Number**  
//
// function findFactors(num) {
//     let factors = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) factors.push(i);
//     }
//     return factors;
// }
// console.log(findFactors(12)); // Output: [1, 2, 3, 4, 6, 12]
// 
// - **Explanation:** We find all numbers that divide `num` without a remainder.

// ---

// ### 13. **Printing Fibonacci Sequence**  
//
// function fibonacci(n) {
//     let seq = [0, 1];
//     for (let i = 2; i < n; i++) {
//         seq.push(seq[i - 1] + seq[i - 2]);
//     }
//     return seq;
// }
// console.log(fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
// 
// - **Explanation:** Each number is the sum of the two preceding ones.

// ---

// ### 14. **Replacing Characters of a String**  
//
// function replaceChar(str, oldChar, newChar) {
//     return str.split(oldChar).join(newChar);
// }
// console.log(replaceChar("apple", "p", "b")); // Output: "abble"
// 
// - **Explanation:** We replace characters by splitting and joining.

// ---

// ### 15. **Reversing Characters of a String**  
//
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("hello")); // Output: "olleh"
// 
// - **Explanation:** The string is split, reversed, and joined back.

// ---

// ### 16. **Sorting Words in Alphabetical Order**  
//
// function sortWords(str) {
//     return str.split(' ').sort().join(' ');
// }
// console.log(sortWords("banana apple cherry")); // Output: "apple banana cherry"
// 
// - **Explanation:** We split the words, sort them, and join them back.

// ---

// These are all concise, easy-to-understand JavaScript solutions! Let me know if you have questions or need further explanation.




// ********************************JS2 Assignment End*****************************************











// ********************************JS2 Assignment Practice Start*****************************************



// // // 1. Kilometers to Miles

// // function kmToMiles(km){
// //    return km * 0.621;
// // }
// // console.log("Kilometers to Miles");
// // console.log(kmToMiles(10));


// // // 1. Celsius to Fahrenheit

// // function CelToFar(celsius){
// //     return (celsius * 9/5) +32
// // }
// // console.log("Celsius to Fahrenheit");

// // console.log(CelToFar(28));


// // // 2. Checking if a Number is Positive, Negative, or Zero

// // function numb (num){
// //     if (num>0) return "Positive";
// //     if (num<0) return "Negative";
// // else return "Zero";
// // }
// // console.log("Checking if a Number is Positive, Negative, or Zero");

// // console.log(numb(25));

// // // 3. Generating a Random Number

// // function randomNum(){
// // return Math.ceil(Math.random() * 100);
// // }

// // console.log("Generating a Random Number");
// // console.log(randomNum());



// // 4. Checking Odd/Even and Prime Numbers

// // function EvenOdd (num){
// //     if (num % 2 == 0){

// //         console.log("The number is Even");
// //     }     
// //     else {
// //         console.log("The number is odd");
        
// //     }
// // }

// // EvenOdd(1684532587);



// // 5. Finding the Largest Number Among Three Numbers

// // function LargestNum (a,b,c,d,e){
// //  return Math.max (a,b,c,d,e)
// // }

// // console.log(LargestNum (15,75,8,68,21));
 

// // 6. Finding the Factorial of a Number

// // function factorial (num){
// //     let fact = 1;

// //     for (let i = 1 ; i<=num ; i++ )
// //     {
// //       fact = fact * i;
// //     }
// //     return  fact
// //     }
// // console.log(factorial(7));



// // function factorial (num){
// //     let fact = 1

// // for(let i=1;i<=num; i++)
// // {
// //     fact= fact*i
// // }
// // return fact
// // }

// // console.log(factorial (8));

// // 7. Finding Armstrong Numbers in an Interval

// function isArmstrong(num) {
//     let sum = 0, temp = num, digits = String(num).length;
//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += Math.pow(digit, digits);
//         temp = Math.floor(temp / 10);
//     }
//     return sum === num;
// }

// console.log(isArmstrong(153));
 

