const userController =require('../controllers/users.controller');
const tweetController =require('../controllers/tweets.controller');
const express = require('express');
const router = express.Router();

/* Routes and Controller Access */
router.get('/login', (req,res)=>{
	if (req.session && req.session.username) 
		res.redirect('/');
	else
		res.sendFile('views/login.html',{root:__dirname+'/..'});
})

router.post('/login', userController.loginUser);
router.post('/logout', userController.logoutUser);

// Allows user access to other routes if logged in
router.use(function(req, res, next){
	if (req.session && req.session.username){
		next();
	} else {
		res.redirect('/login');
	}
})

router.get('/tweets', tweetController.getTweets);

router.get('/', (req,res)=>{
	res.sendFile('views/index.html',{root:__dirname+'/..'});
})

module.exports = router;