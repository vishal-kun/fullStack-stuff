const zod = require('zod');

//if this is an array of number with
// atleast 1 input, return true, else return false

function validateInput(obj) {
    const schema = zod.object( {
        email : zod.string().email(),
        password : zod.string().min(8),
    })

    const respone = schema.safeParse(obj);
    console.log(respone);
}

validateInput({
    email : "vishal@email.cmo",
    password : "54464646464"
});