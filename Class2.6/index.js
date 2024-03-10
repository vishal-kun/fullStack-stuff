// map, filter, arrow fn

// given a array, give back a new array in which every value is multiplied by 2

//MAP
const input = [2, 4, 6, 8];
const newArray = [];

for (let i = 0; i < input.length; i++) {
    newArray.push(input[i] * 2)
}

//console.log(newArray);

const ans = input.map((i) => {
    return i * 2;
});
console.log(ans);

//FILTER 

// Q2.   input = [2,4,5,9,7] & result should be [2,4]

let arr = [2,4,5,7,9];
const newArr = []

for(let i=0; i<arr.length; i++){
    if(arr[i] %2 ==0){
       newArr.push(arr[i]);
    }
}

// using filter

function filterFun(n){
    if(n%2==0){
        return true;
    } else {
        return false;
    }
}

const a = arr.filter(filterFun);
console.log(a)






