
const express = require('express');
const app = express();
const cal = require('./logic');
app.post('/add', (req, res) => {
    try{
        console.log(req)
        var result = new cal().add(req);
        console.log(result)

    res.json(result);
    }
    catch(error){
        res.json(error);
    }
});

app.post('/subtract', (req, res) => {
    try{
        console.log(req)
        var result = new cal().subtract(req);
        console.log(result)

    res.json(result);
    }
    catch(error){
        res.json(error);
    }
});



module.exports = app



