var router = require('express').Router();
var passport = require('passport');

router.get('/login', (req, res)=>{
    res.render('login.ejs');
});

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

module.exports = router;