// 5*4**2*1

function recurr(n){
    let fact=1 ;

    for(let i =n; i>0; i-- ){
        fact  *= i;

    }
    return fact;
}

console.log(recurr(5));