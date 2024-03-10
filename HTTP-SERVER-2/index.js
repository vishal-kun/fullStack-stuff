const express = require('express')
const bodyParser = require("body-parser")
const app = express();
const port = process.env.PORT || 3000
app.use(bodyParser.json());

app.get("/route-handler", function(req, res){
    res.json({
        name: "Vishal",
        age:22
    })
})

app.post('/backend-api/conversation', (req, res) => {
    res.json ({
        output : "2+2=4"
    })
})


app.get('/', function(req, res){
    res.send("Hello harry")
})

app.listen(port, () => {
    console.log(`listing on port ${port}`)
})


