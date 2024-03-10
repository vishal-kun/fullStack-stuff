const express = require("express");
const app = express();

app.listen(3001)

let numberOfRequests =0;
function calRequest(req, res, next) {
    numberOfRequests++;
    console.log(numberOfRequests);
    // next();
}


// app.use does passes middleware in the next app.get/post.. automatically
app.use(calRequest);

app.get("/route-handler", function(req, res){ 

    res.json({
        msg: "hi there"
    })
});