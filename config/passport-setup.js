var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var keys = require('../config/keys');
var User = require('../models/user-model');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: keys.keys.clientId,
    clientSecret: keys.keys.secretKey
    }, (accessToken, refreshToken, profile, done)=> {
        User.findOne({googleId: profile.id}).then((currentUser)=>{
            if(currentUser){
                done(null, currentUser);
            }
            else{
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser)=>{
                    done(null, newUser);
                });
            }
        });
    })
);