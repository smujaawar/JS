
// *****************************************************************************************
// *****************************************************************************************


// 1. remove duplicate from array

// let arr=[10,11,11,12,13,13,14];   
// let uniqArr=[];
//  arr.forEach((ele) => {
//     if(!uniqArr.includes(ele)){
//         uniqArr.push(ele); 
//     }
// });
// console.log(uniqArr);

// *****************************************************************************************
// *****************************************************************************************

// 2. Check if a given string is a palindrome (reads the same forwards and backwards)

// var str="google";
// var flag= true;
// for (let i = 0; i < (str.length)/2; i++) {
//     if (str.charAt(i)!==str.charAt(str.length-1-i)) {
//         flag= false;
//         break;
//     }
// }
// if (flag) {
//     console.log("its palindrome")
// } else {
//     console.log("its not palindrome")
// }

// *****************************************************************************************
// *****************************************************************************************

// 3. Generate the first n numbers of the Fibonacci sequence.

// function fibonacci(n){
//     let fib =[0,1];
//     for (let i = 2; i < n; i++) {
//         fib.push(fib[i-2]+fib[i-1]);
//     }
//     return fib
// }
// console.log(fibonacci(5));

// *****************************************************************************************
// *****************************************************************************************

// 4. Find and return the largest number in an array.

// var arr =[43,56,64,75,66];
// var largest =arr.reduce((acc,next)=> arr>next ? acc : next );
// console.log(largest);


// var arr = [14,45,58,46,9,54]

// var largest = arr.reduce((acc,next) => acc>next ? acc : next);
// console.log(largest);



// *****************************************************************************************
// *****************************************************************************************

// 5. Implement the FizzBuzz logic: print numbers 1 to 100, but print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i," is FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log(i," is Fizz");
//     } else if (i % 5 === 0) {
//         console.log(i, " is Buzz");
//     } else {
//         console.log(i,' is None');
//     }
// }

// *****************************************************************************************
// *****************************************************************************************

// 6. Reverse the digits of a given integer while maintaining the sign.
// let num = -234;
// let str= num.toString();
// let reverse="";
// for(let i = str.length-1;i >=0;i--){
//     reverse+= str.charAt(i);
// }
// console.log(reverse);

// *****************************************************************************************
// *****************************************************************************************

// 7. Check if two given strings are anagrams (contain the same characters in a different order).

// var str1 = "dog";
// var str2 = "god";

// if (str1.length===str2.length) {
//   var arr1 = str1.split("");
//   var arr2 = str2.split("");

//   arr1.sort();
//   arr2.sort();

//   if (arr1.join('')===arr2.join('')) {
//     console.log("its anagrams");

//   } else {
//     console.log("its not anagrams");

//   }

// } else {
//    console.log("its not anagrams");
// }

// *****************************************************************************************
// *****************************************************************************************

// 8. Find and return the first non-repeating character in a string.

// let str = "harsha";

// for (let i = 0; i < str.length-1; i++) {
//     let flag = true;
//   for (let j = i + 1; j <= str.length; j++) {
//     if (str.charAt(i) === str.charAt(j)) {
//       flag = false;
//     }
//   }
//   if (flag) {
//     console.log(str.charAt(i));
//     break;
//   }
// }

// *****************************************************************************************
// *****************************************************************************************

// 10. Move all zeroes in an array to the end while keeping the order of non-zero elements.

// let arr = [2, 0, 4, 0, 6, 0, 3, 5];

// for (let i = 0; i < arr.length; i++) {
//   let    j = i+1;
//   let temp= arr[i];
//   if (arr[i] === 0) {
//       arr[i] = arr[j];
//       arr[j] = temp;
//   }
//   j++;
// }
// console.log(arr);

// *****************************************************************************************
// *****************************************************************************************

// 11. Count the number of vowels (a, e, i, o, u) in a given string.
// let str = "harsh";
// let vowels="aeiouAEIOU";
// let count = 0;
// for (let char of str) {
//   if (vowels.includes(char)) {
//     count++;
//   }
// }
// console.log(count);

// *****************************************************************************************
// *****************************************************************************************

// 12. Find the missing number in a sequence of integers from 1 to n, where one number is missing.

// let arr =[1,3,4,5,6,7];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i+1]-arr[i]!==1) {
//     console.log("missing number is ",arr[i]+1," at ",i+1," index");
//     break;
//   }
// }

// *****************************************************************************************
// *****************************************************************************************

// 14. Find the longest word in a given string.

// let str = "hello good morning";
// let arr = str.split(' ');
 
// let largest = arr.reduce((acc, next) => {
//   return acc.length > next.length ? acc : next; 
// });

// console.log(largest);

// *****************************************************************************************
// *****************************************************************************************



// let str = "hello good morning"

// let arr = str.split(' ');
// let largest = arr.reduce ((acc,next)=> {
//     return acc.length > next.length ? acc :next;
// })

// console.log(largest);


// let str = "hello good morning and goodnight"

// let arr = str.split(' ')

// let largest = arr.reduce((acc,next)=>{
//     return acc.length > next.length ? acc :next;
// })
//  console.log(largest);



// 6. Reverse the digits of a given integer while maintaining the sign.
// let num = -234;
// let str= num.toString();
// let reverse="";
// for(let i = str.length-1;i >=0;i--){
//     reverse+= str.charAt(i);
// }
// console.log(reverse);


// let num = -254;
// let str = num.toString();
// let reverse ="";
// for(let i = str.length-1; i>=0; i--){
//     reverse+= str.charAt(i);
// }
 
// console.log(reverse);



// 12. Find the missing number in a sequence of integers from 1 to n, where one number is missing.

// let arr =[1,3,4,5,6,7];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i+1]-arr[i]!==1) {
//     console.log("missing number is ",arr[i]+1," at ",i+1," index");
//     break;
//   }
// }




 
