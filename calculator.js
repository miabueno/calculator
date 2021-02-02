const express = require('express');
const app = express();

var port = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    res.send("Thanks for post");
});

app.listen(port, (req, res) => {
    console.log("Server is running on port " + port);
});
