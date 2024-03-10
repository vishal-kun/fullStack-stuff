 // Promises aee just used to make Async code look better

 // promise can have 3 states => pending, resolved, rejected.
// first argument in Promise is function
 const { on } = require('events');
const fs = require('fs');

 function kirat(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data);
        });
        
    })
 }

 function onDone(data){
    console.log(data)
 }
 kirat().then(onDone);
 setTimeout(function(){
    kirat().then(onDone);
 }, 2000)