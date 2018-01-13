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

router.delete('/:name/:id', (req, res)=>{
    var pollName = req.params.name;
    var pollId = req.params.id;
    var full = '/poll/' + pollName + '/' + pollId;

    Poll.find({link: full.replace(/\-/g, " ")}).remove(function(err, data){
        if(err){
            throw err;
        }
    });

    User.find({_id: req.user.id}, (err, data)=>{
        if(err){
            throw err;
        }
        if(data){
            var links = data[0].links;
            var names = data[0].polls;
            var index = links.indexOf(full);
            console.log(full);

            links[index] = null;
            names[index] = null;
            
            var data = data.pop();

            links = data.links.filter(function(word){
                return (new Boolean(word) != false)
            });
            names = data.polls.filter(function(word){
                return (new Boolean(word) != false)
            });

            data.links = links;
            data.polls = names;

            data.save(function(err){
                if(err){
                    throw err;
                }
                else{
                    res.json(data);
                }
            });
        }
        else{
            res.send("Invalid");
        }
    });
});

module.exports = router;