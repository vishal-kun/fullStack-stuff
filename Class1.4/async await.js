// we use this instead of .then()

const { resolve } = require("path/win32");

function kirat(){
    new Promise(function(resolve){
      setTimeout(function(){
        resolve("hi brother")
      }, 2000)
    })
}

 async function main(){
    let value = await kirat(); 
    console.log("hey bro")
}

main();
 
