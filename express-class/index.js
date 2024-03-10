const express = require("express")
const app = express();

const users = [{
    name : "kamal",
    kidneys : [{
        healthy: false
    }]
}];

app.get("/", (req, res) => {
    const kamalKidney = users[0].kidneys;
    const numberOfKidney = kamalKidney.length;
    let numberOfHealtyKidney = 0;

    for(let i =0; i<kamalKidney.length; i++){
        if(kamalKidney[i].healthy){
            numberOfHealtyKidney = numberOfHealtyKidney + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidney - numberOfHealtyKidney;

    res.json({
        numberOfKidney,
        numberOfHealtyKidney,
        numberOfUnhealthyKidneys
    })

})

app.use(express.json);

app.post("/", (req, res)=>{
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
        healthy: isHealthy
    })

    res.json({
        msg: "Done!!"
    })
})

app.put("/", function(req, res){
    for(let i = 0; i<users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
})

app.listen(3000);