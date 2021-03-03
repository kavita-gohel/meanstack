var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var app = express();
mongoose.set('useFindAndModify', false);
const route = require('./routes/route');
app.use(bodyparser.urlencoded({ extended: true }))

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contact');
mongoose.connection.on('connected', () =>{
    console.log('Connected to database mongodb @ 27017');
});
mongoose.connection.on('error', (err) =>{
    if(err){
        console.log('Error in databaseconnection',err);
    }
});



//port no. 
const port = 3000;

//adding middleware - cors
app.use(cors());

//add body-parser
app.use(bodyparser.json());
app.use('/api', route);

//static path
app.use(express.static(path.join(__dirname,'public')));


// app.use('./api',route);

app.get('/', (req, res) => {
    res.send('foobar');
});

app.listen(port,() => {
    console.log('Server started at port: ',port);
});