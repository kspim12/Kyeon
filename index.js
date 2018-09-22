const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('bootstrap'));

app.get('/khk', function(req, res){
    fs.readFile('./bootstrap/main.html', function(err, data){
        res.end(data);
    })
});

app.get('/', function(req, res){
    res.end('web test...');
});

app.listen(10101, function(){
    console.log('server started');
});