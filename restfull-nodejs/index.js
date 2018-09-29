const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({extended: false, limit: '2mb'}));
app.use(bodyParser.json( {limit: '2mb'} ));
app.use(expressValidator());
consign()           
    .include('utils')
    .include('routes').into(app);

const port = 4000;
app.listen(port, '127.0.0.1', () => {
    console.log(`server running on port ${port}..`);
    
})