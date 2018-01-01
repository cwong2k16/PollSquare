var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
var keys = require('../config/keys');

passport.use(
    new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: keys.keys.clientId,
    clientSecret: keys.keys.secretKey
    }, (accessToken, refreshToken, profile, done)=> {
        console.log(profile);
    })
);