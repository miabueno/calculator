const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

var port = 3000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    sum = num1 + num2;
    res.send("Addition of this is " + sum);
});

app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight/(height ** 2);
    res.send("<h1>Bmi is " + bmi + "</h1>");
});

app.listen(port, (req, res) => {
    console.log("Server is running on port " + port);
});
