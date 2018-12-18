const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const student = require('./routes/student.js');
const ejs = require('ejs');
const config = require('./config/connection');
const http = require('http');
const fs = require('fs');
const pr = require('pg')

//Initialize app
const app = express();

//Middleware for ejs engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware for routes
app.use('/', student);

//Middleware for body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ));

//Create port and list on this port
app.set('port', (process.env.PORT||3015));
app.listen(app.get('port'), function(err) {
    if(err) throw err;
    console.log('Server is listening on port:' + app.get('port'));
});
