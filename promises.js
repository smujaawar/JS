// let promise = new Promise(function(resolve, reject) {    
//     // Make an asynchronous call and either resolve or reject
// });

// let promisee = new Promise (function (resolve,reject) {

// })  

// let promiseee = new Promise ( function (resolve,reject) {

// })

const resp = new Promise ((resolve,reject) => {
const sum = 6 + 5
if(sum==10) {
    resolve("Promise Resolved")
}

else{
    resolve("Promise Rejected")
}
})


resp.then((message)=>{
    console.log("this is my promise resolved");
    
})

resp.catch((message)=>{
    console.log("this is my promise rejected");
    
})