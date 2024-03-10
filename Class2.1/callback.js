// function callback
function cube(n){
    return n*n*n;
}

function square (n)  {
    return n*n;
}

function quad(n){
    return n*n*n*n;
}

function sumOf(a,b,fn){
    let x = fn(a);
    let y = fn(b);
    return x+y;
}

console.log(sumOf(2,2,quad))
console.log(sumOf(2,2,cube))
console.log(sumOf(2,2,square))