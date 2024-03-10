// const user = '{"name": "vishal", "age": 22}'

// const user1 = JSON.parse(user);
// console.log(user1["name"]);

// const user2 = {
//     name: "pankaj",
//     age: 22
// }


// let u3 = JSON.stringify(user2)
// console.log(u3)

function isPalindrome(str){
    let a = str.toLowerCase();
    let x = 0;
    let y = a.length - 1;

    while(y>x){
        if(a[x++]!==a[y--]){
            return false;
        }
        return true;
    }
    


}

let r = isPalindrome("aback")
console.log(r)