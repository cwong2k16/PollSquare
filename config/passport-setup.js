var passport = require('passport');

passport.use(new GoogleStrategy(
    new GoogleStrategy({
        callbackURL: '/auth/google/redirect',
        clientID:keys.google.clientID,
        clientSecret: keys.google.clientSecret
        })
  ));