// // function showing sum of 2 numbers

// // function Sum(a,b){
// //     return a+b;
// // }

// // const value = Sum(2,81);
// // const value1= Sum(5,6)
// // console.log(value);
// // console.log(value1);

// // functions CAN take other Function as INPUT

// function Sum(x,y,fnToCall){
//     let result = x+y;
//     fnToCall(result);   
// }

// function ActiveVoice(data){
//     console.log("Result of the sum is: "+ data);
// }

// function PassiveVoice(data){
//     console.log("Sum's result is: "+ data);
// }


// const ans = Sum(1,2, PassiveVoice);

// REWRITTING THE CODE  with other example.

function Calculation(a,b, FinalFunction){
    const ans = FinalFunction(a,b)
    return ans;
}

function FinalFunction(type){
    if(type == "add"){
        return add();
    } 
    if(type=="sub"){
        return sub();
    }
}

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const value = Calculation(12,7, sub );
console.log(value);

// Example2

function greet(){
    console.log("hello world")
}

//set timer
setTimeout(greet, 2*1000) // after 2 seconds the func. greet will be called. 








