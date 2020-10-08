const express = require('express');

const app = express();
app.use(express.json());

class cal{
  
    add(req){
        try{
        var x = req.body.x;
        var y = req.body.y;
        var x1 = parseInt(x, 10);
        var y1 = parseInt(y, 10);
        var ans = x1 + y1;
        return(ans);
    }
    catch(error){
        var msg = {
            msg : `error is good${error}`
        }
        return msg;
    }
            }

    subtract(req){
        try{
        var x = req.body.x;
        var y = req.body.y;
        var x1 = parseInt(x, 10);
        var y1 = parseInt(y, 10);
        var ans = x1 - y1;
        return(ans);
    }
    catch(error){
        var msg = {
            msg : `error is good${error}`
        }
        return msg;
    }
                 }

    multiply(req){
        try{
        var x = req.body.x;
        var y = req.body.y;
        var x1 = parseInt(x, 10);
        var y1 = parseInt(y, 10);
        var ans = x1 * y1;
        return(ans);
    }
    catch(error){
        var msg = {
            msg : `error is good${error}`
        }
        return msg;
    }
                  }

    divide(req){
        try{
        var x = req.body.x;
        var y = req.body.y;
        var x1 = parseInt(x, 10);
        var y1 = parseInt(y, 10);
        var ans = x1 / y1;
        return(ans);
    }
    catch(error){
        var msg = {
            msg : `error is good${error}`
        }
        return msg;
    }
                }

}

module.exports = cal
