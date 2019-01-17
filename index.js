var express = require("express"),
    app = express(),
    port = 3000,
    bodyParser = require('body-parser');

var listRoutes = require("./routes/list")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.sendFile("index.html")
})

app.use("/api/list", listRoutes)

app.listen(port, function(){
    console.log("App is running on port " + port)
})