const router = require('express').Router();
const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};
router.get('/', authCheck, (req, res) => {
    // res.send('you are logged in, this is your profile - ' + req.user.username);
    res.render('poll', {user: req.user});
    console.log("aadsad");
});

router.post('/', (req, res)=>{
    res.send("Your post has been submitted. :D");
});
module.exports = router;