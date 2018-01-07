const router = require('express').Router();
var User = require('../models/user-model');
const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};
router.get('/', authCheck, (req, res) => {
    // res.send('you are logged in, this is your profile - ' + req.user.username);
    User.findOne({username: req.user.username}, function(err, data){
        res.render('profile', {user: req.user, data: data});
    });
});
module.exports = router;