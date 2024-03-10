// 1. non-promisified function:
// does not returns anything and Callback as an input.

// 2. Promisified function:
// does return promise and doesnt takes callbacks as input.


//returned nothing
function myOwnSetTime(callback, duration) {
    setTimeout(callback, duration);
}

// returns promise
function promisifiedMyOwnSetTimeout(duration) {
    const p = new Promise(function (resolve) {
        setTimeout(function(){
            resolve();
        }, duration);  
    });
    return p;
}

//promise 
const ans = promisifiedMyOwnSetTimeout(1000);
ans.then(function(){
    console.log("timeout is done")
});
