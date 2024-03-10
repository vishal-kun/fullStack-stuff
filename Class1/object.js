// const person = ["vishal", "kamal", "pankaj", "sandeep"];
// const gender = ["male", "female", "female", "male"];

// for(let i=0; i< person.length; i++){
//     if(gender[i]=="female"){
//         console.log(person[i])
//     };
// }


// const user1 ={
//     firstName: "harry",
//     gender: "male"
// }

// console.log(user1["gender"])

// ARRAYS JUST CANT BE OF NUMBER AND STRING BUT U CAN ALSO MAKE ARRAY OF OBJECTS.

const allUser = [{
    firstName: "harry",
    gender: "male"
}, {
    firstName: "vishal",
    gender: "male"
}, {
    firstName: "kamal",
    gender: "female"   
}] 

for(let i=0; i<allUser.length; i++){
    if(allUser[i]["gender"]=="male")
    console.log(allUser[i]["firstName"])
}



