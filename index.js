var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));
app.get("/", function (req, res) {
    console.log("GET");
    res.sendFile(__dirname+'/public/welcome.vxml');
})
app.post("/", function (req, res) {
    console.log("POST");
    res.contentType('application/xml');
    res.sendFile(__dirname+'/public/welcome.vxml');
})
app.listen(process.env.PORT||3000);