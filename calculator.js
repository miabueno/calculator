const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

var port = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send("Thanks for post");
});

app.listen(port, (req, res) => {
    console.log("Server is running on port " + port);
});
