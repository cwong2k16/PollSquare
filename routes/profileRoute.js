const router = require('express').Router();
var User = require('../models/user-model');
var Poll = require('../models/poll-model');
const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};
router.get('/', authCheck, (req, res) => {
    // console.log(req.user);
    // res.send('you are logged in, this is your profile - ' + req.user.username);
    User.findOne({_id: req.user.id}, function(err, data){
        if(err){
            throw err;
        }
        if(data){
            res.render('profile', {user: req.user, data: data});
        }
        else{
            res.send("Invalid request");
        }
    });
});

router.delete('/:item/:item2', (req, res)=>{
    console.log(req.params.item);
});

module.exports = router;