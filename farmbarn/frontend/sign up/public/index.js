// first import install library

var express =require("express");
var bodyParser =require("body-parser");
var mongoose =require("mongoose");

// create app

const app = express()

app.use(bodyParse.json())
app.use(express.static('public'))
app.use(bodyParse.urlencoded({
    extended:true
}))

// connect database


mongoose.connect('mongodb://0.0.0.0:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var db = mongoose.connection;

// check connect

db.on('error', () => console.log("error in connecting database"));
db.once('open', () => console.log("Connected to Database"));




app.get("/",(req, res) => {

    req.set({
        "Allow-access-Allow-Origin": '*'
    })

    return res.redirect('index.html');

}).listen(3000);

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://0.0.0.0:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;