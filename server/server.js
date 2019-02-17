const express = require('express'),
    app = express(),
    flight = require("./controllers/flight");

app.use('/api/', flight);

console.log("start at 3000");

app.listen(3000);