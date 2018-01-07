var express = require('express');
var authRoute = require('./routes/authRoute');
var passportSetup = require('./config/passport-setup');
var keys = require('./config/keys');
var cookieSession = require('cookie-session');
var passport = require('passport');
var mongoose = require('mongoose');
var profileRoute = require('./routes/profileRoute');
var pollRoute = require('./routes/pollRoute');
var polls = require('./models/poll-model');

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
app.use('/profile', profileRoute);
app.use('/poll', pollRoute);

app.use('/assets', express.static('./assets'));

app.get('/', (req, res)=>{
    polls.find({}, function(err, data){
        if(err){
            throw err;
        }
        res.render('home.ejs', {user: req.user, data: data});
    });
});

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});