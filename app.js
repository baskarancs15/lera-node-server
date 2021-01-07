var express = require('express');
var port = 3100;
var app = express();
app.listen(port, function () {
    console.log("Server Started on port" + port);
})