// var b = 1
// let d = 2
// const  = 3

// function hoist (b , c) {

//    a = b + c ;
//    console.log(a);
//    console.log(b);

// }

// hoist()

// console.log(foo());

// function foo() {
//     return "hello";
// }

// console.log(bar());

// var bar = function() {
//     return "Helloooo"
// }

// var x = 10;
// function test() {
//     console.log(x);
//     var x = 20;
// }

// text()

// console.log(typeof foo);

// var foo = function () {
//     console.log("HELLO");

// };

// console.log(test);
// var test = 1;
// function test() {}
//     console.log(test);

// ********************Primitive and Non Primitive ****************************
// let greeting = "HELLO";
// greeting[0] = "h";
// console.log(greeting);

// let a = 1234567;
// a[3] = 5;
// console.log(a);

// let obj = {
// name:"sam",
// age:25
// }

// obj.name = "aamer";
// obj.city = "Raichur"
// delete obj.age

// console.log(obj);

// let greetings = "HELLO";
// greetings[2] = "k";

// let greetings1 = "kello";
// console.log(greetings);
// console.log(greetings1);

// let a = 10;
// let b = a;
// b = 20;
// console.log(b);
// console.log(a);

// ************************************************Strings Practice**********************************

// let str = "i love biryani"

// console.log(str);

// console.log(str.length);
// console.log(str.charAt(5));
// console.log(str.toLocaleUpperCase());
// console.log(str.includes("love"));
// console.log(str.trim());
// console.log(str.substring(4,8));
// console.log(str.slice(4,8));

// console.log(math.pow(2,3));

// let prices = [ 100, 200, 300, 400]

// let discPrices = prices.map(prices=>prices*0.9)

// console.log(discPrices);

// let prices1 = [ 100, 200, 300]

// let dic= prices1.map(prices1=> prices1*0.9)

// console.log(dic);

// const myPromise =new Promise((resolve,reject)=>{

//     let success = false;
//     if(success){
//         console.log("Success");

//     }
//     else{
//         console.log("rejected");

//     }
// })

// const promise = new Promise ((resolve, reject)=>{
//  let success= true

//  if(success) {
//     resolve("success");

//  }
//  else{
//     reject("rejected");

//  }
// })

// console.log(promise);

// promise.then(result=>{
//     log("success",result)

// })
// .then(result=>{
//     console.log("error", error);

// })

// for-of

// const a = () =>{
//     let b = 10 ;
//    b= 20;
// }

// console.log(b);

// console.log(b);

// function demo () {
//     let a= 10;

//     let b = 20

// }

// demo();

// const btn = document.getElementById("b1")

// btn.addEventListener("click", (event)=>{
//     btn.innerText = "clicked";
// });

// // Select the div elements
// const div1 = document.getElementById('div1');
// const div2 = document.getElementById('div2');

// // Add event listeners to change text on click
// div1.addEventListener('click', () => {
//   div1.innerText = 'Hi';
// });

// div2.addEventListener('click', () => {
//   div2.innerText = 'Hello';
// });

// const div1 = document.getElementById("div1");
// const div2 = document.getElementById("div2");

// div1.addEventListener("click", ()=>{
// div1.innerText = "hi"
// })

// div2.addEventListener("click",()=>{
//     div2.innerText = "hello"
// })

// const div1 = document.getElementById("div1");
// const div2 = document.getElementById("div2");

// div1.addEventListener("click", ()=>{
//     div1.innerText = "hwlloo"
// })

// div2.addEventListener("click", ()=>{
//     div2.innerText = "aaaaaaaaaaaaa"
// })

// div1.addEventListener("mouseover", ()=>{
//     div1.style.backgroundColor = "red"
// })

// const div1 = document.getElementById("div1");
// const div2 = document.getElementById("div2");

// div1.addEventListener("click",()=>{
//     div1.style.backgroundColor = " red"
// })

// div2.addEventListener("click",()=>{
//     div2.style.backgroundColor = " pink     "
// })

// 10. move all zeroes in an array to end while keeping the order of non-zero elements

// let arr = [1,4,0,0,8,2,0,3];
// let arr1 =[]
// let arr2 = []

// arr.map((val)=>{
//   if(val>0){
//       arr1.push(val)
//   }
//   else if(val == 0){
//       arr2.push(val)
//   }
// })

// let result =arr1.concat(arr2)
// console.log(result);

// let arr = [1,1,5,0,51,0,5,1,5,0]

// let arr1=[]
// let arr2 = []

// arr.map((val) =>{
//     if(val>0){
//         arr1.push(val)
//     }
//     else{
//         arr2.push(val)
//     }
// })
// let results =arr1.concat(arr2)
// console.log(results);

// let arr = [1,1,5,0,51,0,5,1,5,0]

// let arr1 = []
// let arr2 = []

// arr.map((val)=>{
//     if(val>0){
//         arr1.push(val)
//     }
//     else {
//         arr2.push(val)
//     }

// })
// let result = arr1.concat(arr2)
// console.log(result);

// arr.map((val) =>{
//     if(val>0){
//         arr1.push(val)
//     }
//     else{
//         arr2.push(val)
//     }
// })
// let result = arr1.concat(arr2)
// console.log(result);

// 6. Reverse the digits of a given integer while maintaining the sign.
// let num = -234;
// let str= num.toString();
// let reverse="";
// for(let i = str.length-1;i >=0;i--){
//     reverse+= str.charAt(i);
// }
// console.log(reverse);

// 11. Count the number of vowels (a, e, i, o, u) in a given string.

// let str = "morning";
// let vowels="aeiouAEIOU";
// let count = 0;
// for (let char of str) {
//   if (vowels.includes(char)) {
//     count++;
//   }
// }
// console.log(count);

// let str1 = "morning";
// let vowelss = "aeiouAEIOU";
// let countt = 0;
// for (let char of str){
//     if(vowelss.includes(char)) {
//         count++;
//     }
//     }

// let str = "soibvilyaebnrvi"

// let vowles = "aeiouAEIOU"

// let count = 0 ;
// for (let char of str){
//     if(vowles.includes(char)){
//         count++
//     }
// }

// console.log(count);

// 14. Find the longest word in a given string.

// let str = "hello good morning";
// let arr = str.split(' ');

// let largest = arr.reduce((acc, next) => {
//   return acc.length > next.length ? acc : next;
// });

// console.log(largest);

// 6. Reverse the digits of a given integer while maintaining the sign.
// let num = -234;
// let str= num.toString();
// let reverse="";
// for(let i = str.length-1;i >=0;i--){
//     reverse+= str.charAt(i);
// }
// console.log(reverse);

const fetchApi = async () => {
  let response = await fetch("https://dummyjson.com/users")
    .then(async (resp) => {
      const userdata = await resp.json();
      const data = userdata.users;
      console.log(userdata);

      const mydiv = document.getElementById("mydiv");
      data.map((ele) => {
        const fname = document.createElement("li");

        const lname = document.createElement("li");
        fname.innerText = ele.firstName;
        lname.innerText = ele.lastName;
        mydiv.append(fname, lname);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
fetchApi();
