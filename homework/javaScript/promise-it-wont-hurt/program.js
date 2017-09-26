//Warm up
//setTimeout(()=>{console.log('TIMED OUT!')}, 300);

//fulfill a promise
// let promise = new Promise(function(fulfill, reject){
//    setTimeout(()=>{
//       fulfill('FULFILLED!');
//    }, 300);
// })

// promise.then(console.log)

//reject a promise
//'use strict';
// let promise = new Promise((fulfill, reject)=>{
//    setTimeout(()=>{
//       let error = new Error('REJECTED!');
//       reject(error);
//    }, 300)
// })
// function onReject(error){
//    console.log(error.message);
// }
// promise.catch(function(error){
//       onReject(error);
// })

//to reject or not to reject
// let promise = new Promise((fulfill, reject)=>{
//    fulfill('I FIRED');
//    reject(new Error('I DID NOT FIRE'));
// })
// let onRejected = function(error){
//    console.log(error.message);
// }
// promise.then(console.log)
//        .catch(onRejected);

//always asynchronous
