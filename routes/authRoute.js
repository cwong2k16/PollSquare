var router = require('express').Router();

router.get('/login', (req, res)=>{
    res.render('login.ejs');
});

router.get('/google', (req, res)=>{
    res.send('google');
});

module.exports = router;