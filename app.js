var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('home');
});

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});