const bodyParser = require('body-parser');
const router = require('express').Router();
var Poll = require('../models/poll-model');

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', authCheck, (req, res) => {
    // res.send('you are logged in, this is your profile - ' + req.user.username);
    res.render('poll', {user: req.user});
});

router.post('/', (req, res)=>{
    console.log(req.body.nom);
    res.send("Your post has been submitted. :D");
    var poll = new Poll();
    var obj = {};
    var obj2 = {};
    poll['owner'] = req.user.username;
    poll['options'].push(obj);
    poll['voters'].push(obj2);
    for (var key in req.body) {
        if(key === "title"){
            // console.log("Title of poll: " + req.body[key]);
            poll['title'] = req.body[key];
        }
        else if (key !== "submit"){
            // console.log("Option: " + req.body[key]);
            poll['options'][0][req.body[key]] = 0;
        }
    }
    poll.save();
});
module.exports = router;