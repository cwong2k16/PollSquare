var router = require('express').Router();
var passport = require('passport');

router.get('/login', (req, res)=>{
    res.render('login', {user: req.user});
});

router.get('/logout', (req, res)=>{
    req.logout();
    res.redirect('/');
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{
    res.redirect('/profile');
});

router.get('/poll', (req, res)=>{
    res.redirect('/poll');
});

module.exports = router;
