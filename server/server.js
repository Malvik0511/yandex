const express = require('express'),
    app = express(),
    flight = require("./controllers/flight"),
    port = 8000;

app.use('/api/', flight);

app.listen(port);

console.log("started");