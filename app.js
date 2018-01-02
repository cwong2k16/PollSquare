var express = require('express');
var authRoute = require('./routes/authRoute');
var passportSetup = require('./config/passport-setup');
var keys = require('./config/keys');
var cookieSession = require('cookie-session');
var passport = require('passport');
var mongoose = require('mongoose');

var app = express();
app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongodb.dbURL);

app.use('/auth', authRoute);

app.use('/assets', express.static('./assets'));

app.get('/', (req, res)=>{
    res.render('home.ejs', {user: req.user});
});

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});